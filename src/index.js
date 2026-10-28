import "./styles.css";
import img from "./bg.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const bdy = document.getElementById("content");

const bg = document.getElementById("body");
bg.style.margin = '0px';

const btns = document.querySelectorAll(".buttons");
btns.forEach(element => {
    element.onclick = ()=> switchTab(element);
});

bdy.appendChild(home);
bg.appendChild(img);

function switchTab(a){
    bdy.innerHTML = "";
    console.log(a.id)
    if(a.id === "home"){
        
        bdy.appendChild(home);
    } else if (a.id === "menu"){
        bdy.appendChild(menu);
    } else if (a.id === "contact"){
        bdy.appendChild(contact);
    }
}