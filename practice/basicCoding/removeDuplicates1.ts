let a:number []=[1,1,2,2,3,4,4,5,5,6,7,7,8,9,9];
let uniqueSet:Set<number> = new Set();

for(let i=0;i<a.length;i++){
    uniqueSet.add(a[i]);
}
let uniqueArray:number[] = Array.from(uniqueSet);
console.log("Original array:",a);
console.log("Array with duplicates removed:",uniqueArray)