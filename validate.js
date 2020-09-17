function validateForm(){
    var name= document.user.name.value;
    var email=document.user.email.value;
    
    var status=false;

    if(name.length < 3){
        document.getElementById("nameErr").innerHTML = "Length of Name should be greater than 3 characters";
        status = false;
    }
    else{
        status=true;
    }
    if(email == ""){
        document.getElementById("emailErr").innerHTML = "Please Enter email";
        status=false;
    }
    else{
        status=true;
    }
    return status;
}