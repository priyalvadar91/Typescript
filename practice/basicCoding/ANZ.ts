let s:string="priyal"
let result:string="";

for(let i=0;i<s.length;i++){
    if(s.length-1==i){
        result=result+s.charAt(i);
    }   
    else{
        result=result+s.charAt(i)+",";
    }
}

console.log("Original string:",s);
console.log("String with commas:",result)