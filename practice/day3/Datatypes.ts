/*
1. Premitive types

number
string
void
boolean
any 
null
undefined
union type

/*
2. non premitive datatypes / objects

array
class
interface
function
tuple

*/


/*
Number


*/

let big:number=234567890;
let float:number=456.456
console.log("Big   :",big)
console.log("Float :",float)

console.log(typeof(big))
console.log(typeof float);
console.log(typeof ("Priyal"))
console.log(typeof(300))
console.log(typeof('priyal'))


// String Type - represent textual data
//1. Sigle quoat
//2. Double quoat
//3. backtick

let FName:string= "Priyal";
let LName :string = "Vadar";
let greeting :string= `Hello ${FName} ${LName}`

console.log(greeting)



// Boolean

// represents true / false

let isStudent:boolean=true
let hasJob:boolean=false
console.log("isStudent? ",isStudent)
console.log("hasJob? ",hasJob)

// NULL and UNDEFINED

let emptyValue : null=null;
let notAssigned:undefined=undefined

console.log(emptyValue)
console.log(notAssigned)

let cost:number
console.log(cost)


// ANY type

console.log("*****************ANY*********************")
let anyValue :any="Wellcome"
console.log(anyValue)
console.log(typeof anyValue)
anyValue=100;
console.log(anyValue)
console.log(typeof anyValue)
anyValue=true;
console.log(anyValue)
console.log(typeof anyValue)
console.log("**************************************")

// Union Type - combine multiple datatypes
console.log("************** Union Type ************************")
let id :number| string | boolean=10;

id =9000;
console.log(id)
id="abc123"
console.log(id)
id=true
console.log(id)

//void - the function don't return any value

console.log("************** void Type ************************")

function addition(): void
{
    console.log(10+20)
}
addition()

function substraction(): number
{
    return(20-10)
}
substraction()
console.log(substraction())

console.log("**************************************")


function show(a:number,b:number):number
{
    return a+b
}

let returnResult = show(100,200)

console.log(returnResult)




