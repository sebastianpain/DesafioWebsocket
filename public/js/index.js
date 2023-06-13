const socket = io()

socket.on('hola',(data)=>{
console.log(data)
socket.emit('holavuelta', 'Gracias por la conexion')
socket.on('holavuelta', (data)=>{
    console.log(data)
})
})