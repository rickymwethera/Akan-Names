function getName() {
    var year = document.getElementById("birthyear").value;
    var yy = parseInt(year);
    var month = document.getElementById("Month").value;
    var mm = parseInt(month);
    var day = document.getElementById("Birthdate").value;
    var dd = parseInt(day);
    var CC = 
    var result = parseInt(((CC / 4) - 2 * CC - 1) + (( 5 * YY / 4)) + (( 26 * ( mm + 1) / 10)) + dd) %7;
    var answer = result.toFixed();
    var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girl = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    

}