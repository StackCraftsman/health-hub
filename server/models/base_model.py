import models 
import sqlalchemy
from sqlalchemy import Column, Date, String, DateTime, ForeignKey, Text, Integer
import uuid
from datetime import datetime, date, time
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()



class BaseModel:
    """BaseModel for all model"""
    id = Column(String, primary_key=True)
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime, nullable=False)


    def __init__(self, *args, **kwargs):
        """Initialize the base model"""
        if kwargs:
            for key, value in kwargs.items():
                setattr(self, key, value)
        if "created_at" not in kwargs:
            self.id =  self.__class__.__name__ + "." + str(uuid.uuid4()) 
            self.created_at = datetime.today()
            self.updated_at = self.created_at


    def to_dict(self):
        """returns a dictionary containing all keys/values of the instance"""
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = str(new_dict['created_at'])
        if "updated_at" in new_dict:
            new_dict["updated_at"] = str(new_dict['updated_at'])
        if '_sa_instance_state' in new_dict:
            del new_dict['_sa_instance_state']
        if "password" in new_dict:
            del new_dict["password"]
        return new_dict

    def save(self):
        """Save the object to the database"""
        self.updated_at = datetime.today()
        models.storage.save()

    def all(self):
        """Retrives all class to dict"""
        lis = []
        all_patient = session.query(self).all()
        if not all_patient:
            return (None)
        for patient in all_patient:
            lis.append(patient.to_dict())
        return (lis)

    def update(self, args):
        pass
