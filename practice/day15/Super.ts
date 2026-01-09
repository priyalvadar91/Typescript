// super()- used to invoke immediate parent class constructor
//super- used to invoke immediate class method

// super - cannot be used to invoke the parent class property (in java its possible)

class Parent
{
    num:number=10;
    constructor(){

        console.log("this is parent class constructor");


    }

    display(){
        console.log("Diaplay method form Parent class")
    }
    

}

class Child extends Parent
{

    num:number=20;

    constructor(){
        super();
        console.log("this is child class constructor")
    }
     show() {
       // console.log(super.num)
         console.log(this.num)
         console.log("Show method from Child")
     }
     display(): void {
         super.display();
        console.log("Display method from Child")

     }
}

let child1=new Child();
child1.display()
child1.show();
//console.log(child1.num);

