/*

Tuple in typescript
A tuple is a fixed array where each element has a specific type
it helps in storing multiple fields of different data types together


*/

// tuple with 2 values of string,number

let person:[string,number]=["John",101]

console.log(person[0])
console.log(person[1])
console.log(person)


console.log(".............Tuple with multiple value..........")

let user :[number,string,boolean,number,string]=[10,"abc",true,100,"fghjk"]

console.log(user)

// Iterating over a tuple using traditional for loop
console.log("------------ using traditional for loop.................")

for(let i=0;i<user.length;i++){

    console.log(user[i])

}
console.log("------------ Using for in loop.................")
for(let i in user)
{
    console.log(user[i])
}
console.log("------------ Using for of loop.................")
for(let value of user)
{
    console.log(value)
}

// tuple array(Arrya of tuple)

let students:[number,string][]=[[11,"abc"],[12,"xyz"],[13,"pqr"],[14,"lmn"]]

console.log(students)

console.log("------------------")

let tp =students[0]

console.log(tp[0])
console.log(tp[1])


