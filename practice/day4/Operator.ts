let A: number=10, B:number=20,c:string="priyal"

//Airthmatic operator
console.log("*********** Airthmatic operator****************")
console.log(A+B)
console.log(A*B)
console.log(A/B)
console.log(A%B)
console.log(A-B)
console.log(5*2)
console.log(5**2)


// Assignment operators
console.log("*********** Assignment operators ****************")
A=30
B=40
A=A+50
B=B+A
console.log(B)


console.log(A+=B)
console.log(A-=B)
console.log(A*=B)
console.log(A/=B)
console.log(A%=B)


// Relational operators
// returns boolean value- true / false
// <,>,==,!=,===
console.log("******* Relational operators ***********")
A=10
B=20
console.log(A==B)
console.log(A>B)
console.log(A>=B)
console.log(A<B)
console.log(A<=B)
console.log(A===B)
console.log(A!=B)

// diiference between ==(equality) and === (Strict equality)
console.log("diiference between ==(equality) and === (Strict equality)")
let p:any=10
let q:any="10"

console.log(p==q)
console.log(p===q)


// logical - &&,||,!
// returns true/false
//

console.log("*****************Logical Operator********************************")

let b1:boolean=true
let b2:boolean=false
console.log("b1&&b2 :",b1&&b2)
console.log("b1||b2 :",b1||b2)
console.log(!b1)
console.log(!b2)

console.log("*****************Logical Operator & relational operator********************************")

console.log(20>10 && 10<5)
console.log(20>10 || 10<5)