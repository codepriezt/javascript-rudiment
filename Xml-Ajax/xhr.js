document.getElementById('button').addEventListener('click' , lodData);


function loadData(){
    //instiantiate xml 
    const  xml = new XMLHttpRequest();

    /*
    three argument the xml object takes ..
    *the method  of request,
    * thhe url or file you are sending the request to 
    * the last argument is to make it asynchonous 
    */ 

    xml.open('Get', 'data.txt' , true)

    //optional- used for spinners/loaders
    xml.onprogress = function(){
        console.log('readystate' , xml.readyState);
    }

    //onload method
    xml.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText)
            document,getElementById('output').innerHTML = `<h1>${this.responseText}<h2>`
        }
    }

    // //before the onload method there used to be a readystatemethod
    // xml.onreadystatechange = function(){
    //     if(this.status === 200 && this.readystate === 4){
    //         console.log(this.responseText);
    //     }
    // } 

// method for checking errors
xml.onerror = function(){
    console.log(error);
}

    xml.send();
}

/*readyState Values 
 0 : request not initialized
 1: server connection established 
 2: request recieved
 3: processing request
 4: request finished and response is ready 
*/