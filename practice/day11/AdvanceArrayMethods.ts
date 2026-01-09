// forEach(), map(), filter(), reduce(), some(),every() **********


// foreach - excute a function once for each arrya element
// it takes function as a parameter
// array.foreach(function(currentvalue,index,array{}))

// CurrentValue - the current element being processed in the array
// index (optional) - the index of the current element being processed in the array
// array (optional)- the array the current element belongs to

// Ex1 : Get index of all the fruits along with value

let fruitsAll : string[]=["Apple","Bnanan","Orange","Mango","Kiwi"];

console.log("________________For loop___________________________")
for (let index = 0; index < fruitsAll.length; index++) {
   console.log(index,":",fruitsAll[index])
    
}

console.log("________________For each___________________________")

fruitsAll.forEach(function(element,index)
{

    console.log(`${index}`,`${element}`)
})

console.log("________________Arrow function___________________________")

fruitsAll.forEach((element,index)=>
{

    console.log(`${index}`,`${element}`)
})

console.log("________________Uppercase___________________________")

fruitsAll.forEach((element)=>
{

    console.log(element.toUpperCase())
})


console.log("________________Map___________________________")


// map()- Creates a new array with the result of calling the function on every elemnt of an array

// it takes function as a parameter
// return the same number of element that in original array

// array.map(function(currentvalue,index,array){})

//Ex1- Returns the same number of element that we have in original array 
// [1,2,3] => [1,4,9]
let numnerM:number[]=[1,2,3,4,5,6]
let squareNumbers:number[] =numnerM.map(function(element){
 
       return element*element

})

console.log("Original Array :",numnerM)
console.log("Square Array   :",squareNumbers)


console.log("________________Map Arrow function___________________________")


let duobledNum:number[] =numnerM.map((element)=>{
 
    return element*2;


})

console.log("Original Array :",numnerM)
console.log("Doubled  Array   :",duobledNum)


let duobledNumber:number[] =numnerM.map((element)=> element*2) // If you have single return statement insde the arrow function then {} and return statement is optional


console.log("Doubled  Array   :",duobledNumber)


console.log("________________filter___________________________")

// filter() - Creates a new array with all the elements that pass/ satisfy
// It takes function as parameter
// returns same or fewer number of elemnet compared to originalarray

// Synatax - array.filter(function(currentValue,index,array){})

// Get the only even numbers from an array

let evenNum:number[]=numnerM.filter((element)=>{
    return (element%2==0)
})

console.log(evenNum)

let evenNumber=numnerM.filter((element)=>element%2==0)

console.log(evenNumber)


console.log("------------------------------")

// Get the only numbers grater than 3 from an array

let greaterThan=numnerM.filter((element)=>element>3)

console.log("greaterThan",greaterThan)

// reduce - Applies a function on every elemnet of an array and returns single value

// syatx - array.reduce(function(accumulator,currentvalie,index,array){})

//accumulator- the accumullator value from previous iteration
// cuurentVlaue- the current elemnt being processed

// get the total (sum) of all the numbers in the array

console.log("_____________Reduce_________________________")
let total=0
for (let index = 0; index < numnerM.length; index++) {
     total = total+numnerM[index];
    
}

console.log("Sum of all the numbers :",total)

let reduceResult= numnerM.reduce((total,element)=>{

   return total+element

},5) // 5= default value of accumulator

console.log(reduceResult)


console.log("__________________________Some__________________");


// Some() - Checks if any function satisfies a condition
// returns true it at least one element passes the condition ,else faslse

// array.some(function(currentValue,index,array){})


// check array contains negative values

console.log("-----check array contains negative values-------------")
let hasNegative=numnerM.some((element)=>element<0)
console.log(hasNegative)


console.log("-----check array contains positive values-------------")


let hasPositive=numnerM.some((element)=>element>0)
console.log(hasPositive)


// evey()- checks if all elements satisfy a condition
// Returns true if all elements pass the condition , else false

// syantax- array.every(function(currentValue,index,array){})

let isAllEven=numnerM.every((ele)=>ele%2==0)

console.log(isAllEven)


let isAllGreaterThan=numnerM.every((ele)=>ele>0)

console.log(isAllGreaterThan)

