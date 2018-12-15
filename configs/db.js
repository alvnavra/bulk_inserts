var mongoose = require('mongoose')
var chalk = require('chalk')
var dbURL = require('./properties').DB

var connected = chalk.bold.cyan,
    error = chalk.bold.yellow,
    disconnected = chalk.bold.red,
    termination = chalk.bold.magenta;

module.exports = function(){
    mongoose.connect(dbURL,{useNewUrlParser:true,useCreateIndex:true})
    mongoose.connection.on('connected', ()=>{
        console.log(connected("Mongoose ha conectado a: ", dbURL))
    })
    mongoose.connection.on('error', (err)=>{
        console.log(error("Ha ocurrido un error en la conexión: "+err))
    })
    mongoose.connection.on('disconected', (err)=>{
        console.log(disconnected("Mongoose se ha desconectado"))
    })
    process.on('SIGINT', ()=>{
        mongoose.connection.close(()=>{
            console.log(termination("La aplicación se ha desconectado, desconectamos a Mongoose"))
        })
    })
}
