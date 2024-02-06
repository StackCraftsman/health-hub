import models
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer
from sqlalchemy.orm import relationship
# from models.doctor_report import DoctorReport


class NurseReport(BaseModel, Base):
    """Table for Nurse Report"""
    __tablename__ = "nurseReport"
    entry = Column(Text, default=None)
    temperature = Column(Integer, default=None)
    weight = Column(Integer, default=None)
    blood_pressure = Column(Integer, default=None)
    next_appointment = Column(String(80), nullable=False)
    nurse_id = Column(String(80), ForeignKey('staffDetails.id'), nullable=False)
    patient_id = Column(String(80), ForeignKey('patientDetails.id'), nullable=False)
    doctor_report = relationship("DoctorReport",
                              backref="nurseReport",
                              uselist=False,
                              cascade="all, delete, delete-orphan")
    lab_report = relationship("LabReport",
                              backref="doctorReport",
                              cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)