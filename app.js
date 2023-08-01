// var names = "Abdul haseeb"
// var age = "20"
// console.log(names)

// var num1 = 5;
// var num2 = 25;
// console.log(num1 - num2)

var names = prompt("enter your name");
var chem = +prompt("enter chemistry marks");
var phy = +prompt("enter physics marks");
var math = +prompt("enter maths marks");
var sindhi = +prompt("enter sindhi marks");
var sub = (chem + phy + math + sindhi);
var totalmarks = (400);
var num1 = (100);
var subject = (sub / totalmarks * num1);
document.write(names + " marks is " + sub + " out of " + totalmarks + " and percentage is " + subject + " % " );
console.log(names + " marks is " + sub + " out of " + totalmarks + " and percentage is " + subject + " % " );
