"""app_views Blueprint API"""
from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api/v1')


from api.v1.views.patients import *
from api.v1.views.administrator import *
from api.v1.views.doctor import *
from api.v1.views.nurse import *