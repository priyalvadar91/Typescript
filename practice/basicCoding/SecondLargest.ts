let n: number[] = [10, 51, 81, 20, 15];
let largest: number = Number.MIN_VALUE;
let secondLargest: number = Number.MIN_VALUE;  
for(let i=0;i<n.length;i++){
    if(n[i]>largest){
        secondLargest=largest;
        largest=n[i];
    }
    else
        if(n[i]>secondLargest && secondLargest!=largest){
        secondLargest=n[i];   
        }
}

console.log("largest",largest);
console.log("secondLargest",secondLargest);

