function myFunction() {
    let isvalid = true;

    let email = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;

    let msg = document.getElementById("msg");
    let msg1 = document.getElementById("msg1");

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if (email === "") {
        msg.innerHTML = "Please enter email address";
        msg.style.color = "red";
        isvalid = false;
    } else if (!pattern.test(email)) {
        msg.innerHTML = "Enter valid email";
        msg.style.color = "red";
        isvalid = false;
    } else {
        msg.innerHTML = "Valid email";
        msg.style.color = "green";
    }

   
    if (pass === "") {
        msg1.innerHTML = "Enter password";
        msg1.style.color = "red";
        isvalid = false;
    } else if (!passwordPattern.test(pass)) {
        msg1.innerHTML =
            "Password must contain uppercase, lowercase, number & special character";
        msg1.style.color = "red";
        isvalid = false;
    } else {
        msg1.innerHTML = "Strong password";
        msg1.style.color = "green";
    }

  
    if (isvalid) {
        alert("Login successfully!");
    }

    return isvalid;
}
