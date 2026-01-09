// inheritance
// A class can reuse the properties and methods of another class
// Inheritance is a mechanism where one class (child) can inherit the properties and method of another class(Parent)

// A---- properties + method
// B ----

class Car {

    carName:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){

        this.carName=name;
        this.color=color;
        this.model=model
    }

    start(){
          console.log("Car started...........")

    }

    stop(){
 console.log('Car stopped.....................')

    }

    displayInformation(){

        console.log(`Name: ${this.carName}, Color:${this.color} , Model: ${this.model}`)
    }
}


class Honda extends Car{
   year:number

   constructor(name:string,color:string,model:string,year:number){

    super(name,color,model);
    this.year=year;
   }
   start(){

    console.log("Honda started.................")
   }

   yom(){
    
    
    console.log(`Name: ${this.carName}, Color:${this.color} , Model: ${this.model},YOM: ${this.year}`)
}
}

// 
class Maruti extends Car
{
    year:number

    constructor(name:string,color:string,model:string,year:number){
 
     super(name,color,model);
     this.year=year;
    }
    start(){
 
     console.log("Maruti started.................")
    }
 
    yom(){
     
     
     console.log(`Name: ${this.carName}, Color:${this.color} , Model: ${this.model},YOM: ${this.year}`)
 }

}


// create an object of HOnda class

let honda1=new Honda("Honda","Red","Honda-city",1991);

console.log(honda1.carName)
console.log(honda1.color)
console.log(honda1.model)
console.log(honda1.year)

honda1.start(); // child class method called

honda1.displayInformation();
honda1.stop(); // parent method called as method belogs to parent class only
honda1.yom();

// create maruti object
console.log("*************************create maruti object*******************************")

let maruti1= new Maruti("Maruti","Blue","M20",1898);

maruti1.start()

maruti1.displayInformation();

maruti1.stop()
maruti1.yom()

// 
// Parent class variable is holding child class object

let car:Car=new Honda("Honda","Red","Honda-city",1991);
car.displayInformation();
car.start();

//car.yom()  ==> not accessible

car.stop()