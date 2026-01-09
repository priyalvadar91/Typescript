

let age:number=20

if(age<=18){

    console.log("You are eligible for vote")
}
else{
    console.log("You are not eligible for vote")
}

let m1:number=11

if (m1%2==0) {
    console.log(m1," is even number")
} else {
    console.log(`${m1} is odd number`) 
}

// Nested if else condition
console.log("......Nested if else condition.........")

if (false) {
    console.log("if statement")
}
else if(false){
    console.log("else statement-1")
}
else if(true){
    console.log("else statement-3")
}
else if(false){
    console.log("else statement-4")
}
else{

    console.log(" else block")
}

console.log("_______________")


let mark:number=80

if (mark>=90 && mark<=100) {
    console.log("GRADE A")
}
else if(mark>=80 && mark<90) {
    console.log("GRADE B")
}
else if (mark>70 && mark<80) {
    console.log("GRADE C")
}
else if (mark<70 && mark>=45) {
    console.log("GRADE D")
}

else{
    console.log("Failed")
}


console.log("-------------------------------------------------------------")

let browser: string="chrome";

if(browser==="chrome")
{
    console.log("browser is chrome")
}
else if(browser==="firefox")
{
    console.log("browser is firefox")
}
else if(browser==="safari"){

    console.log("browser is firefox")
}
else{

    console.log("other broser")
}

console.log("*************switch.............")

let day:number=1
switch(day){
    case 1 : console.log("Monday")
    break
    case 2 : console.log("Tuesday")
    break
    case 3 : console.log("Wednesday")
    break
    case 4 : console.log("Thursday")
    break
    case 5 : console.log("Friday")
    break
    default : console.log("INVALID")

}


console.log("******* Switch Expression *************")

let s1:number=20, s2:number=5

switch(s1-s2){
case 0:console.log(" Result 0")
break

case 1:console.log(" Result 1")
break

case 2:console.log(" Result 2")
break

case 3:console.log(" Result 3")
break

case 4:console.log(" Result 4")
break

case 5:console.log(" Result 5")
break

default:console.log("not matching")

}