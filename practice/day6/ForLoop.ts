
console.log("***********Even numbers")

for (let index = 0; index <=10; index++) {
    if(index%2==0){

        console.log(index)
    }    
}

console.log("***********Even numbers*************************")
for (let index = 0; index <=10; index+=2) {

        console.log(index)
  
}


console.log("***********Decending*************************")
for (let i = 10; i >=1; i--) {

        console.log(i)
  
}

console.log("_____________ Global Variable________________________")

let i:number;
for ( i = 1; i <=5; i++) {
    console.log(i)
    
}
console.log(i)