document.getElementById('button1').addEventListener('click', getData);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click' , generateApi)

function getData(){
    fetch('data.txt')
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        // document.getElementById('output').innerHTML = data
    })
    .catch(function(err){
        console.log(err);
    });
}


function getJson(){
    fetch('customers.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){ 
        let output = '';
        data.forEach(function(customer){
            output += `<li>${customer.name}</li>`;
        });
        document.getElementById('output').innerHTMl = output;
    })
    .catch(function(err){
        console.log(err);
    });
}


function generateApi(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){ 
        console.log(data)
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTMl = output;
    })
    .catch(function(err){
        console.log(err);
    });
}