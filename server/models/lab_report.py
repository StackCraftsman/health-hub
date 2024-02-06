import models
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer


class LabReport(BaseModel, Base):
    """Table for lab report"""
    __tablename__ = 'labReport'
    entry = Column(Text, default=None)
    testType = Column(String, nullable=False)
    test_result = Column(Text, default=None)
    # patient_id = Column(String(80), ForeignKey('patientDetails.id'), nullable=False)
    chemist_id = Column(String(80), ForeignKey('staffDetails.id'), nullable=False)
    nurse_report = Column(String(80), ForeignKey("nurseReport.id"), nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)
