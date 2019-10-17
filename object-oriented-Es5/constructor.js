 //Person constuctor
 function Person( name , dob){
     this.name = name
     this.birthday = new Date(dob);
       //function to calculate the birth Age
        this.calculateAge =  function(){
         const diff =  Date.now() - this.birthday.getTime()
         const getDate = new Date(diff);
          // getting the precised full year
         return Math.abs(getDate.getUTCFullYear() - 1970);
       }
 }

 //init a new 
 const brad  = new Person('john' , '8-15-2017');
 console.log(brad.calculateAge())