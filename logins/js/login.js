function login(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(username === "" || password === ""){

        document.getElementById("error").innerHTML =("All textboxes are required")
    }

    else{
        document.getElementById("error").innerHTML= "Welcome " + username;
    }
}

function forgot() {
    alert("You clicked forgot password");
}