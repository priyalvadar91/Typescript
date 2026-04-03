let a:number[]=[1,2,3,4,6,7,8,9];
let missingNum:number = 0;
let n:number = a.length + 1; 
let total:number = n*(n+1)/2;
let sum:number = 0;

for(let i=0;i<a.length;i++){
    sum =sum+ a[i];
}
missingNum = total - sum;

console.log("Missing number is :",missingNum)