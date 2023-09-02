let age: number = 20;
if (age < 50)
    age += 10
console.log(age);

let level;
level = 1;
level = 'a'

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
let user: [number, string] = [1, 'Manisha']

//---type error it doesn't work---
// let users: [number,string] = [1,'Manisha',2]

let student: [number, string] = [1, 'Manisha']
student.push()//method

//---enum---
//PascalCase
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
console.log(mySize);

//---function---
// the function set default value as void , so set the type
function calculateTax(income: number): number {
    if (income > 30_000)
        return income * 23
    return income * 45
}
calculateTax(40)

function displayNumber(int: number) {
    return int + 3
}
displayNumber(3)


//objects
let employee = {
    id: "1",
    name: "manisha"
}
// *----------------------------*
let employees: Employee = {
    id: 1,
    name: "manisha",
    retire: (date: Date) => {
        console.log(date);
    }
}
console.log(employee);

//----type aliases--- (reuseable code)
//E --> capital letter
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void//error fun syntax
}

//union type |--> this ('|') vertical bar represents union type

function kgToLbs(weight: number | string): number {
    //narrowing
    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}
kgToLbs(10)
kgToLbs('10kgs')

// ---insertion type---
//  insertion --> &
type draggable = {
    drag: () => void
}
type Resizable = {
    Resize: () => void
}

type UIWidget = draggable & Resizable

let textBox: UIWidget = {
    drag: () => { },
    Resize: () => { }
}

//literal type
//(exact,specific)

type Quantity = 50 | 100 //literal
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

//---nullable Type--
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Henna!');
}

greet('manisha')

//cannot return null and undefined
// greet(null) greet(undefined)

//---optional chaining---
//optional operator --> .?
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date }
}

let customer = getCustomer(0)
//instead of this below line
// if (customer !== null && customer !== undefined)
//using optional property optional access
    console.log(customer?.birthday?.getFullYear());

//optional element access operator

