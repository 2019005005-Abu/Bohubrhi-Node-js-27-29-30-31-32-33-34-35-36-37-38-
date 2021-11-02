console.log('Line 1');


const studentInfomation=getCourse(2);
console.log(studentInfomation);
console.log('Line 2');

const p=getStudents(3);
p.then(function(student){
console.log(student)
return getCourse(student)
})

.then(function(courses){
console.log(courses)
return getQuizeMarkd(courses.courses)
})

.then(function(marks){
console.log(marks)
});


function getStudents(id){
const p=new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log('Fetching from Database............');
		resolve({
		id:id,name:"Abu Al Shahriar Rifat"
		})
	},3000)		
	})
	return p;

}
function getCourse(student){
return new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log('Students course from Database...........');
		 resolve({
		id:student.id,
	    name:student.name,
		courses:['javascript','Typescript','Python']
		})
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