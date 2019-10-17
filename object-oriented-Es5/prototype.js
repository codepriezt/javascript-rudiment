//Object prototype
//person prototype

 //Person constuctor
 function Person( firstname , lastname , dob){
    this.firstname = firstname
    this.lastname = lastname
    this.birthday = new Date(dob);
      //function to calculate the birth Age
    //    this.calculateAge =  function(){
    //     const diff =  Date.now() - this.birthday.getTime()
    //     const getDate = new Date(diff);
    //      // getting the precised full year
    //     return Math.abs(getDate.getUTCFullYear() - 1970);
    //   }
}

//person prototype to calculate age
Person.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime()
        const getDate = new Date(diff);
         // getting the precised full year
        return Math.abs(getDate.getUTCFullYear() - 1970);

}

//person prototype to getting fullname 
Person.prototype.getFullname = function(){
    return `${this.firstname}  ${this.lastname}`
}
// person prototype for setting get married
Person.prototype.getMarried  = function(newLastname){
    this.lastname = newLastname
}

//init a new 
const brad  = new Person('john' , '8-15-2017');
const john  = new Person('brad' , '8-15-2015');

console.log(brad.calculateAge());
console.log(brad.getFullName());
console.log(brad.getMarried('jones'));

// this actually return a bool values if the argument passes into the has Own property is a property of the obect property not the object prototype..
console.log(brad.hasOwnProperty('firstname'));
