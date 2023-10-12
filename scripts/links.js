const baseURL = "https://rchristian24.github.io/wdd230";
const linksURL = "https://rchristian24.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}
getLinks();

const displayLinks = (weeks) =>{
    weeks.forEach(week =>{
        const title = document.createElement('title');
        const link = document.createElement('url');

        title.textContent = `${week.title} | ` ;
        link.innerHTML = `${week.url}`;

        week.appendChild(title);
        week.appendChild(link);

        weeks.appendChild(week);
    });
}