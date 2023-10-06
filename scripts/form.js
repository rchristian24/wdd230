const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

var password = document.getElementById("password");
var repassword = document.getElementById("repassword");

function validate(){
	if (password.value != repassword.value){
		repassword.setCustomValidity("Passwords Do Not Match")
	}
	else{
		repassword.setCustomValidity('');	}
}

