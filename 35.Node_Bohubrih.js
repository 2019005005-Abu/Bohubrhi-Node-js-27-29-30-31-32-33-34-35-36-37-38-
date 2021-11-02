//Using Promising 
//Real life promise
//using resolve 
//===================================================================================
//===================================================================================
const promise=new Promise(function(resolve,reject){
setTimeout(function(){
resolve('The Promise is  successful');
},3000)
})
console.log(promise);
promise.then(function(result){console.log(result)})
console.log('After !');
//=====================================================================================
//=====================================================================================
//using reject
const promise=new Promise(function(resolve,reject){
setTimeout(function(){
reject('The Promise is not successful')
},3000)
})
.then(function(result){console.log(result)})
.catch(function(err){console.log(err.message)})
console.log('After !');



