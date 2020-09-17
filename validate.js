function validateForm(){
    var name= document.user.name.value;
    var email=document.user.email.value;
    var country =  document.user.country.value;
    var phone = document.user.phone.value;
    var profession = document.user.profession.value;

    var nameErr = emailErr = phoneErr = countryErr = professionErr = false;

    if(name.length < 3){
        document.getElementById("nameErr").innerHTML = "Length of Name should be greater than 3 characters";
        nameErr = false;
    }
    else{
        nameErr=true;
    }
    if(email == ""){
        document.getElementById("emailErr").innerHTML = "Please Enter email";
        emailErr=false;
    }
    else{
        emailErr=true;
    }  
    if(profession=="")
    {
        document.getElementById("professionErr").innerHTML = "Enter profession";
        professionErr=false;
    }
    else{
        professionErr=true;
    }
    if(country=="Select"){
        document.getElementById("countryErr").innerHTML="Select the country first";
        countryErr=false;
    }
    else{
        countryErr=true;
    }
    var regex = /^[0-9]\d{9}$/;
    if(regex.test(phone)==false)
    {
        document.getElementById("phoneErr").innerHTML = "Phone Number not valid";
        phoneErr=false;
    }
    else{
        phoneErr=true;
    }
    if((nameErr || emailErr || professionErr || countryErr || phoneErr) == false)
    {
        return false;
    }
    else{
        var data = "The details you entered are as below \nName -"+name+"\nEmail - "+email+"\nPhone - "+phone+"\nProfession - "+profession+"\nCoutnry - "+country+"\n";
        alert(data);
    }
}