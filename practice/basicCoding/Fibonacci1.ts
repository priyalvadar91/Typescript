let a:number=0;
let b:number=1;
let c:number=1;
let result:string='';

for(let i=0;i<20;i++){
    result=result+a+" ";
    a=b;
    b=c;
    c=a+b;
}
console.log(result);