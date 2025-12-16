function myFunction() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phonenumber = document.getElementById("phonenumber").value;

    let isvalid = true;

    let msg = document.getElementById("msg");
    let msg1 = document.getElementById("msg1");
    let msg2 = document.getElementById("msg2");
    let msg3 = document.getElementById("msg3");

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    if (name === "") {
        msg.innerHTML = "Please enter name";
        msg.style.color = "red";
        isvalid = false;
    } else {
        msg.innerHTML = "";
    }

   
    if (email === "") {
        msg1.innerHTML = "Please enter email address";
        msg1.style.color = "red";
        isvalid = false;
    } else if (!pattern.test(email)) {
        msg1.innerHTML = "Enter valid email";
        msg1.style.color = "red";
        isvalid = false;
    } else {
        msg1.innerHTML = "Valid email";
        msg1.style.color = "green";
    }

   
    if (password === "") {
        msg2.innerHTML = "Enter password";
        msg2.style.color = "red";
        isvalid = false;
    } else if (!passwordPattern.test(password)) {
        msg2.innerHTML =
            "Password must contain uppercase, lowercase, number & special character (min 8 chars)";
        msg2.style.color = "red";
        isvalid = false;
    } else {
        msg2.innerHTML = "Strong password";
        msg2.style.color = "green";
    }


    if (phonenumber === "") {
        msg3.innerHTML = "Enter phone number";
        msg3.style.color = "red";
        isvalid = false;
    } else if (phonenumber.length !== 10 || isNaN(phonenumber)) {
        msg3.innerHTML = "Enter valid 10-digit phone number";
        msg3.style.color = "red";
        isvalid = false;
    } else {
        msg3.innerHTML = "";
    }

   
    if (isvalid) {
        alert("Registration successful!");
    }

    return isvalid;
}
