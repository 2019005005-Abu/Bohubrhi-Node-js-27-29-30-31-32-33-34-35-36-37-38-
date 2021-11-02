console.log('Line 1');
console.log('Line 2');
function getStudents(id){
	setTimeout(function(){
		console.log('Fetching from Database');
		return {
			id:id,
			name:"Rahim"
		}
	},3000)
}
const  studentInformation=getStudents(1);
console.log(studentInformation);