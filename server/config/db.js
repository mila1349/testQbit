import mysql from 'mysql'

export var db = mysql.createConnection({
    user:"root",
    host:"localhost",
    database:"umkm",
})