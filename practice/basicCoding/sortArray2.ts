let n:number[]=[5,2,9,1,15,6];
console.log("array before sorting   :",n)

for(let i=0;i<n.length;i++){
    for(let j=i+1;j<n.length;j++){
        if(n[i]<n[j]){
            let temp=n[i];
            n[i]=n[j];
            n[j]=temp;
        }
    }
}

console.log("Sorted array:",n)
