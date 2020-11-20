let data = [{
    image_src: `../img/carusel/1.png`,
    header: `Что показали на Adobe MAX 2020 ?`,
    content: `llustrator для iPad, совместную работу в XD и трансформацию портрета в Photoshop`
}, {
    image_src: `../img/carusel/2.png`,
    header: `Что такое доброта доброта это когда?`,
    content: `надеюсь там будет смешная шутка ради моего самочувствия и благополучия пишу тестовый текст вместо рыба-текста`
}, {
    image_src: `../img/carusel/3.jpg`,
    header: `Что такое доброта доброта это когда?`,
    content: `надеюсь там будет смешная шутка ради моего самочуия и благополучия пишу тестовый текст вместо рыба-текста`
}, {
    image_src: `../img/carusel/4.png`,
    header: `Что такое ротрота это когда?`,
    content: `надеюсь там будет смешная шутка ради моего самочувства-текста`
}];
// Выше лежит перечень всех необходимых элементов( желательно не делать их больше 6, иначе будет вылетать за пределы изображение)

// основные элементы
let image_carusel = document.getElementsByClassName(`image-carusel`)[0];
let circles = document.getElementsByClassName(`circles`)[0];
let header_carusel = document.querySelector(`.carusel>h3`);
let content_carusel = document.querySelector(`.carusel>p`);

// зацикленное увеличениие i на единицу
let iUp = () => {
    return i = ++i % data.length;
}
let render_circle = () => { // добавляем на страницу нужное число кругов индикаторов
    for (i in data) {
        circles.innerHTML += `<div class='circle cl-${i}'></div>`;
    }
}
let circle = document.getElementsByClassName(`circle`);
let clear = () => {
    // убираем от всех кругов класс выбранного круга
    for (let index = 0; index < circle.length; index++) {
        circle[index].classList.remove(`focus`)
    }
}
let render = (index) => {
    clear();
    (document.getElementsByClassName(`cl-${index}`)[0]).classList.add(`focus`);
    setTimeout(() => {
        // отрисовываем контент
        image_carusel.style.backgroundImage = `url(${data[index].image_src})`;
        header_carusel.innerText = `${data[index].header}`;
        content_carusel.innerText = `${data[index].content}`;
    }, 700); // задержка чтобы индикатор успел перейти
}
circles.addEventListener("click", (e) => {
    // слушаем когда появится клик по кругам- индикаторам и меняем контент по номеру выбранного круга
    if (e.target.classList[0] === 'circle') {
        i = parseInt(e.target.classList[1].slice(-1))
        render(i);
    }
});
let i = 0;
render_circle();
render(i);
setInterval(() => {
    render(i)
    iUp();
}, 2000);