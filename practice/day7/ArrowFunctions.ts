// Arrow function / lambda functions

/* Lambda refers to anonymous functions in programming 
lambda function are a concise mechanism to represent anonymous functions
these function are also called as arrow function

these are 3 parts to lambda function
1.Parameter - A fuction may optionally have parameter
2.The fat arrow notation/lambada notation (=>) It is also called as the "goes to operator"
3.Statements - represent the function instruction set

Syntax :
let variable = (parameters) =>
{
    // block of code
}

*/

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>")
let greet=():void =>
{

    console.log("Hello Typescript")
}

greet();


// Arrow function with Parameters and return value type
console.log("Arrow function with Parameters and return value type")
let add=(a:number,b:number):number =>
{
    return a+b
}
console.log(add(12,20))

//arrow function with implicit return
console.log("____________arrow function with implicit return_________________")

let multi= (a:number,b:number):number=>a*b;
console.log(multi(12,90))

// Arrow functions with optional parameter

console.log("Arrow functions with optional parameter")

let displaydetails= (id:number, name:string,mailId?:string):void =>
{
    console.log("ID :",id)
    console.log("NAME :",name)
    if (mailId!=undefined) {
        console.log("mailId ",mailId)
    }
   
}

displaydetails(10,"ABC", "abc@ggmail.com")
displaydetails(20,"DEF")


// Arrow funcyions with default parameters
console.log("Arrow funcyions with default parameters")

let cal_Discount =(price:number,rate:number=0.5):void =>
{
    let discount:number=price*rate;
    console.log(discount)

}

cal_Discount(1000,0.8)
cal_Discount(1000,0.3)
cal_Discount(1000)


// Arrow functions with rest parameters

console.log("*************  Arrow functions with rest parameters *****************")


let findElement=(...elements:(number | string)[]):number=>
{

return elements.length
}

let ln :number =findElement(2,"Priyal",3,4,"abcd")
console.log("Length of elements :",ln)

console.log(findElement(2,"Priyal",3,4,"abcd"))
console.log(findElement(2,4,100))
console.log(findElement("anf","90","4","abcd"))
