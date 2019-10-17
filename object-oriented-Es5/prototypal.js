// prototypal inheritance  is when another class inherit another class properties and prototype

//person constructor 
function Person(firstname , lastname){
    this.firstname = firstname
    this.lastname = lastname

}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstname} ${lastname}`
}

//customer constructor
function Customer(firstname , lastname , phone , memebership){
    //inheriting the person class using the call method
    Person.call(this , firstname , lastname)

    this.phone = phone
    this.membership = memebership
}

//inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype)

//make the customer.prototype return customer()
Customer.prototype.constructor = Customer;

//make customer prototype greeting after inheritting from person
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstname} ${lastname} welcome to our company...`
}

const james = new Person('james' , 'oke')
const customer1 = new Customer('james' , 'ade' , '555555555555' , 'standard')

console.log(customer1)