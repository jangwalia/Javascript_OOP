//In javascript we class keyword to create new class
class Student {
  //constructor defines what will be the values of each objects created 
  constructor(firstname,lastname,year) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.year = year
  }

}
let student1 = new Student("Jang","walia",2022);
console.log(student1.firstname);