// Parent class

class Person{
    public name : string; // accesible anywhre
    protected age:number; // accessible within the class and its subclasses
    private ssn :number;

    constructor(name: string,age:number,ssn:number)
    {
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }
    displayInfo(){
        console.log("Name :",this.name)
        console.log("Name :",this.age)
        console.log("Name :",this.ssn)
    }
}

class Employee extends Person
{

    private employeeId:number;
    constructor(name:string,age:number,ssn:number,employeeId:number){

        super(name,age,ssn);
        this.employeeId=employeeId;
    }

    showEmployeeDetails(){
        console.log(this.name) // Public - accessible
        console.log(this.age) // protected accessible
        //console.log(this.ssn)// privte - not accessible outside of the class
        console.log(this.employeeId); // private- accessible as its declared within the same class

    }
}


let emp1= new Employee("John",32,1234567,101);

emp1.displayInfo();

console.log("______________________________")
emp1.showEmployeeDetails();


console.log("______________________________")

console.log(emp1.name) // Public - accessible anywhere
//console.log(emp1.age) // protected -accessible with classa and subclass only
//console.log(emp1.ssn) // Private - Accessible with class only
