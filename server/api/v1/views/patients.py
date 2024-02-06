from api.v1.views import app_views
from models import storage
from flask import request, abort, make_response, jsonify
from  api.utils import verifyDetails, hashPassword
from flasgger.utils import swag_from
from models.patient_details import PatientDetails
from models.nurse_report import NurseReport
from flask_jwt_extended import jwt_required

@app_views.route('/patient/register', methods=["POST"])
@jwt_required()
@swag_from("documentation/profile/create_patient_profile.yml")
def regpatient():
    """Register a patient to the database"""
    class_ = "PatientDetails"
    details = request.get_json()
    new = {}
    new["first_name"] = details.get("first_name")
    new["last_name"] = details.get("last_name")
    new["email"] = details.get("email")
    new["address"] = details.get("address")
    new["phone"] = details.get("phone")
    new["password"] = hashPassword(details.get("first_name"))

    new["sex"] = details.get("sex")
    new["next_of_kin"] = details.get("next_of_kin")
    new["next_of_kin_phone"] = details.get("next_of_kin_phone")
    new["next_of_kin_address"] = details.get("next_of_kin_address")
    new["relation"] = details.get("relation")
    
    check = verifyDetails(new)

    new["chronic_disease"] = details.get("chronic_disease")
    new["disability"] = details.get("disability")
    new["genotype"] = details.get("genotype")
    new["blood_group"] = details.get("blod_group")

   
    if not check:
        return (jsonify({"error": "bad request"}), 400)
    obj = {"class_": class_}
    obj["obj"] = new
    patient = storage.new(**obj)
    new["created_at"] = patient.created_at
    new["updated_at"] = patient.updated_at
    new["id"] = patient.id
    new["file_no"] = patient.file_no
    del new["password"]
    return (make_response(jsonify(new)), 201)


@app_views.route("/patient/all-profile", methods=["GET"])
@jwt_required()
@swag_from("documentation/profile/all_patient.yml")
def allPatientProfile():
    """Get all Patient profile Details"""
    lis = storage.get_all("PatientDetails")
    if not lis:
        abort(404)
    return (make_response(jsonify(lis), 200))

@app_views.route("/Patient/all-Record", methods=["GET"])
@swag_from("documentation/patient/all_patient_record.yml")
def allPatientRecord():
    """Get all patient records"""
    records = storage.session.query(PatientDetails).all()
    # print(record[0].nurse_report[1].to_dict())
    new = {}
    lis = []
    obj = {}
    obj_lis = []
    count = 0
    for record in records:
        new[record.file_no] = {"details": record.to_dict()}
        for nurse in record.nurse_report:
            obj[count] = {}
            obj[count]["nurse_record"] = nurse.to_dict()
            if nurse.doctor_report:
                obj[count]["doctor_record"] = nurse.doctor_report.to_dict()
            else:
                obj[count]["doctor_record"] =  None
            if nurse.lab_report:
                obj[count]["lab_record"] = nurse.lab_report.to_dict()
            else:
                obj[count]["lab_record"] = None
            count += 1
            obj_lis.append(obj)
            del obj
            obj = {}
        new[record.file_no]["medical_reocrd"] = obj_lis
        lis.append(new)
        del obj_lis
        del new
        new = {}
        obj_lis = []
        count = 0      
    return (jsonify(lis))


@app_views.route("/patient/all-single-record/<id>", methods=["GET"])
@jwt_required()
@swag_from("documentation/patient/single_patient_record.yml")
def singlePatientRecord(id):
    """Get all records for single patient"""
    records = storage.session.query(NurseReport).filter_by(patient_id=id).all()
    obj = {}
    obj_lis = []
    count = 0
    if not records:
        return (jsonify({"error": "Not found"}))
    for nurse in records:
        obj[count] = {}
        obj[count]["nurse_record"] = nurse.to_dict()
        if nurse.doctor_report:
            obj[count]["doctor_record"] = nurse.doctor_report.to_dict()
        else:
            obj[count]["doctor_record"] =  None
        if nurse.lab_report:
            obj[count]["lab_record"] = nurse.lab_report.to_dict()
        else:
            obj[count]["lab_record"] = None
        count += 1
        obj_lis.append(obj)
        del obj
        obj = {}
    return (jsonify(obj_lis))


@app_views.route("/patient/admit")
@jwt_required()
def patient_admit():
    obj = {"class_": "PatientDetails", "key": "PatientDetails.admitted", "val": "True"}
    user = storage.filter_all(**obj)
    return (jsonify(user))

# @app_views.route("/singlePatientRecord/<id>", methods=["GET"])
# @swag_from("documentation/patient/single_patient_record.yml")
# def singlePatientRecord(id):
#     """Get all records for single patient"""
#     records = storage.session.query(NurseReport).filter_by(patient_id=id).all()
#     obj = {}
#     obj_lis = []