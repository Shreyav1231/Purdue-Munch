const donateBtn = document.getElementById('donate');

donateBtn.addEventListener("click", function(event){
    event.preventDefault();

    let inputEmail = document.getElementById('inputEmail');

    // Get the value of the input
    let email = inputEmail.value;

    let inputPassword = document.getElementById('inputPassword');

    let password = inputPassword.value;

    let inputMealSwipe = document.getElementById('inputAmount');

    let mealSwipeNum = inputMealSwipe.value;

    let emails = ['sdadhich@purdue.edu', 'mahesh49@purdue.edu', 'venkatr8@purdue.edu', 'naik58@purdue.edu'];
    let passwords = ['12345678', '90123456', '78901234','56789012'];
    let accepted = [8, 11, 3, 15]

    let errorDiv = document.getElementById('error');

    let error = true;
    let index;

    for (let i = 0; i < emails.length; i++) {
        if (email === emails[i]) {
            if (password === passwords[i]) {
                error = false;
                index = i;
                break;
            }
        }
    }

    if(error) {
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
        if(mealSwipeNum > accepted[index]) {
            let excess = document.getElementById('limit')
            excess.style.display = 'block';
        } else {
            alert('You have successfully donated $' + mealSwipeNum + ' worth of meal swipes');
            window.location.href = 'index.html';
        }
    }


})