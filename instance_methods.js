//instance methods are those which are created for objects to run
class Student {
  constructor (firstname,lastname,year){
    this.firstname = firstname;
    this.lastname = lastname;
    this.year = year;
    this.absence = 0;
    this.score = [];
  }
  //creating instance method
  markAbsent(){
    this.absence += 1
    if(this.absence >= 3){
      return "you are expelled...."
    }
    return `${this.firstname} has been late ${this.absence} times`
  }
  //another instance method
  addscore(score) {
    this.score.push(score)
    return `Total scores : ${this.score}`
  }

  //instance method
  getAverage (){
   let sum =  this.score.reduce(function(a,b) {return a + b})
    let avg =  sum / this.score.length
    return avg.toFixed(2)
  }
}

let student1 = new Student("jang","walia",2)
console.log(student1.addscore(10))
console.log(student1.addscore(30))
console.log(student1.addscore(40))
console.log(student1.getAverage())
