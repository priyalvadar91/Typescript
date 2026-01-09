class calculator{

// constructor overloading
    constructor(); // default connstructor

    constructor(a:number,b:number); // paramerized constructor

    constructor(a?:number,b?:number){

        if(a!=undefined && b!=undefined){
            console.log("Sum of a & b ",(a+b))
        }
        else{
            console.log("Default constructor calledd.............")
            
        }
    }


   // signatures of method.............
   // method overloading

   add(p:number,q:number):number;
   add(p:number,q:number,r:number):number;

   add(p:number,q:number,r?:number):number{

    if(r!=undefined){
        return (p+q+r);
    }
    else{
        return (p+q);
    }
   

   }





}

let c1 = new calculator();
let c2 = new calculator(10,20);

console.log(c1.add(11,12));
console.log(c1.add(11,12,13));
