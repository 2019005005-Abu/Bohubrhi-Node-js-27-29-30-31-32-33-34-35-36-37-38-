console.log('Line 1');



const studentInfomation=getCourse(2,showStudents);
console.log(studentInfomation);
console.log('Line 2');


function showMarks(marks){
	console.log(marks);
}

function showcourses(courses){
	console.log(courses)
	getQuizeMarkd(courses.courses,showMarks)
}

function showStudents(student){
console.log(student)
getCourse(student,showcourses);
}


function getStudents(id,callbackFunction){
	setTimeout(function(){
		console.log('Fetching from Database............');
		callbackFunction({
		id:id,name:"Abu Al Shahriar Rifat"
		})
	},3000)
}
function getCourse(student,cb){
	setTimeout(function(){
		console.log('Students course from Database...........');
		cb({
		id:student.id,
	    name:student.name,
		courses:['javascript','Typescript','Python']
		})
	},3000)
}

function getQuizeMarkd(courses,cb){
	setTimeout(function(){
	console.log('Marks.............');
		cb({
		[courses[0]]:5,
		[courses[1]]:10,
		[courses[2]]:15
		})
	},3000)
}