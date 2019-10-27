//Use RegEx to validate form

function validate(){
  
    var firstName = document.contactinfo.firstname.value;
    var lastName = document.contactinfo.lastname.value;
    var email= document.contactinfo.email.value;
    var phone = document.contactinfo.phonenumber.value;
    
    //Validate first name
    
    if(firstName == "") {
         alert("First name must be filled out");
         return false;
    }
    
    //validate last name
    
    if(lastName == "") {
        alert("Last name must be filled out");
        return false;
    }
    
    //Validate phone number
    
    if(phone == "") {
        alert("Phone must be filled out");
        return false;
    }else {
        var regex = /\d{8}/;                
        if(regex.test(phone) === false) {
            alert("Please enter a valid phone number");
        }
    }
    
    //validate email
    
    if(email == "") {
        alert("Email must be filled out");
        return false;
    }else {
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;                
        if(regex.test(email) === false) {
            alert("Please enter a valid email address");
        }
    }
}

    
    


