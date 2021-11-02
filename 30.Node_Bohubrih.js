//spredd Operator
let number_1=[1,2,3,4];
let number_2=[5,6,7,8];
let arr=[...number_1,...number_2];
console.log(arr);
var person_1={
	name:"Abu Al Shahriar Rifat",
	fileName:"Abu Al Shahriar",
	lastName:"Rifat",
}
var person_2={
	age:24,
	professiona:"Software Enginner",
	qualification:"BSC In Information Tecnology"
}
var margingArr={...person_1,...person_2}
console.log(margingArr)


//reast  operator
//without using rest operator;
var something=number=>console.log(number);
something(4,5,6,7,8);

//using rest operator 
var something=(...number)=>console.log(number);
something(4,5,6,7,8);