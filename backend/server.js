const http=require('http');
const app=require('./app')

server=http.createServer(app)

server.listen(5000,()=>{
    console.log("Server running");
  })