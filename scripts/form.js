const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const password = document.querySelector(".password");
const validate = document.querySelector("#repassword");
const message = document.querySelector("#messageValidator");

validate.addEventListener("focusout", check);
function check(){
	if (password.value != validate.value){
		message.textContent= "Passwords Do Not Match!";
		message.style.visibility="show";
		validate.value ="";
		validate.focus();
	}
	else{
		message.style.display="none";
		validate.style.color="000";
	} 
}



