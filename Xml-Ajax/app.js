document.getElementById('button1').addEventListener('click' , loadCustomer);
document.getElementById('button2').addEventListener('click' , loadCustomers);


//load customer
function loadCustomer(e){
    e.preventDefault();
    //init xhr
    const xhr = new XMLHttpRequest();

    xhr.open('Get' , 'customer.json' , true)

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            //parse the json objext so it can be viewed in the browser
            const customer = JSON.parse(this.responseText);


                 const output = `
                 <ul>
                            <li>ID: ${customer.id}</li>
                            <li>Name: ${customer.name}</li>               
                            <li>Phone: ${customer.phone}</li>               
                            <li> Company:  ${customer.customer}</li>               
                    </ul>
                 `;

                 document.getElementById('customer'),innerHTML = output ;
        }
    }

    xhr. send();
}


//load customers

function loadCustomers(e){
    e.preventDefault();
    //init xhr
    const xhr = new XMLHttpRequest();

    xhr.open('Get' , 'customers.json' , true)

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            //parse the json objext so it can be viewed in the browser
            const customers = JSON.parse(this.responseText);
            
                let output = '';
                
                customers.forEach(function(customer){
                    output += `
                    <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>               
                    <li>Phone: ${customer.phone}</li>               
                    <li> Company:  ${customer.customer}</li>               
                    </ul>
                    `;
                })

                 document.getElementById('customers'),innerHTML = output ;
        }
    }

    xhr. send();
}

