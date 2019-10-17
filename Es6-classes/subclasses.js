//inheritance
class Person{
    constructor(firstname , lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greeting(){
        return  `hello ${firstname} ${lastname}`
    }
}

// inheritance or alos called subclasses
class Customer extends Person{
    constructor (firstname , lastname , phone, membership ){
        //to class thr parent class constructor of person we will use a method called super 
        super(fistname, lastname);
        this.phone = phone;
        this.membership = membership;
    }

    static getmembershipCost(){
        return `500`;
    }
}
//initiate 
const james = new Customer('james' ,'alex' , '3344556677' , 'senior');

console.log(james);
console.log(james.greeting());


// this static method only works for the class.. that  is because it is a private method..
console.log(Customer.getmembershipCost());
