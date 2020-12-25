const mysql = require('mysql')
function connected(){
    var mySqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'',
    database:'baihocvolong'
})
mySqlConnection.connect((err)=>{
    if(!err){
        console.log('sucessfull')
    }else{
        console.log('failed '+JSON.stringify(err,undefined,2))
    }
})
}
module.exports = connected