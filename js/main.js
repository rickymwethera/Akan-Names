function getName() {
    event.preventDefault();
    var year = document.getElementById("birthyear").value;
    var yy = parseInt(year);
    var month = document.getElementById("Month").value;
    var mm = parseInt(month);
    var day = document.getElementById("Birthdate").value;
    var dd = parseInt(day);
    var cc = year.slice(0,1);
    var yy = year.slice(2,3);
    var CC = parseInt(cc);
    var YY = parseInt(yy); 
    var result = parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(mm+1)/10))+dd)%7;
    var answer = Math.floor(result);
    var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girl = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked){
        var gender = "Male";
    } 
    else {
        var gender = "Female";
    }
    if(mm < 1 || mm > 12 || mm == 2 && dd>29) {
        alert("INVALID MONTH INPUT");
    }
    else if (dd < 1 || dd > 31) {
        alert("INVALID DAY INPUT");
    }
    if(answer == 0 && gender ==="Male") {
        document.getElementById("output").innerHTML = 
        ("Born on Sunday. Your akan name is " + boy[0]);
    }
    else if(answer == 1 && gender === "Male"){
        document.getElementById("output").innerHTML = 
        ("Born on Monday. Your akan name is " + boy[1]);
    }
    else if(answer == 2 && gender === "Male"){
        document.getElementById("output").innerHTML = 
        ("Born on Tuesday. Your akan name is " + boy[2]);
    }
    else if(answer == 3 && gender === "Male"){
        document.getElementById("output").innerHTML = 
        ("Born on Wednesday. Your akan name is " + boy[3]);
    }
    else if(answer == 4 && gender === "Male"){
        document.getElementById("output").innerHTML = 
        ("Born on Thursday. Your akan name is " + boy[4]);
    }
    else if(answer == 5 && gender === "Male"){
        document.getElementById("output").innerHTML = 
        ("Born on Friday. Your akan name is " + boy[5]);
    }
    else if(answer == 6 && gender === "Male"){
        document.getElementById("output").innerHTML = 
        ("Born on Saturday. Your akan name is " + boy[6]);
    }
    else if(answer == 0 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Sunday. Your akan name is " + girl[0]);
    }
    else if(answer == 1 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Monday. Your akan name is " + girl[1]);
    }
    else if(answer == 2 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Tuesday. Your akan name is " + girl[2]);
    }
    else if(answer == 3 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Wednesday. Your akan name is " + girl[3]);
    }
    else if(answer == 4 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Thursday. Your akan name is " + girl[4]);
    }
    else if(answer == 5 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Friday. Your akan name is " + girl[5]);
    }
    else if(answer == 6 && gender === "Female"){
        document.getElementById("output").innerHTML = 
        ("Born on Saturday. Your akan name is " + girl[6]);
    }
    else {
        alert("Please enter your information!");
    }







}