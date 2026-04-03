let a:number=123456;
let result:number=0;
 let reminder:number=0;
console.log("Original number:",a);
 while(a>0){
            reminder=a%10;
            result =result*10+reminder;
            a=Math.floor(a/10);
        }

console.log("Reversed number:",result);