function toggleForm(){
    const box = document.getElementById('box');
    box.classList.toggle('move-left');
}

function submitSignUpForm(event){
    event.preventDefault();
    console.log("Sign Up :");
    
    const signUpName = document.getElementById('signUpName').value;
    const signUpEmail = document.getElementById('signUpEmail').value;
    const signUpPassword = document.getElementById('signUpPassword').value;
    
    console.log("Name :" , signUpName);
    console.log("Email : " , signUpEmail);
    console.log("Password :" , signUpPassword);
}

function submitSignInForm(event){
    event.preventDefault();
    console.log("Log In :");

    const signInEmail = document.getElementById('signInEmail').value;
    const signInPassword = document.getElementById('signInPassword').value;

    console.log("Email : " , signInEmail);
    console.log("Password :" , signInPassword);
}