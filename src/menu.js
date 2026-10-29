import ramen from "../assets/SamuraiRamen.png"
import bento from "../assets/CrimsonBento.png"
import gyoza from "../assets/CrimsonGyoza.png"
import yakitori from "../assets/CrimsonYakitori.png"
import matcha from "../assets/SakuraMochi\&Matcha.png"
import sushi from "../assets/SamuraiSushiPlatter.png"

const menu = document.createElement("div");

const title = document.createElement("h1");
title.textContent = "Kondate";

const Items = {
    "Crimson Bento":bento,
    "Samurai Ramen":ramen, 
    "Crimson Gyoza":yakitori, 
    "Samurai Sushi":matcha, 
    "Crimson Yakitori":sushi,
    "Sakura Mochi & Matcha":gyoza
}

const divItems = document.createElement("div");
divItems.id = 'menuItems';

for(const key in Items) {
    const item = document.createElement("div");
    item.id = "item";

    const itemImg = document.createElement("img");
    itemImg.src = Items[key];
    itemImg.style.width = '5em';
    itemImg.style.height = '5em';

    const itemTag = document.createElement("p");
    itemTag.textContent = key;

    item.appendChild(itemImg);
    item.appendChild(itemTag);

    divItems.appendChild(item);
}

menu.appendChild(title);
menu.appendChild(divItems);

export default menu;