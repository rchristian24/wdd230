const baseURL = "https://rchristian24.github.io/wdd230";
const linksURL = "https://rchristian24.github.io/wdd230/data/links.json";
const cards =  document.querySelector('#cards');

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}


const displayLinks = (weeks) =>{

    weeks.forEach((week) => {
        const card = document.createElement('section');
        const heading = document.createElement('h3');
        heading.textContent = ('Learning Activities');
        const listItem = document.createElement('li');
       
        listItem.innerHTML = `${week.week}:`;
        console.log(listItem);

        week.links.forEach((link) => {
            listItem.innerHTML += ` <a href="${link.url}">${link.title}</a>|`

            card.appendChild(listItem);
        })
       console.log(week);
                 
        cards.appendChild(card);
        
    });
}
getLinks();