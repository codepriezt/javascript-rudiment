async function myfunc(){
    const promise = new Promise((resolve , reject)=>{
        setTimeout(()=>resolve('hello'),1000);
    });

    const error = false;

    if(!error){
        const res = await promise; //wait until ptomise is resolved
        return res
    }else{
        await Promise.reject(new  Error('something went wrong'))
    }
}


myfunc()
    .then(res => console.log(res))
    .catch(err =>console.log(err))


//creating a new user with the async function

async function getUser(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    //only proceed once it is resolved 
    const data =  await response.json();

    //only proceed once the second promise ise resolved 
    return data
}

getUsers().then(users => console.log(users));