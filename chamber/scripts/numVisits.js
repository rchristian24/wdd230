// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();


const visitsDisplay = document.querySelector(".visits");
// processing
const today = Date.now();


let numVisits = Number(window.localStorage.getItem("visits-ls"));
if(numVisits !==0){
    today - numVisits
    visitsDisplay.textContent = numVisits;
}else{
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions!";
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
todayDisplay.textContent = Date.now();


const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;
