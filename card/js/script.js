document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

let wrapper = document.createElement("div");
wrapper.id = "wrapper";
// wrapper.style.margin = "0 auto";
wrapper.style.marginLeft = "570px"
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.marginTop = "50px";


let card = document.createElement("div");
card.className = "card";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.padding = "20px 20px";
card.style.borderRadius = "20px";
card.style.boxShadow = "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";


let imgTop = document.createElement("IMG");
imgTop.className = "img-top";
imgTop.src = "./images/image-equilibrium.jpg";
imgTop.style.maxWidth = "300px";
imgTop.style.borderRadius = "10px";
imgTop.style.marginBottom = "3px";


let title = document.createElement("h3");
title.className = "card-title";
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.marginBottom = "17px";


let text = document.createElement("p");
text.className = "card-text";
text.innerText = "Our Equilibrium collection promotes balance and calm";
text.style.fontSize = "300";
text.style.marginBottom = "17px";
text.style.color = "hsl(215, 51%, 70%)";
text.style.margin = "0";
text.style.maxWidth = "300px";
text.style.lineHeight = "25px";
text.style.marginBottom = "17px";


let div = document.createElement("div");
div.style.display = "flex";
div.style.justifyContent = "space-between";

let info = document.createElement("div");
info.className = "info";

let icon = document.createElement("img");
icon.className = "icon";
icon.src = "./images/icon-ethereum.svg";
icon.style.marginRight = "5px";

let iconText = document.createElement("p");
iconText.className = "icon-text";
iconText.innerText = "0.041 ETH";
iconText.style.fontWeight = "bold";
iconText.style.marginTop = "17px;";
iconText.style.color = "hsl(0, 0%, 100%)";
iconText.style.display = "inline-block"

let time = document.createElement("div");
time.className = "time";
time.style.display = "flex";
time.style.alignItems = "center";
time.style.marginBottom = "17px";

let imgTime = document.createElement("img");
imgTime.className = "time-img";
imgTime.style.marginRight = "5px";
imgTime.src = "./images/icon-clock.svg";

let timeTxt = document.createElement("p");
timeTxt.className = "time-text";
timeTxt.style.color = "hsl(215, 51%, 70%)";
timeTxt.innerText = "3 days left";
timeTxt.style.marginTop = "19px"

let line = document.createElement("hr");
line.style.borderColor = "hsl(215, 32%, 27%)";
line.style.marginTop = "-8px";


let avatar = document.createElement("div");
avatar.className = "avatar";
avatar.style.alignItems = "center";
avatar.style.marginTop = "22px";
avatar.style.display = "flex";


let avatarImg = document.createElement("img");
avatarImg.className = "avatar-img";
avatarImg.src = "./images/image-avatar.png";
avatarImg.style.maxWidth = "35px";
avatarImg.style.marginRight = "15px";
avatarImg.style.border = "2px solid white";
avatarImg.style.borderRadius = "50%";


let avatarTxt = document.createElement("span");
avatarTxt.className = "avatar-text";
avatarTxt.innerText = "Creation of"
avatarTxt.style.fontSize = "17px"
avatarTxt.style.color = "hsl(215, 51%, 70%)";
avatarTxt.style.textAlign = "center";


let userName = document.createElement("span");
userName.className = "user-name";
userName.style.color = "white";
userName.innerText = " Jules Wyvern";

document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(imgTop);
card.appendChild(title);
card.appendChild(text);
card.appendChild(div);
div.appendChild(info);
info.appendChild(icon);
info.appendChild(iconText);
div.appendChild(time);
time.appendChild(imgTime);
time.appendChild(timeTxt);
card.appendChild(line);
card.appendChild(avatar);
avatar.appendChild(avatarImg);
avatar.appendChild(avatarTxt);
avatarTxt.appendChild(userName);

alert("Я оцениваю свою работу на 110 баллов")