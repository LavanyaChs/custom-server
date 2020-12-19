const mongoose = require('mongoose')
const DB_CONN = "mongodb://127.0.0.1:27017/todomanagement"
mongoose
    .connect(DB_CONN, { useNewUrlParser: true })
    .catch(e => {
        console.log("Accquiring DB connection failed : ",e.message)
    })
const db = mongoose.connection;

module.exports = db;

//Running: 
//>node index.js