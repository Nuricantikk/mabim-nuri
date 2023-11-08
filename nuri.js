function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "TeviCantik" && password =="12345"){
            if(confirm("Apakah Ingin Login?") == true){
                window.location.href = "https://github.com/Tevinrchyti"
            } else {
                alert("Login dibatalkan karena anda bukan jawa!");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
}f