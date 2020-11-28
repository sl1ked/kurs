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
categorialLimit.addEventListener('scroll', () => {
    (categorialLimit.scrollLeft < design.offsetWidth) ? dialogs.style.background = `linear-gradient(93.62deg, #24C6DC 2.97%, #514A9D 97.03%)`:
        false;
    (categorialLimit.scrollLeft > design.offsetWidth && categorialLimit.scrollLeft < design.offsetWidth + web.offsetWidth) ? dialogs.style.background = `linear-gradient(93.62deg, #514A9D 5.91%, #F86B6B 97.03%)`:
        false;

    (categorialLimit.scrollLeft > design.offsetWidth + web.offsetWidth && categorialLimit.scrollLeft < design.offsetWidth + web.offsetWidth + ds.offsetWidth) ? dialogs.style.background = `linear-gradient(93.62deg, #F86B6B 2.97%, #FFB443 97.03%)`:
        false;
    (categorialLimit.scrollLeft > design.offsetWidth + web.offsetWidth + ds.offsetWidth / 2) ? categorialLimit.scrollLeft = design.offsetWidth + web.offsetWidth + ds.offsetWidth / 2: false;

})
closeButton.addEventListener('click', () => {
    dialog.style.display = menuFlag() ? 'block' : 'none';
    body.style.overflowY = 'scroll';
})