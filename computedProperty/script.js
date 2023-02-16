var red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBGColor(pink));
let orangeElementColor = getBGColor(orange);

orange.addEventListener('mouseenter', () =>{
    center.style.background = orangeElementColor;
});