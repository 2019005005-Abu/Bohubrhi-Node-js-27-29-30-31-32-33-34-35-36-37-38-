console.log('Line 1');

console.log('Line 2');

function getStudents(id,callbackFunction){
	setTimeout(function(){
		console.log('Fetching from Database............');
		callbackFunction({
		id:id,name:"Abu Al Shahriar Rifat"
		})
	},3000)
}
const  studentInformation=getStudents(1,function(student){
console.log(student);
});
console.log(studentInformation);