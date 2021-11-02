console.log('Line 1');

console.log('Line 2');

const studentInfomation=getCourse(2,function(student){
console.log(student);
 getCourse(student,function(courses){
	 console.log(courses);
  getQuizeMarkd(courses.courses,function(marks){
	  console.log("The Marks are",marks);
  })
 })
})
console.log(studentInfomation);
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