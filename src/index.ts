let age :number =20;
if (age < 50) 
age+=10
console.log(age);
 
let level ;
level =1;
level ='a'

console.log(level);


//---error document - implicitly---
// function render(document) {
//  console.log(document);
// }


//---arrays---
// let numbers :number[] =[1,2,'3'] 

//--return error : type annotation can only be used in typescript files--
//--(:number) only contains number datatype--

let arrays = [1, 2, 3]
//---loop---
arrays.forEach(n => n);

//---tuple---
let user: [number,string] = [1,'Manisha']

//---type error it doesn't work---
// let users: [number,string] = [1,'Manisha',2]

let student: [number,string] = [1,'Manisha']
student.push()//method

//---enum---
//PascalCase
const enum Size {Small=1,Medium,Large}
let mySize :Size = Size.Medium
console.log(mySize);
