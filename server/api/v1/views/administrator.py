from api.v1.views import app_views
from models import storage
from flask import request,  make_response, jsonify
from datetime import datetime, time
from  api.utils import verifyDetails, hashPassword, unhashpassword, admin_required

from flasgger.utils import swag_from


from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required



@app_views.route("/regstaff", methods=["POST"])
@jwt_required()
@swag_from("documentation/profile/create_staff_profile.yml")
def regStaff():
    """Register a Staff to the database"""
    class_ = "Staff"
    details = request.get_json()
    new = {}
    new["first_name"] = details.get("first_name")
    new["last_name"] = details.get("last_name")
    new["email"] = details.get("email")
    new["address"] = details.get("address")
    new["phone"] = details.get("phone")
    new["job_title"] = details.get("job_title")
    new["licence_no"] = details.get("licence_no")
    new["user_role"] = details.get("user_role")
    new["password"] = hashPassword(details.get("first_name"))
    new["sex"] = details.get("sex")
    new["next_of_kin"] = details.get("next_of_kin")
    new["next_of_kin_phone"] = details.get("next_of_kin_phone")
    new["next_of_kin_address"] = details.get("next_of_kin_address")
    new["relationship"] = details.get("relationship")

    check = verifyDetails(new)
    if not check:
        return (jsonify({"error": "invalid input"}), 400)
    obj = {"class_": class_}
    obj["obj"] = new
    staff = storage.new(**obj)
    new["created_at"] = staff.created_at
    new["updated_at"] = staff.updated_at
    new["reg_no"] = staff.reg_no
    new["id"] = staff.id
    del new["password"]
    return  (jsonify(new), 201)



@app_views.route("/getprofile/<id>", methods=["GET"])
@jwt_required()
@swag_from("documentation/profile/get_staff.yml")
def getProfile(id):
    """Get the Patient or Staff Profile details in database by ID"""
    class_name = id.split('.')
    class_ = class_name[0]
    obj = {"class_": class_, "obj": {"id": id}}
    patient = storage.get_one(**obj)
    if not patient:
        """not found request"""
        return (make_response(jsonify({'error': "Not found"}), 404))
    obj = patient.to_dict()
    return (make_response(jsonify(obj), 200))


@app_views.route("/allstaffprofile", methods=["GET"])
@jwt_required()
@swag_from("documentation/profile/get_all_staff.yml")
def allStaffProfile():
    """Get all Staff profile Details"""
    lis = storage.get_all("Staff")
    if not lis:
        return (jsonify({}))
    return (make_response(jsonify(lis), 200))


@app_views.route("/updateprofile/<id>", methods=["PUT"])
@jwt_required()
@swag_from("documentation/profile/update_profile.yml")
def updatetprofile(id):
    """Update users profile in database"""
    class_name = id.split(".")
    class_ = class_name[0]
    obj = {"class_": class_, "obj": {"id": id}}
    profile = storage.get_one(**obj)
    req = request.get_json()
    if not profile or not req:
        return (jsonify({"error": "bad request"}), 400)
    profileDetails = profile.to_dict()
    for key, value in req.items():
        if value == None:
            return (jsonify({"error": "bad request"}), 400)
        if profileDetails.get(key) != value and profileDetails.get(key) != None:
            if key == "create_at":
                setattr(profile, key, datetime.strptime(value, time))
            elif key == "updated_at":
                setattr(profile, key, datetime.strptime(value, time))
            else:
                setattr(profile, key, value)
    name = profile.to_dict()
    profile.save()
    return(make_response(jsonify(name), 201))


@app_views.route("/deleteprofile/<id>", methods=["DELETE"])
@jwt_required()
@swag_from("documentation/profile/delete_profile.yml")
def deleteprofile(id):
    """Delete Patient or Staff profile from database"""
    class_lis = id.split(".")
    class_ = class_lis[0]
    obj = {"class_": class_, "obj": {"id": id}}
    record = storage.get_one(**obj)
    storage.delete(record)
    return ({}, 200)


@app_views.route("/login", methods=["POST"])
def login():
    """login route, it requires password and reg_no ro file_no"""
    obj = {}
    reg_no = request.json.get("reg_no", None)
    file_no = request.json.get("file_no", None)
    password = request.json.get("password", None)

    """Check if the request is correct"""
    if file_no != None and password != None:
        obj["class_"] = "PatientDetails"
        obj["obj"] = {"file_no": file_no}
    elif reg_no != None and password != None:
        obj["class_"] = "Staff"
        obj["obj"] = {"reg_no": reg_no}
    else:
        return jsonify({"msg": "Bad username or password"}), 401
    
    """Check if user in database"""
    user = storage.get_one(**obj)
    if user and unhashpassword(user.password, password):
        return (jsonify({"access_token": create_access_token(identity=user.email),
         "details": user.to_dict()}))
    else:
        return (jsonify({"msg": "username or password not found!"}), 401)



@app_views.route("/duty")
@jwt_required()
def staff_duty():
    obj = {"class_": "Staff", "key": "Staff.status", "val": "True"}
    user = storage.filter_all(**obj)
    return (jsonify(user))

