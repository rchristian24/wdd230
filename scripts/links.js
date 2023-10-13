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
       console.log(week);
            const card = document.createElement('section');
            const link = document.createElement('a');    
                 
        const title = document.createTextNode(`${week.link} | `);

        link.appendChild(title);
        
       
        link.href = `${week.url}`;  
       
        card.appendChild(link);

        cards.appendChild(card);
    });
}
getLinks();