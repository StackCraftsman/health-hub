import models
from models.base_model import BaseModel, Base
from models.nurse_report import NurseReport
import sqlalchemy
from sqlalchemy import Column, String, Text, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
import dotenv
import os

dotenv.load_dotenv()

class PatientDetails(BaseModel, Base):
    """Patient Details """
    __tablename__ = "patientDetails"
    first_name = Column(String(80), nullable=False)
    last_name = Column(String(80), nullable=False)
    email = Column(String(120), nullable=False)
    address = Column(Text, nullable=False)
    phone = Column(String(30), nullable=False)
    file_no = Column(String(80), nullable=False, unique=True)
    password = Column(String(80), nullable=False)

    sex = Column(String(10), nullable=False)
    next_of_kin = Column(String(80), nullable=False)
    next_of_kin_phone = Column(String(80), nullable=False)
    next_of_kin_address = Column(String(80), nullable=False)
    admitted = Column(Boolean, default=False)
    blood_group = Column(String(10), nullable=True)
    genotype = Column(String(30), nullable=True)
    disability = Column(String(80), nullable=True)
    chronic_disease = Column(String(80), nullable=True)
    relation = Column(String(80), nullable=False)

    nurse_report = relationship("NurseReport",
                              backref="patient",
                              cascade="all, delete, delete-orphan")

    count = int(os.getenv('PATIENT_ID'))
    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)
        PatientDetails.count += 1
        self.file_no = 'P' + str(datetime.today().year) + 'PA' + str(PatientDetails.count)
        dotenv.set_key('.env', 'PATIENT_ID', str(PatientDetails.count))