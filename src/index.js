import "./styles.css";
import bgimg from "../assets/bg.png"
import brush from "../assets/brush.png";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const img = document.createElement("img");
img.src = bgimg;

const bdy = document.getElementById("content");
const bg = document.getElementById("body");

const btns = document.querySelectorAll(".buttons");
btns.forEach(element => {
    element.onclick = ()=> switchTab(element);
});

highLight(btns[0]);

console.log(btns[0])

bdy.appendChild(home);
bg.appendChild(img);

function switchTab(a){  
    bdy.innerHTML = "";
    btns.forEach(element => {
        removeHighLight(element);
    })
    highLight(a);
    if(a.id === "home"){
        bdy.appendChild(home);
    } else if (a.id === "menu"){
        bdy.appendChild(menu);
    } else if (a.id === "contact"){
        bdy.appendChild(contact);
    }
}

function highLight(a){
    a.style.backgroundImage = `url("${brush}")`;
    a.style.color = "rgb(167, 47, 65)";
}

function removeHighLight(a){
    a.style.backgroundImage = "";
    a.style.color = "";
}