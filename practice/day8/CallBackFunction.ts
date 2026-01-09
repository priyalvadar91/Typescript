// Function that takes callback function as an parameter

function greetings(name:string,smg:(message:string)=>void)
{
    console.log(name)
    smg("Hello")
}

function showMessage(message:string)
{

    console.log(message)
}

greetings("john",showMessage)





console.log("---------------------------------------")

function addNum(a:number,b:number,callback:(result:number)=>void){

    let result=a+b
    callback(result)
}

function displayResult(res:number)
{

    console.log(res)
}

addNum(90,80,displayResult)