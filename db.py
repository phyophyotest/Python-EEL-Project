from sqlalchemy.orm import sessionmaker
from dbhelper import *

Session = sessionmaker(bind=engine)
session = Session()


def createTableNow(name):
    tb = Tables(name=name)
    session.add(tb)
    session.commit()

def getAllTablesNow():
    result = session.query(Tables).all()
    return result

