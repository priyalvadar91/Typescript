// break

for (let i = 1; i <10; i++) {
    if(i==5){
        break
    }
   console.log(i)
    
}

// Continue
console.log("_____________continue--------------------")
for (let i = 1; i <10; i++) {
    if(i==5){
        continue
    }
   console.log(i)
    
}

console.log("**********************************************")

for (let i = 1; i <10; i++) {
    if(i==5|| i==9 || i==2){
        continue // skip
    }
   console.log(i)
    
}