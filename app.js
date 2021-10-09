/* JavaScriptProgramming2021Ex3
Dates
Ahsana Tasnim
*/

let registration = new Date(2020, 0, 7, 8, 25);
console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Date of Week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getMinutes()}`);

let now = new Date();
console.log(now);

console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Date of Week: ${now.getDay()}`);
console.log(`Date: ${now.getDate()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getMinutes()}`);
console.log(`Miliseconds: ${now.getMilliseconds()}`);

now.setFullYear(1999);
console.log(`${now.toDateString()} ${now.toTimeString()}`);

console.group('~~~~~~~~~~~~~');
console.log('EXERCISE 3');
let birthDate = new Date(2000, 3, 19, 18, 25);
console.log(birthDate);

console.log(`What is the date 1 billion seconds from my birthday and how old
am I or will be that year?`);
let seconds = 1000000000;
let days = Math.floor(seconds / 86400);


let nextDate = birthDate.getDay() + days;
console.log(nextDate);


let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDay());
newDate.setDate(nextDate);
console.log(newDate);


let age = newDate.getFullYear() - birthDate.getFullYear();
console.log(`My age of year ${newDate.getFullYear()} will be ${age}.`);


console.group(`~~~~~~~~~~~~~~~~~~~`);

console.log(`What is the date 1 billion milliseconds from my birthday and how old
am I or will be that year?`);
let miliseconds = 1000000000;
daysForMiliseconds = Math.floor(miliseconds / 86400000);
console.log(daysForMiliseconds);

let nextDateForMiliseconds = birthDate.getDay() + daysForMiliseconds;
console.log(nextDateForMiliseconds);


let newDateForMiliseconds = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDay());
newDateForMiliseconds.setDate(nextDateForMiliseconds);
console.log(newDateForMiliseconds);


let newAge = newDateForMiliseconds.getDay() - birthDate.getDay();
 console.log(`My age of year ${newDateForMiliseconds.getFullYear()} was ${newAge}.`);