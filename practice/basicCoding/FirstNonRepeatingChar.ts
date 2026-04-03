let s:string="swiss";
let map:Map<string,number> = new Map();

for(let i=0;i<s.length;i++){
    if (map.has(s.charAt(i))) {
        map.set(s.charAt(i), map.get(s.charAt(i))! + 1);
    } else {
        map.set(s.charAt(i), 1);        
    }
}

for(let [key,value] of map){
    if(value === 1){
        console.log("First non-repeating character is :",key);
        break;
    }       
}
