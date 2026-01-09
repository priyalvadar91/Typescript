
// Array 
console.log("------------Array------------------")
let numb:number[]=[1,2,3,4,5];
let fruits:string[]=["apple","banana","orange","mango"];


console.log("Number array :",numb)
console.log("Fruits array :",fruits)

// length - attribute(not a method)
console.log("length - attribute(not a method)")
console.log("Size of fruits array :",fruits.length)
console.log("size of numb array:",numb.length)


// Push() - Adds single/ multiple elements to the end of tthe array
// Syantax - array.push(element1,...,elementN)

console.log("*********** Push()**************")
numb.push(12,18)
console.log("After Push():", numb); // []

numb.push(20,22)
console.log("After Push():", numb); 

// pop() - Removes the last element from an array
// Syntax - array.pop()

console.log("------------------Pop__________________")

let lastFruit=fruits.pop();

console.log("After pop() :",fruits)

console.log("removed fruit - ",lastFruit)


// Shift - Removes the first element from an array
// array.shift()

console.log("*************** Shift *****************")

let fisrtNo=numb.shift();
console.log("After shift :",numb)
console.log("Removed No:", fisrtNo)


// unshift()- Adds single/multiple elements to the beginning of array
// array.unshift(ele1...eleN)

console.log("____________ Unshift_______________")

fruits.unshift("Kiwi","pear")
console.log("After shifting :", fruits)

// concat()- combines two or more array
// synatx - array.concat(array1...arrayN)
console.log("____________Concat__________________________")

let concatArray=numb.concat([101,102],[201,202])
console.log(" array", numb)
console.log("Concatenated array", concatArray)


// slice() - Extract a section pf an array
// Starting index starts from Zero
//Ending Index will be exclussive (eg- 3 is ending index It will consider 2)
// Syntax- array.slice(start,end)


console.log("_______________Slice_______________________")

let extractedArray=fruits.slice(1,3)
console.log("After slice :", extractedArray)


// splice()- Adds/removes elements from an array(from everywhere)
// Syntax-  array.Splice(start.deleteCount,teem1,...,itemN)

console.log("___________Spice______________________")

console.log("Current elements i fruits array :",fruits)

let removedEle =fruits.splice(1,2)
console.log("removedEle",removedEle)
console.log("After splice :",fruits)

//
fruits.splice(1,0,"pipeapple","grape")

console.log("After splice (1,0,'pipeapple','grape')",fruits)

console.log("________________________________")

fruits.splice(1,2,"mango","cherry")

console.log("After splice- (1,2,'mango','cherry') :",fruits)

// indexOf()- finds the index of an elemnet, if element not fount from them then return -1

console.log("_______indexOf_______________________")

console.log("Index of banana :",fruits.indexOf("banana"))
let indexOfBanana=fruits.indexOf("banana");

console.log("index of banana:",indexOfBanana);

console.log("Index of banana :",fruits.indexOf("papaya"))

console.log("Index of banana :",fruits.indexOf("banana"),2) // searching from index 2

console.log("------------------------------------------------------------------------------")


// includes

console.log("--------------------------------Includes----------------------------------------------")

let isAppleExit=fruits.includes("apple")
console.log("isAppleExit :",isAppleExit)

console.log("isBananaExit :",fruits.includes("banana"))

// toString 


console.log("----------------------toStirng----------")

let numberString = numb.toString();

console.log("COnverted array to string: ", numberString)

let myArray:string[] =['W','e','l','c','o','m','e']
console.log("Original Array:", myArray)

let str : string= myArray.toString();


console.log("COnverted array:",str)

// forEach(), map(), filter(), reduce(), some(),every() **********






