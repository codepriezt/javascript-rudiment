/*
Easy http Request 
* @version 3.0.0
* @author Codepriezt
*/


//creating  library using es7 using async

class EasyHttp {
    //Make an Http Get Request
    async get(url){
        
          const response = await fetch(url)
          const resData = await response.json();
          return resData
       
    }

    async post(url , data){
        
           const response = await fetch(url , {
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
           const data = await response.json();
           return data
        
    }


   async put(url , data){
   
       const response = await fetch(url , {
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const data = await response.json();
        return data
  }

 async  delete(url){
  
        const response = await fetch(url , {
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            },
        })
       const data = await response.json 
       return data;
  }
}