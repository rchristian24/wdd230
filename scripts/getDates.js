const todaysdate = new Date();
const year = todaysdate.getFullYear();
document.querySelector("span").textContent = year

//date and time document was last modified//
document.getElementById('modified').textContent = new Date(document.lastModified);
