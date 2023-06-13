const express =require ('express')
const handlebars=require ('express-handlebars')
const homeRouter = require('./routes/home.router')

const http = require('http')
const {server} = require('socket.io')
const PORT = process.env.PORT || 8080
const app=express()


// server http
const server =  http.createServer(app)
const io = new Server (server)
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.use('/home', homeRouter)

io.on ('conection',(socket)=>{
    console.log('nuevo usuario conectado') 
    socket.emit('hola','HOLA CLIENTE')
    socket.on('holavuelta',(data)=>{
        console.log(data)
    })
})

server.listen(PORT,()=>{
    console.log('server ok on port 8080')
})