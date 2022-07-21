const KEY = "users";

function saveUser(userObj){
    let oldData=readUsers();// getting local storage data
    oldData.push(userObj);
    let value= JSON.stringify(oldData); //send the user to local storage
    localStorage.setItem(KEY, value);
}

function readUsers(){
    let data=localStorage.getItem(KEY);
    if(!data){
        return []; // creating the array
    }else{
        let list= JSON.parse(data);//parse string to obj
        return list; //return array with obj
    }
}