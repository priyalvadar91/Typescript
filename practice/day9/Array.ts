/*

Arrays in typescript

- An array is a special type of variable that stores multiple value
- The values can be of the same data type  or different data type
- Indexing statts from 0
-- Arrays are in ordered collection of elements

*/

// Approach 1 ; Using leteral

let names:string[] =[]; // declaration

// Initialization / assigning values

names[0]="qws"
names[1]="dadn"
names[2]="hkjs"
names[3]="jlka"

let names1:string[] =["abc","xyz","pqr","lmn"];

console.log(names1)

// Approach 2 : using the genric Array<T> type

let empNames:Array<string> = ["John","Smith","Peter","Scott"]
console.log(empNames)

let empId:Array<number> = [101,102,103,104]
console.log(empId)

let data:Array<string|number> = ["John",101,"Smith",102,"Robert",103,"Nick",104]
console.log(data)

let dataMixed:Array<any> = ["John",101,true,null]
console.log(dataMixed)

console.log("----------------------------------------------------")

for (let index = 0; index < empNames.length; index++) {
   
    console.log(empNames[index])
    
}

console.log("----------------------------------------------------")

empNames.forEach(element => {
    console.log(element)
});
console.log("----------------------------------------------------")

//Iterating using the " for...in" loop(indexes)

for(let i in empId)
{
    console.log(empId[i])
}

// Iterating using " for of " loop(values)

console.log(" Iterating using  'for of ' loop(values)")

for(let value of dataMixed)
{
 console.log(value)
}

// passing an array to the function

// search an element in a array using function

console.log("........................search an element in a array using function")

function search (ele :number,arr:number[]):boolean
{
    for(let i=0;i<arr.length;i++)
    {
        if (arr[i]===ele) {
          return true
            
        }
    }
    return false
}


let arr:number[]=[10,20,30,40,50];
console.log(search(30,arr))
console.log(search(300,arr))

// function atkes array and returns array

console.log("___________function takes array and returns array_____________________________")

function capitalizeWords(arr1:string[]):string[]
{
    let res1:string[]=[]
    for(let i=0;i<arr1.length;i++)
    {
        
        res1[i]= arr1[i].toUpperCase();

    }
    return res1;

}

let arr1:string[]=["abc","pqr","xyz"]

console.log(capitalizeWords(arr1))


