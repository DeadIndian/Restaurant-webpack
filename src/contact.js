const contact = document.createElement("div");

const title = document.createElement("h1");
title.textContent = "Contact Me";

const loc = document.createElement("div");

const lTitle = document.createElement("h3");
lTitle.textContent = "Yes, Me";
const lBody = document.createElement("p");
lBody.innerHTML = "Not gonna give any of my Contact info tho... All you can have is my <a href='https://github.com/DeadIndian'>Github</a> and <a href='https://www.linkedin.com/in/golla-bharath/'>LinkedIn</a>";

loc.appendChild(lTitle);
loc.appendChild(lBody);

contact.appendChild(title);
contact.appendChild(loc);

export default contact;