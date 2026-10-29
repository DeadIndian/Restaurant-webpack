const home = document.createElement("div");

const title = document.createElement("h1");
title.textContent = "SAMURAI SHOKUDO";

// const para = document.createElement("p");
// para.innerHTML = "This page is inspired by <a href='https://github.com/AbijithBalaji/sekiro_grub_theme'>this</a> Grub Theme.\n I knew I had to do it this way the moment I saw that project on TOP website. I'd say it turned out well.";

const timing = document.createElement("div");
const tHead = document.createElement("h3");
tHead.textContent = "Timings : ";
const tList = document.createElement("ul");

const DaysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

DaysArr.forEach(element => {
    const lis = document.createElement("li");
    lis.textContent = element + " → 8AM to 8PM";
    tList.appendChild(lis);
});

timing.appendChild(tHead);
timing.appendChild(tList);

const loc = document.createElement("div");
const lTitle = document.createElement("h3");
lTitle.textContent = "Location";
const lBody = document.createElement("p");
lBody.textContent = "Opp. Metro Station, Narayanaguda, Hyderabad, India.";

loc.appendChild(lTitle);
loc.appendChild(lBody);

home.appendChild(title);
// home.appendChild(para);
home.appendChild(timing);
home.appendChild(loc);

export default home;