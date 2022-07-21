// create the user constructor
class User {
    constructor(fname, lname, email, password) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
    }
}
function isValid(User){
    //return true if the user is valid
    //return false if the user is not valid
    let valid=true;
    if(User.email.length==0){
        valid=false;
        $("#txtEmail").addClass("input-error");
        console.error("Please, enter a valid email");
    }
    if(User.password.length==0){
        valid=false;
        $("#txtPassword").addClass("input-error");
        console.error("Please, enter a valid password");
    }
    return valid;
}

function validatePass(){
    console.log("Validate password");
    let txtPass=$("#txtPassword"); //this is the element(input)
    let password=txtPass.val(); //this is the value inside of the input
    if(password.length<6){
        txtPass.css("background-color", "red"); //jQuery function to change the CSS
    }else{
        txtPass.css("background-color", "green");
    }
}

function passConfirmation(){
    let txtPass=$("#txtPassword").val();
    let txtPass2=$("#txtPassword2").val();
    if(txtPass==txtPass2){
        console.log("Passwords match");
    }else{
        console.log("Passwords do not match");
    }
}

//create the register function
function register(){
    let userName=$("#txtFirstName").val();
    let userLName=$("#txtLastName").val();
    let userEmail=$("#txtEmail").val();
    let userPassword=$("#txtPassword").val();
    //create the object
    let newUser = new User(userName, userLName, userEmail, userPassword)

    console.log(newUser);
    if(isValid(newUser)){
        saveUser(newUser);
    }
}
    //get values from the inputs

    //display the user on the console

    function init(){
        $("#userForm").hide();

        //hook events
        $("#newUser").on("click",function(){
            $("#userForm").slideDown(750);
        });

        $("#hideForm").on("click",function(){
            $("#userForm").slideUp(750);
        });

        $("#txtPassword").keyup(validatePass);
        $("#txtPassword2").keyup(passConfirmation);
    }
    window.onload = init;