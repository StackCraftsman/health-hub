import models
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, Integer



class Drugs(BaseModel, Base):
    """Drugs table """
    __tablename__ = "drugs"
    name = Column(String(120), nullable=False)
    quantity = Column(Integer, default=0)
    amount = Column(Integer, nullable=False)
    expiry_date = Column(String(20), nullable=False)
    added_by = Column(String(80), ForeignKey("staffDetails.id"), nullable=False)

    def __init__(self, *args, **kwargs):
        """initializes Review"""
        super().__init__(*args, **kwargs)