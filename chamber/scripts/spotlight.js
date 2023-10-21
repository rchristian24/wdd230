const spotlights = document.querySelector("#spotlight");
const memberInfo = "data/members.json";
var memberData = {}; 

async function getMemberData(){
    const response = await fetch(memberInfo);
    memberData = await response.json();
    console.log(memberData);
}

const findMemberStatus =async () =>{
    await getMemberData();
    memberData.members = memberData.members.filter(member => member.membership == "Gold" || member.membership == "Silver");
    console.log(memberData.members);
    memberData.members = memberData.members.sort(() => 0.5 - Math.random()).splice(0,2);
    memberData.members.forEach(member =>{

        const card = document.createElement("section");
        
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("a");
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
        
        url.textContent = `${member.url}`;
             
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(img);
        card.appendChild(membership);
        card.appendChild(company);
      
        spotlights.appendChild(card);

           
        
    })
}
findMemberStatus();