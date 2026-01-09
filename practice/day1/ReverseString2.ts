let str:string = "GREAT";
let reverse: string="";

for (let i = str.length-1; i >=0 ; i--) {
    
    reverse=reverse+str[i];
    
}
console.log("Before reverse :"+str);
console.log("After reverse  :"+reverse);