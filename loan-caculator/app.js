// listen to  submit button
document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none';

    //show loader
    document.getElementById('loader').style.display = 'block';

    setTimeout(calculateResult , 2000);

    e.preventDefault();
});
 

function calculateResult(){


//UI vars
const amount = document.getElementById('amount');
const year = document.getElementById('years');
const interest= document.getElementById('interest');
const monthlypayment = document.getElementById('monthly-payment');
const totalinterest = document.getElementById('total-interest');
const totalpayment = document.getElementById('total-payment');

const principal  = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(year.value) * 12;

//compute monthly payment
const x = Math.pow(1 + calculatedInterest , calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)) {
    monthlypayment.value = monthly.toFixed(2);
    totalpayment.value = (monthly * calculatedPayments).toFixed(2);
    totalinterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //show result
    document.getElementById('results').style.display = 'block';

    //hide loader
    document.getElementById('loader').style.display = 'none'
   
}else{
    showError('please check your number');
}

}

function showError(error){

    document.getElementById('results').style.display = 'none';

    document.getElementById('loader').style.display = 'none';


    //create a div
    const errorDiv = document.createElement('div');

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    // add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //insert error above heading
    card.insertBefore(errorDiv , heading)

    //clear error after 3 secs
    setTimeout(clearError , 3000);
}

//ckear error
function clearError(){
    document.querySelector('.alert').remove();
}