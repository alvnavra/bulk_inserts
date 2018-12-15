var mongoose = require('mongoose');
var db = require('./configs/db'),
    data = require('./data/data').data,
    userSchema = require('./models/users')

db();

var usuarios = mongoose.model('Users', userSchema);
usuarios.collection.insert(data, onInsert)

function onInsert(err, docs){
    if (err)
    {
        console.log('El error que se ha producido es: '+err)
    }
    else{
        console.info('%d usuarios han sido insertados satisfatoriamete.', docs.length)
    }
}
