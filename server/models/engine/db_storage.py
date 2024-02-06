import sqlalchemy 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask import abort
# import models
from models.doctor_report import DoctorReport
from models.drugs import Drugs
from models.lab_report import LabReport
from models.nurse_report import NurseReport
from models.patient_details import PatientDetails
from models.staff import Staff
from models.base_model import Base, BaseModel


class DBStorage:
    """Interacts with the MYSQL database """
    __engine = None
    # session = None
    allClass = [DoctorReport, Drugs, LabReport, NurseReport, PatientDetails, Staff]
    def __init__(self):
        self.__engine = create_engine('sqlite:///project.db', connect_args={'check_same_thread': False})
        Base.metadata.create_all(self.__engine)
        Session = sess_factory = sessionmaker(bind=self.__engine)
        self.session = Session()
        # print(True)

    # def reload(self):
    #     """Reloads data from the database"""
    #     Base.metadata.create_all(self.__engine)
    #     Session = sess_factory = sessionmaker(bind=self.__engine)
    #     # sess_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
    #     # Session = scoped_session(sess_factory)
    #     self.__session = Session()

    def get_one(self, **kwargs):
        class_ = eval(kwargs["class_"])
        if class_ not in self.allClass:
            return (None)
        data = self.session.query(class_).filter_by(**kwargs["obj"]).first()
        return (data)

    def filter_all(self, **kwargs):
        class_ = eval(kwargs["class_"])
        lis = []
        obj = {}

        if class_ not in self.allClass:
            return (None)
        datas = self.session.query(class_).filter(eval(kwargs["key"]) == eval(kwargs["val"])).all()
        if not datas:
            return (lis)
        for data in datas:
            obj = data.to_dict()
            lis.append(obj)
            del(obj)
            obj = {}
        return (lis)

    def new(self, **kwargs):
        """Add new object to session"""
        class_ = eval(kwargs["class_"])
        if class_ not in self.allClass:
            return (None)
        obj = class_(**kwargs["obj"]) 
        self.session.add(obj)
        self.session.commit()
        return (obj)
        
    
    def get_all(self, args):
        """Get all instance of the class in database"""
        lis = []
        patients = self.session.query(eval(args)).all()
        if not patients:
            return (None)
        for patient in patients:
            obj = patient.to_dict()
            lis.append(obj)
            del(obj)
            obj = {}
        return (lis)


    def save(self):
        """ Save obj to the database"""
        self.session.commit()

    def delete(self, arg):
        """Delete record from the database"""
        self.session.delete(arg)
        self.session.commit()

    def close(self):
        """Remove the current session"""
        self.session.remove()

    
    def get(self, cls, id):
        """ Returns the object base on class name and its ID"""
        pass

