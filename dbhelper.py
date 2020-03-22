from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import Column, Integer, String

Base = declarative_base()
engine = create_engine('sqlite:///sales.db', echo=True)


class Tables(Base):
    __tablename__ = 'tables'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    status = Column(Integer,default=0)


Base.metadata.create_all(engine)
