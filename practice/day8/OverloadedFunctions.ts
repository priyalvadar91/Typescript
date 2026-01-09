
// different parameter types 

function getInfo(id:number):string;
function getInfo(name:string):string;

function getInfo(param:number | string):string
{

    if(typeof param==="number"){
        return (`User id is ${param}`)
    }
    else{

        return(`User name is ${param}`)
        
    }
}

getInfo(101);
getInfo("Priyal");


console.log("------------------------------------------")


function addN(a:number,b:number): number;
function addN(a:number,b:number,c:number):number

function addN(a:number,b:number,c?:number):number
{
    
     if(c!=undefined){
      return a+b+c;
     }

     return a+b;
}


console.log(addN(12,20))
console.log(addN(12,20,90))

// different retun types

console.log("..........  Different return types ...........")

function processInput(input:string):string
function processInput(input:number):number

function processInput(input: string | number): string|number
{

    if(typeof input==="string")
    {
        return input.toUpperCase();
    }
    else{
        return input*2;
    }

}

console.log(processInput("Priyal"))
console.log(processInput(10))


//

console.log("__________________________________________________________________")

function greetings(name:string):string
function greetings(age:number):string
function greetings(isMarried:boolean): string


function greetings(value: string | number |boolean)
{
    if(typeof value==="string")
    {
        return `Hello ${value}`
    }
    else if(typeof value==="number")
    {
        return `you are ${value} years old` 
    }
    else{
         
       let res: string= value? "married":"single"
        return res;
    }
}

console.log(greetings("Abc"))
console.log(greetings(30))
console.log(greetings(true))
console.log(greetings(false))