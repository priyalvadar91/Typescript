
// String - Text value or a combination of character

// Sibgle quoate - string literal ('SingleQuote')
// Double quoate - String Literna ('DoubleQuote)
// backtick - String template - when we try to use a string variable inside another string value $(variable)
// index in string starts with a
// `` or "" (backtick)

console.log("____________________________")

// declaration of strings

let str1:string = "This is a string";
let str2:string = 'This is a string';
let str3:string = `This is a string`;

console.log(str1)
console.log(str2)
console.log(str3)


console.log("____________________________")


// when to use back tick

let num:number=10;
console.log("Number is",num)

console.log(`Number is ${num}`)

// String Methods

//length
console.log("_______length---------")
console.log(str1.length)

// toUpperCase() & toLowerCase()
console.log("toUpperCase() & toLowerCase()")
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())

// charAt() and indexOf()

console.log("charAt() and indexOf()")
console.log(str1.charAt(8))
console.log(str1.indexOf("string"))


// substring

console.log("___________________substring_____________________")

// substring

console.log("------------ substring--------------")

console.log(str1.substring(2,6))



// includes - true/ false

console.log("includes - true/ false")
console.log(str1.includes("is"))
console.log(str1.includes("Is"))

// Startswith() and endswith()- returns boolean value

console.log("Startswith() and endswith()")
console.log("Starts with :",str1.startsWith("This"))
console.log("Ends with ",str1.endsWith("is"))


// replace 

console.log("--------------Replace____________")

console.log(str1.replace("string","Typescript"))


// split - break the string into multiple parts based on the delimeter,returns an array

console.log("--------------Split____________")
let words : string[]=str1.split(" ")
console.log(words)

console.log("------------________________-------------")

let myString:string="abc,xyz,pqr,lmn"

let s:string[]=myString.split(",")
console.log(s)

// trim(), trimStart(), trimEnd()
console.log("trim(), trimStart(), trimEnd()")


let s1="   Welcome to typescript   "

console.log(s1.trim())
console.log(s1.trimStart())
console.log(s1.trimEnd())


// concat

console.log(".............Concat--------------------")

console.log(str1.concat(str2))
console.log(str1+str2)
console.log(str1.concat(str2).concat(str3))


// concept of string immutability

// Multilines string 

let multiline:string=`welcome 
to typescript`;

console.log(multiline)












