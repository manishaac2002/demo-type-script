"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let level;
level = 1;
level = 'a';
console.log(level);
let arrays = [1, 2, 3];
arrays.forEach(n => n);
let user = [1, 'Manisha'];
let student = [1, 'Manisha'];
student.push();
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income > 30000)
        return income * 23;
    return income * 45;
}
calculateTax(40);
function displayNumber(int) {
    return int + 3;
}
displayNumber(3);
let employee = {
    id: "1",
    name: "manisha"
};
let employees = {
    id: 1,
    name: "manisha",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kgs');
//# sourceMappingURL=index.js.map