const displayMobile = () => { return matchMedia('(max-width: 992px)').matches };
let NavbarItems = document.getElementById('navbarSupportedContent');
let categotialBox = document.getElementsByClassName('categorial-main')[0];
let dialogs = document.getElementsByClassName('dialog')[0];
let categorialLimit = document.getElementsByClassName('container-categorial')[0];
let closeButton = document.getElementsByClassName('closes')[0];
let body = document.querySelector('body')
let dialog = document.getElementsByClassName('dialog')[0];
let web = document.getElementsByClassName('web-dev')[0];
let articles = document.getElementsByClassName('articles')[0];
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
    categotialBox.style.marginLeft = `${(window.screen.availWidth-categotialBox.children[0].offsetWidth )/2}px`;
}

let menuFlag = makerMenuFlag();
document.getElementById('button-drop-menu').addEventListener('click', () => {
    showMenu();
});
categotialBox.addEventListener('click', (element) => {
    startSum = -(categotialBox.children[0]).offsetWidth / 2
    for (index of categotialBox.children) {
        if (index.className == element.target.className) {
            moveleft(startSum + index.offsetWidth / 2, categorialLimit)
        }
        startSum += index.offsetWidth + 20;
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
let sumAllWidth = (object) => {
    sum = -object.children[0].offsetWidth / 2;
    for (index of object.children) {
        sum += index.offsetWidth + 20
    }
    return sum -= object.children[object.children.length - 1].offsetWidth / 2 + 20;
}
categorialLimit.addEventListener('scroll', () => {
    chooseCategorial(checkBlockScrollfocus(categorialLimit.scrollLeft, categotialBox));
    document.getElementsByClassName('all')[0].innerText = `Все ${document.getElementsByClassName(checkBlockScrollfocus(categorialLimit.scrollLeft, categotialBox))[0].innerText}`;
    (categorialLimit.scrollLeft > sumAllWidth(categotialBox)) ? categorialLimit.scrollLeft = sumAllWidth(categotialBox): false;

});
closeButton.addEventListener('click', () => {
    dialog.style.display = menuFlag() ? 'block' : 'none';
    body.style.overflowY = 'scroll';
})