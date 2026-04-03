let a:number[]=[6,8,4,10,12,19,4,5,11];
let high:number=a[0];
let count:number=1;
for (let i = 0; i < a.length; i++) {
    if(high < a[i]){
        high=a[i];
        count++;
    }   
}

 console.log(count)