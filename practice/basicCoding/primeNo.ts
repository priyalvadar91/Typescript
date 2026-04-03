let n:number=17;
let isPrime:boolean=true;
if(n<=1){
    isPrime=false;
}   
else{
    for(let i=2;i<=n/2;i++){
        if(n%i==0){
            isPrime=false;
            break;
        }       
    }
}   

console.log("Is",n,"a prime number?",isPrime)