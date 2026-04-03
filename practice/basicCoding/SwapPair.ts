let s:string="PriyalVadar";
console.log(s); 
let charArray:string[]=s.split("");
for (let i = 0; i < charArray.length-1; i+=2) {
    let temp:string=charArray[i];   
    charArray[i]=charArray[i+1];
    charArray[i+1]=temp;
}   
let result:string=charArray.join("");
console.log(result) 