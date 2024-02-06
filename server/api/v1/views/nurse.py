from api.v1.views import app_views
from models import storage
from api.v1.views import app_views
from flask import request, abort,  jsonify

from models.patient_details import PatientDetails
from flasgger.utils import swag_from
from flask_jwt_extended import jwt_required

@app_views.route("/nurse/createRecord", methods=["POST"])
@jwt_required()
@swag_from("documentation/nurse/create_record.yml")
def create_nurse_record():
    obj = {}
    new = {}
    details = request.get_json()
    new["entry"] = details.get("entry")
    new["temperature"] = details.get("temperature")
    new["weight"] = details.get("weight")
    new["blood_pressure"] = details.get("blood_pressure")
    new["next_appointment"] = details.get("next_appointment")
    new["nurse_id"] = details.get("nurse_id")
    new["patient_id"] = details.get("patient_id")

    """Check if the request contains the field nurse_id and patient_id"""
    if not new["nurse_id"] or not new["patient_id"]:
        abort(400)
    """Check if the nurse_id and patient_id are valid in the database"""
    try:
        obj["class_"] = new["patient_id"].split(".")[0]
        obj["obj"] = {"id": new["patient_id"]}
        nurse_id = storage.get_one(**obj)


        obj["class_"] = new["nurse_id"].split(".")[0]
        obj["obj"] = {"id": new["nurse_id"]}
        pat_id = storage.get_one(**obj)
        if not pat_id or not nurse_id:
            abort(400)
    except:
        abort(400)

    """Save to database"""
    obj["obj"] = new
    obj["class_"] = "NurseReport"
    record = storage.new(**obj)
    new["created_at"] = record.created_at
    new["updated_at"] = record.updated_at
    new["id"] = record.id
    return (jsonify(new), 201)


@app_views.route("/nurse/allrecord", methods=["GET"])
def all_nurse_record():
    record = storage.session.query(PatientDetails).all()
    print(record[0].nurse_report[1].to_dict())
    # print(record[4].lab)
    return ("jsonify(record[0].nurse_report[0].to_dict())")