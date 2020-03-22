import eel 
from db import *

eel.init("web")

@eel.expose
def createTable(name):
    createTableNow(name)
    return name

@eel.expose 
def getAllTables():
    tableList = []
    rows = getAllTablesNow() 
    for row in rows:
        table = {"id":row.id,"name":row.name}
        tableList.append(table)

    return tableList



eel.start("index.html")



