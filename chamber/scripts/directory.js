const cards = document.querySelector("#member-cards");
const memberInfo = "data/members.json"

async function getMemberData(){
    const response = await fetch(memberInfo);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);  
}

const displayMembers = (members) =>{
    members.forEach(member =>{
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const link = document.createElement("url");
        const linkTitle = document.createElement("title");
        const img = document.createElement("img");
        const membership = document.createElement("p");
        const company = document.createElement("p");
        
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        membership.textContent = `Membership Level: ${member.membership}`;
        company.textContent = `Company: ${member.company}`;
        
        img.setAttribute("src", member.img);
        img.setAttribute("alt", `Image for ${company}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');
        
        link.innerHTML = `${member.url}`;
        linkTitle.textContent = `${member.url}`;
             
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);
        card.appendChild(linkTitle);
        card.appendChild(img);
        card.appendChild(membership);
        card.appendChild(company);
        
        cards.appendChild(card);      
    })
}

getMemberData()

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click",() =>{
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList(){
    display.classList.add("list");
    display.classList.remove("grid");

}