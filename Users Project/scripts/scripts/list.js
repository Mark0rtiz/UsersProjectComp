function displayUsers(usersArray){
    //travel the usersArray
    let tr="";
    for (let i=0; i<usersArray.length; i++){
    //get the user
    let User=usersArray[i];
    //create the html row element 
    tr+=`
    <tr id= "${User.id}">
    <td>${User.firstName}</td>
    <td>${User.lastName}</td>
    <td>${User.email}</td>
    <td>${User.password}</td>

    </tr>`;
    //append the row ot the html table
    document.getElementById("userTable").innerHTML=tr;
}
}
function init(){
    let users=readUsers(); //from storeManager
    displayUsers(users);
}
window.onload=init;
