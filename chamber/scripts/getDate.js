const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.querySelector("span").textContent = year

//date and time document was last modified//
document.getElementById('modified').textContent = new Date(document.lastModified);

//timestamp//
function getTime(event){
    const time = document.getElementById("time");
    time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener('keypress', getTime);

//todays date//
function getDate(){

    const today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() +1;
    var yy = today.getFullYear();
    
    if (dd<10) dd = '0' + dd;
    if (mm<10) mm ='0' + mm;
    return (mm + "-" + dd + "-" + yy);
}
document.getElementById("date").textContent = getDate();
