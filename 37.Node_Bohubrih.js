console.log('Line 1');


const studentInfomation=getCourse(2);
console.log(studentInfomation);

console.log('Line 2');
//Async and await



async function studentData(){
try{
const student=await getStudents(3);
const getCourse=await getCourse(student);
const marks=await getQuizeMarkd(courses.courses);
console.log(marks);
}catch(err){
console.log(err)
        }

}
studentData();



//const p=getStudents(3);
//p.then(student=>getCourse(student))
//.then(courses=>getQuizeMarkd(courses.courses))
//.then(marks=>console.log(marks));
//.catch(err=>console.log(err));

function getStudents(id){
const p=new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log('Fetching from Database............');
		const student={id:id,name:"Abu Al Shahriar Rifat"}
		console.log(student)
		resolve(student);
	},3000)		
	})
	return p;

}



function getCourse(student){
return new Promise(function(resolve,reject){
setTimeout(function(){
console.log('Students course from Database...........');
const courses={id:student.id,name:student.name,
courses:['javascript','Typescript','Python']}
console.log(courses)
resolve(courses)
	},3000)
})
	
}



function getQuizeMarkd(courses){
return new Promise(function(resolve,reject){
	setTimeout(function(){
	console.log('Marks.............');
		resolve({
		[courses[0]]:5,
		[courses[1]]:10,
		[courses[2]]:15
		})
	},3000)
})
	
}
