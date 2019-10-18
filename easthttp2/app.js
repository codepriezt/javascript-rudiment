const http = new EasyHttp



// get user
http.get('https://jsonplaceholder.typicode.com/users')
.then(data =>console.log(data))
.catch(err => cinsole.log(data))



// get user
const data ={
    name:'john doe',
    username:'johngoe',
    email:'jdoe@SpeechGrammarList.com'
}


//create user
http.post('https://jsonplaceholder.typicode.com/users' , data)
.then(data => console.log(data))
.catch(err => console.log(err))



//update user
http.put('https://jsonplaceholder.typicode.com/users/2' , data)
.then(data => console.log(data))
.catch(err => console.log(err))


//delete user
http.put('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err))