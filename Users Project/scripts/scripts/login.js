function login(){
    console.log("Login succesful")
    //get value from the form
    let txtPass=$("#txtPassword").val();
    let userEmail=$("#txtEmail").val();
    //use a flag
    let flag=true;

    //get the users from LocalStorage
    let users=readUsers();
    //travel the user list from LocalStorage
    for(let i=0; i<users.length; i++){
        let User=users[i]
    //compare the input values with the values from ls
    if(User.email==userEmail && User.password==txtPass){
        flag=true;
        window.location="users.html";
    }else{
        flag=false;
        }
    }
    if(!flag){
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        },3000);

    }
    }

function init(){
    $("#loginButton").click(login);
}
window.onload=init;