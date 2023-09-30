// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

const visitsDisplay = document.querySelector(".visits");

const today = Date.now();

let lastVisit = Number(window.localStorage.getItem("lastVisit-ls"));

if(lastVisit == 0 ){
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions!";
}else if(lastVisit > today - msToDays){

    visitsDisplay.textContent = "Back So Soon! Awesome!";
}
else{

    let difference = Math.round((today- lastVisit) / msToDays);
    visitsDisplay.textContent = `You last visited ${difference} days ago`;
}
localStorage.setItem("lastVisit-ls", Date.now());





