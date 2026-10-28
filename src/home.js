const home = document.createElement("div");

const title = document.createElement("h1");
title.textContent = "Samurai Cafe";

const timing = document.createElement("div");
const tHead = document.createElement("h2");
tHead.textContent = "Timings : ";
const tList = document.createElement("ul");

const DaysArr = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

DaysArr.forEach(element => {
    const lis = document.createElement("li");
    lis.textContent = element + ": 8AM to 8PM";
    tList.appendChild(lis);
});

timing.appendChild(tHead);
timing.appendChild(tList);

const loc = document.createElement("div");
const lTitle = document.createElement("h2");
lTitle.textContent = "Location";
const lBody = document.createElement("p");
lBody.textContent = "Opp. Metro Station, Narayanaguda, Hyderabad, India.";

loc.appendChild(lTitle);
loc.appendChild(lBody);

home.appendChild(title);
home.appendChild(timing);
home.appendChild(loc);

export default home;