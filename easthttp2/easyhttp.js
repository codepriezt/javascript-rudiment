/*
Easy http Request 
* @version 2.0.0
* @author Codepriezt
*/


//creating  library using es6 

class EasyHttp {
    //Make an Http Get Request
    get(url){
        return new Promise((resolve , reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err=>reject(err));
        })
    }

    post(url , data){
        return new Promise((resolve, reject)=>{
            fetch(url , {
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res =>res.json())
            .then(data => resolve(data))
            .catch(err =>reject(err))
        })
    }


    put(url , data){
    return new Promise((resolve, reject)=>{
        fetch(url , {
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => resolve(data))
        .catch(err =>reject(err))
    })
  }

  delete(url){
    return new Promise((resolve, reject)=>{
        fetch(url , {
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            },
        })
        .then(res =>res.json())
        .then(() => resolve('User deleted'))
        .catch(err =>reject(err))
    })
  }
}