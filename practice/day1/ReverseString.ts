let s:string = "GREAT";
let rev: string="";

for (let i = s.length-1; i >=0 ; i--) {
    
    rev=rev+s.charAt(i);
    
}
console.log("Before reverse :"+s);
console.log("After reverse  :"+rev);