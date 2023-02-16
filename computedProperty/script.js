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
// let orangeElementColor = getBGColor(orange);

// orange.addEventListener('mouseenter', () =>{
//     center.style.background = orangeElementColor;
// });

const magicColorPick = (element, color) =>{
    return element.addEventListener('mouseenter', () =>{
        center.style.background = color;
    });
};

magicColorPick(red, getBGColor(red));
magicColorPick(cyan, getBGColor(cyan));
magicColorPick(violet, getBGColor(violet));
magicColorPick(orange, getBGColor(orange));
magicColorPick(pink, getBGColor(pink));

// extend to a disco music player using js