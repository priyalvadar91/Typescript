
// named functions with no paramter and no return type
console.log("named functions with no paramter and no return type")
function diaplay():void
{
    console.log("Welcome")
}

diaplay()

console.log("named functions with  paramter and return type")

function addNumbers(x:number,y:number):number
{
   return x+y;
}

let ans:number= addNumbers(10,20)
console.log(ans)
console.log(addNumbers(100,200))


console.log("named functions with  rest paramters and return type")

let sum:number=0
function summation(...nums:number[]){

    for (let i = 0; i < nums.length; i++) {
          sum = sum+nums[i];  
    }
    console.log("Sum of all the numbers :",sum)
}

summation(1,2,3,4,5,6,7,8,9);


// named function with rest parameters - multi type
console.log(" named function with rest parameters - multi type")

function findElements(...elements:(number | string)[]):number
{

return elements.length
}

let len:number =findElements(2,"Priyal",3,4,"abcd")
console.log("Length of elements :",len)

console.log(findElements(2,"Priyal",3,4,"abcd"))
console.log(findElements(2,4,100))
console.log(findElements("anf","90","4","abcd"))


// named function with optional parameter

console.log("Named function with optional parameter")

function displayDetails(id:number, name:string,mailId?:string):void
{
    console.log("ID :",id)
    console.log("NAME :",name)
    if (mailId!=undefined) {
        console.log("mailId ",mailId)
    }
   
}
displayDetails(10,"John","abc@gmail.com")
displayDetails(20,"Tonny")


// named function with default parameter
console.log("____________________named function with default parameter_______________________________________")

function calculateDiscount(price:number,rate:number=0.5):void
{
    let discount:number=price*rate;
    console.log(discount)

}

calculateDiscount(1000,0.8)
calculateDiscount(1000,0.3)
calculateDiscount(1000)

