let dataBanerMoble = [{
    image_src: `./img/baners/164-1.gif`,
}, {
    image_src: `./img/baners/164-2.gif`,
}, {
    image_src: `./img/baners/164-3.png`,
}];

// Выше лежит перечень всех необходимых элементов( желательно не делать их больше 6, иначе изображение будет вылетать за пределы )

// основные элементы
let Mobile = document.getElementById('baner-mobile');

let iBanerMobile = 0;
Mobile.style.backgroundImage = `url(${dataBanerMoble[iBanerMobile].image_src})`;
Mobile.style.height=(`calc(${Mobile.offsetWidth/164} * `+banerHeight(iBanerMobile,dataBanerMoble)+')');
setInterval(() => {
    iBanerMobile = iIncreases(iBanerMobile, dataBanerMoble);
    Mobile.style.backgroundImage = `url(${dataBanerMoble[iBanerMobile].image_src})`;
    Mobile.style.height=(`calc(${Mobile.offsetWidth/164} * `+banerHeight(iBanerMobile,dataBanerMoble)+')'); 

}, 4e3);