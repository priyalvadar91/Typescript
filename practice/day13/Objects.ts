
// object - object contains properties and behaviour
// object contains variables & methods
// object is collection of key and value pairs

// 

// different ways to create an object in JS/TS

// using 'Object type' - derectlt define the values for variable
// Inline type Object- We also define the datatypes of the keys
// using type aliases
// using the clasess


// let employee:object={
//     name:"John",
//     age:30,
//     salary:50000,
//     job:"Engineer"
// }

let employee={
    name:"John",
    age:30,
    salary:50000,
    job:"Engineer",
    getDetails:function(){
     
        console.log(this.name,this.age,this.salary,this.job)
    }
}
console.log(typeof employee)


// accessing object-using dot notation

console.log("accessing object-using dot notation")
console.log(employee.name,employee.age,employee.salary,employee.job)

employee.getDetails()



// accessing object-using brcket notation
console.log("accessing object-using bracket notation")
console.log(employee["name"],employee["age"],employee["salary"],employee["job"])

employee.job="Manager";
console.log(employee.job)
employee["job"]="HR"
console.log(employee.job)
console.log(employee["name"],employee["age"],employee["salary"],employee["job"])



// Inline type Object
console.log("_______________Inline type Object________________________")

let student:{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string

}=
{
    name:"scott",
    age:15,
    grade:"A",
    getSummary:function()
    {
     return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }

}

console.log(student.name,student.age,student.grade)
console.log(student.getSummary())
// using type aliases



console.log("___________using type aliases__________________________")

type Product={

    name :string,
    price:number,
    getInfo:()=>string
};

let book1:Product={

    name:"Learn Java",
    price:200,
    getInfo:function(){
        return `${this.name}, costs ${this.price}`;
  
        
    }
}

let book2:Product={

    name:"Learn Typescript",
    price:500,
    getInfo:function(){
        return `${this.name}, costs ${this.price}`;
  
        
    }
}

let book3:Product={

    name:"Learn Python",
    price:300,
    getInfo:function(){
        return `${this.name}, costs ${this.price}`;
  
        
    }
}

console.log(book1.getInfo())
console.log(book1.name,book1.price);
console.log("-----------------------------------------------")
console.log(book2.getInfo())
console.log(book2.name,book2.price);

console.log("-----------------------------------------------")
console.log(book3.getInfo())
console.log("-----------------------------------------------")

// Intersection types
console.log("_______________Intersection types_____________________")

type Personal={

    name : string,
    age:number
}
 type Contact={
     email:string,
     phone:number
 }

 type Candidate= Personal & Contact &
 {

    getContactInfo:()=>string;
 }

let cand: Candidate={
name:"Scott",
age:25,
email:"abc@gmail.com",
phone:123456,
  
getContactInfo:function(){
    return `${this.name} can be contacted at ${this.phone} or ${this.email}`

}

}


console.log(cand.getContactInfo())
// using classes

console.log("__________________Using Classes----------------------")

class person{

    ssn:string;
    fName:string;
    lName:string;

constructor( ssn:string,fName:string, lName:string){

 this.ssn=ssn;
 this.fName=fName;
 this.lName=lName;

}

 getPersalDetails():string{

    return `${this.fName} ${this.lName}`;
     
}

getAllInfo():string{

   return ` ${this.ssn} : ${this.getPersalDetails()}`;
}

}


let person1= new person("12234","John","Kenely");

console.log(person1.getAllInfo())

let person2= new person("998t2","ABC","UBT");

console.log(person2.getAllInfo())

let person3= new person("3456","fghj","vbnm");

console.log(person3.getAllInfo())



