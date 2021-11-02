const express=require('express')
const app=express();
console.log(app);
//app.get()
app.get('/',function(request,response){
 response.send('Hello from express js');
})
app.get('/st_1',function(request,response){
response.send('The is another request');
})
app.get('/st_2',function(request,response){
response.send('This is third request')
})
const port=3000;
app.listen(port,function(){
console.log(`Listening on port 3000.....`)
})