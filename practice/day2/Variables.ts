// var , 
// let , 
// const

// Syntax - variable variableName : data type = value
var age1 =10;
var age2: number =20;
console.log(age1+"..."+age2);

// var vs let vs const

/* 
  1.scope 
  2.declaration 
  3.re-declaration
  4.re-initialization/ reassignmentment
  5.Hosting

 */
// var - we do not use this in modern js/ts

// const - if do not want to change the value of varibale
// let - if we want to change the value of variable

// Scope - 1. Functional scope(var) and 2. block scope( let and const)

// Examble 1
function varScope(){
if (true) {
    var message="hello"
    console.log(message)
}
console.log(message)
}

varScope()

// Example 2

function blockScope(){

    if (true) {
        let let_msg = "Let- block Scope "
        const const_msg ="const - block scope"

        console.log(let_msg)
        console.log(const_msg)
    }
    
}

blockScope()


// Example3

function scopeDiff(){
    if (true) {
        var num1 =10;
        let num2=20;
        const num3=30

        console.log(num1)
        console.log(num2)
        console.log(num3)
    }
    console.log(num1)    // functional scope
    // console.log(num2) // block scope 
    // console.log(num3) //block scope

}

scopeDiff()



// Var -Declaration without initialization

var x;
console.log(x)
x=10
console.log(x)

// let - declaration without initializtion
let y;
console.log(y)
y=20
console.log(y)


// const - declaration without initializtion
// const must be initialized at the time of declaration

const z =10;
console.log(z)



// 3. Re-declaration

// var - allows the re-declaration


var city="Mumbai"
var city="Pune"

console.log(city)

// let and const - not allows the re-declaration

let country = "Canada"
//let country="India"

const address="Pune"
//const address="Mumbai"


// 4. Re-initialization and re-assignment

//var allows Re-initialization and re-assignment

var grade="A"
grade="B";
console.log(grade)

//let allows Re-initialization and re-assignment

var marks=100;
marks=99;
console.log(marks)


//5. Hosting

//var(hosted with undefined)
console.log(a)
var a=10;
console.log(a)

//let and const hosted with not initialized
// console.log(b)
// let b=10;
// console.log(b)
