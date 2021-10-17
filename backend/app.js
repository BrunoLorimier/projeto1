require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Usuario = require('./models/usuario')
const Evento = require('./models/evento')
const mongoose = require ('mongoose')
const app = express()
app.use(express.json())
app.use(cors())

//aqui vai ter que trocar pela a string de conexão do Mongodb
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.wij83.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(() => console.log("CONEXAO OK"))
.catch(e => console.log("CONEXAO NOK: " + e))

//post do usuario (tem que colocar o endpoint entre os '')
app.post('',(req,res,next) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        senha: req.body.senha
    })
    usuario.save()
    console.log(usuario)
    res.status(201).json({mensagem: 'Usuário cadastrado'})
})

//post do evento (tem que colocar o endpoint entre os '')
app.post('',(req,res,next) => {
    const evento = new Evento({
        nome: req.body.nome,
        desc: req.body.desc,
        data: req.body.data,
        inst: req.body.inst
    })
    evento.save()
    console.log(evento)
    res.status(201).json({mensagem: 'Evento cadastrado'})
})

//get usuario (tem que colocar o endpoint entre os '')
app.get('', (req,res,next) => {
    Usuario.find().then(documents => {
        res.status(200).json({
            usuarios: documents
        })
    })
})

//get evento (tem que colocar o endpoint entre os '')
app.get('', (req,res,next) => {
    Evento.find().then(documents => {
        res.status(200).json({
            eventos: documents
        })
    })
})

module.exports = app