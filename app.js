// node app.js

const Name = "Rameez";

console.log(`Hello ${Name}!`);

let numberValue = 3;

var stringValue = "3";
if (numberValue == stringValue) {
  console.log("The values are equal with == operator");
}

if (numberValue === stringValue) {
  console.log("The values are equal with === operator");
}
else {
  console.log("The values are NOT equal with === operator");
}