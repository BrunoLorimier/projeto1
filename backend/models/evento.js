const mongoose = require ('mongoose')

const eventoSchema = mongoose.Schema({
    nome: {type: String, required: true},
    desc: {type: String, required: true},
    data: {type: String, required: true},
    inst: {type: String, required: true}
})

module.exports = mongoose.model('Evento', eventoSchema)
