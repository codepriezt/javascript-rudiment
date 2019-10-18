document.getElementById('button1').addEventListener('click', getData);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click' , generateApi)

function getData(){
    fetch('data.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML = data
    })
    .catch(err => console.log(err));
}


function getJson(){
    fetch('customers.json')
    .then(res => res.json())
    .then(data => { 
        let output = '';
        data.forEach(function(customer){
            output += `<li>${customer.name}</li>`;
        });
        document.getElementById('output').innerHTMl = output;
    })
    .catch(err => console.log(err));
        
}


function generateApi(){
    fetch('https://api.github.com/users')
    .then(res => res.json()) 
    .then(data => { 
        console.log(data)
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTMl = output;
    })
    .catch(err => console.log(err));
}