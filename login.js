const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function(event) {
    // Get the input element by its ID
    event.preventDefault();

    let inputEmail = document.getElementById('inputEmail');

    // Get the value of the input
    let email = inputEmail.value;

    let inputPassword = document.getElementById('inputPassword');

    let password = inputPassword.value;

    let error = true;


    let emails = ['sdadhich@purdue.edu', 'mahesh49@purdue.edu', 'venkatr8@purdue.edu', 'naik58@purdue.edu'];
    let passwords = ['12345678', '90123456', '78901234','56789012'];

    let errorDiv = document.getElementById('error');

    for(let i = 0; i < emails.length; i++ ){
        if(email === emails[i]) {
            if(password === passwords[i]){
                error = false;
            }
        }
    }

    if(error) {
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
        alert('You have logged in successfully!');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';

        let loginBtn = window.opener.document.getElementById('loginBtn');
        loginBtn.textContent = 'Logout';

    }

})
