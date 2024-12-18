function register(){
    var username = document.getElementById("user").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var password = document.getElementById("pass").value;

    if(username === "" || password === "" || gender === "" || name === ""){

        document.getElementById("error").innerHTML =("All textboxes are required")
    }

    else{
        document.getElementById("error").innerHTML= "Welcome " + username;
    }
}

function forgot() {
    alert("You clicked forgot password");
}
