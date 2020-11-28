const displayMobile = () => { return matchMedia('(max-width: 992px)').matches };
let NavbarItems = document.getElementById('navbarSupportedContent');
let categotialBox = document.getElementsByClassName('categorial-main')[0];
let dialogs = document.getElementsByClassName('dialog')[0];
let categorialLimit = document.getElementsByClassName('container-categorial')[0];
let closeButton = document.getElementsByClassName('closes')[0];
let body = document.querySelector('body')
let dialog = document.getElementsByClassName('dialog')[0];
let web = document.getElementsByClassName('web-dev')[0];
let design = document.getElementsByClassName('design')[0];
let ds = document.getElementsByClassName('data')[0];
displayMobile() ? NavbarItems.innerHTML = '' : false;

let makerMenuFlag = () => {
    let displayMenuFlag = false;
    return modificationMenuFlag = () => {
        return displayMenuFlag = !displayMenuFlag
    }
}
var moveleft = (value, object) => {
    object.scrollTo({
        left: value,
        behavior: "smooth",
    });
}

let showMenu = () => {
    dialog.style.display = menuFlag() ? 'block' : 'none';
    body.style.overflowY = 'hidden';
    categotialBox.style.marginLeft = `${(window.screen.availWidth-design.offsetWidth)/2}px`;
}

let menuFlag = makerMenuFlag();
document.getElementById('button-drop-menu').addEventListener('click', () => {
    showMenu();
});
categotialBox.addEventListener('click', (element) => {
    if (element.target.classList == 'design') {
        moveleft(0, categorialLimit)
    }
    if (element.target.classList == 'web-dev') {
        moveleft(design.offsetWidth + web.offsetWidth / 2 - 20, categorialLimit);
    }
    if (element.target.classList == 'data') {
        moveleft(design.offsetWidth + web.offsetWidth + ds.offsetWidth / 2,
            categorialLimit);
    }
});
let setWidtScroll = (className, object) => {
    sumScroll = 0;
    for (index of object.children) {
        if (index.className == className) {
            sumScroll += index.offsetWidth / 2
            return sumScroll
        }
        sumScroll += index.offsetWidth + 20;
    }
};
let checkBlockScrollfocus = (scrollvalue, object) => {
    sumWeight = -object.children[0].offsetWidth / 2;
    for (index of object.children) {
        if (scrollvalue <= sumWeight + index.offsetWidth) {
            return index.className
        }
        sumWeight += index.offsetWidth + 20;
    }
}
let chooseCategorial = (elementClassName) => {
    dialog.style.background = `var(--header-gradient-${elementClassName}`;
}
categorialLimit.addEventListener('scroll', () => {
    chooseCategorial(checkBlockScrollfocus(categorialLimit.scrollLeft, categotialBox));
    (categorialLimit.scrollLeft > design.offsetWidth + web.offsetWidth + ds.offsetWidth / 2) ? categorialLimit.scrollLeft = design.offsetWidth + web.offsetWidth + ds.offsetWidth / 2: false;

})
closeButton.addEventListener('click', () => {
    dialog.style.display = menuFlag() ? 'block' : 'none';
    body.style.overflowY = 'scroll';
})