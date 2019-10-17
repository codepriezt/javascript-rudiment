//constructor in es5
function easyHttp(){
    this.http = new XMLHttpRequest()
}

//make an http get request
easyHttp.prototype.get = function(url , callback){
    this.http.open('get' ,url , true)

    let self = this;
    this.http.onload = function(){    
    if(self.http.status == 200){
         callback(null ,self.http.responsetext);
    }else{
        callback('Error:' + self.http.status )
    }
  }

  this.http.send();
}


easyHttp.prototype.post = function(url , data , callback){
    this.http.open('post' , url , true);

    //content type
    this.http.setRequestHeader('content-type' , 'application/json');

    let self = this;
    
    this.http.onload = function(){
        callback(null , self.http.responseText);
    }

    this.http.send(JSON.stringify(data))


}


easyHttp.prototype.put = function(url , data , callback){
    this.http.open('put' , url , true);

    //content type
    this.http.setRequestHeader('content-type' , 'application/json');

    let self = this;
    
    this.http.onload = function(){
        callback(null , self.http.responseText);
    }

    this.http.send(JSON.stringify(data))
}


easyHttp.prototype.delete = function(url , callback){
    this.http.open('delete' ,url , true)

    let self = this;
    this.http.onload = function(){    
    if(self.http.status == 200){
         callback(null ,'Post successfully deleted');
    }else{
        callback('Error:' + self.http.status )
    }
  }

  this.http.send();
}

