const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const password = document.getElementById("password");
const validate = document.getElementById("repassword");
const message = document.querySelector("#messageValidator");

validate.addEventListener("focusout", check);
function check(){
	if (password.value != validate.value){
		message.textContent= "Passwords Do Not Match!";
		message.style.visibility="visible";
		validate.value ="";
		password.value =""
		password.focus();
		console.log("check different passwords");
	}
	else{
		message.style.visibility="hidden";
		validate.style.color="000";
	} 
}



