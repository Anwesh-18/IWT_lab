function validateForm() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let country = document.getElementById("country").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    
    if (!name || !mobile || !address || !country || !email || !password || !gender) {
        alert("All fields are required");
        return false;
    }
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Invalid mobile number");
        return false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return false;
    }
    if (password.length < 6 || password.length > 15) {
        alert("Password must be 6-15 characters");
        return false;
    }
    alert("Form submitted successfully");
    return true;
}