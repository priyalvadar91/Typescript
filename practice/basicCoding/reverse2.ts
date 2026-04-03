let s:string="priyal"
let rev:string=""
for(let i=s.length-1;i>=0;i--){
    rev=rev+s.charAt(i);
}
console.log("Original string:",s);
console.log("Reversed string:",rev)