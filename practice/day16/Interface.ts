// An interface in typescript is a way to define the structure of an object
// It tells the compiler what properties and types an object shoul have
// Its like a blueprint for objects


// Abstract method - We only signature of the method (there is no implementation)
/*

interface  Interafcename
{

    properties 
    abstract methods
}

1. Regular properties
2. Optional Properties
3. Readonly Properties and functional types
4. Extending interaface
5. Class implements interface

// Example :  basic interface
*/

interface Person
{
    name:string;
    personAge:number;

}

let std : Person =
{
    name:"John",
    personAge:30

}

console.log(std.name);
console.log(std.personAge)


// Example 2 : Optional Properties

interface Employee
{

    EmpId:number;
    empName:string;
    empDepartment?:string;
}

let empDetails1:Employee={

    EmpId:1991,
    empName:"John fghj",



}


console.log(empDetails1.EmpId,empDetails1.empName,empDetails1.empDepartment)

let empDetails2:Employee={

    EmpId:101,
    empName:"John",
}


console.log(empDetails2.EmpId,empDetails2.empName,empDetails2.empDepartment)


// Example 3 : Readonly Properties ( readonly to prevent modification) & Function type

interface Book
{

    title : string;
    readonly isbn:string;
    display():void;
}


let b1:Book={
title:"Learn Typescript",
isbn:"123-ABC",


display()
{
    console.log(b1.title,b1.isbn)
}

}

console.log(b1.title)
console.log(b1.isbn)
b1.display();


console.log("After changing values ..",)

b1.title="Learn Deops"

console.log(b1.title)

//b1.isbn="dfgh" => Cannot assign to 'isbn' because it is read only property


interface Animal
{

    name:string

}

interface Dog extends Animal
{
    color:string
}

let myDog:Dog={
    name:"Buddy",
    color:"Balck"
}

console.log(myDog.name,myDog.color)

// Example 5 : 
// Class can extends another class
// interface can extends another interface
// class can implements interface


interface Animals
{

    name:string,
    sound():void;

}

class Cat implements Animals
{
    name:string;


    color:string

    constructor(name:string,color:string){
        this.name=name;
        this.color=color;
    }
    sound(): void {
        console.log("MMMMMMMMM")
        
    }

}



let pet = new Cat("Jjjjj","Blue");
console.log(pet.name)
pet.sound();
console.log(pet.color)