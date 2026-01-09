// class
// Read only properties
//optional property
//static properties and methods - 
//  1.common across all
//  2.  can be accessed through class name
// 3. static properties /method properties can be modified using object
// 4. We can not use this for static properties , instead we can use class name

class StudentData{

     readonly studentId:number; //  Read-only property (can only  be assigned once, inside constructor)
     name:string; // regular property
     email?:string; // optional property
     static schoolName:string="Greenhood School";

     constructor(id:number,name:string,email?:string){
     this.studentId=id;
     this.name=name;
     this.email=email;

     }

     static changeSchoolName(newName:string):void{
     StudentData.schoolName=newName;
    
    }
     displayInfo(){

        console.log("Student id   :",this.studentId)
        console.log("Student Name :",this.name)
        if(this.email){
        console.log("email:",this.email)

        }
        else{
            console.log("Email is not provided")
        }

        console.log("Scholl name:",StudentData.schoolName)
     }


    }
     
let s1= new StudentData(10,"dfgh","@gamil");
let s2= new StudentData(10,"dfgh");

console.log("******************Display with mailId*************")
s1.displayInfo();
console.log("******************Display without mailId*************")
s2.displayInfo();


// static method - change school name
console.log("******************change school name*************")

StudentData.changeSchoolName("Sunrise")

s1.displayInfo()





