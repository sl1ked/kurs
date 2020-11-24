let button_sleep_left = document.getElementsByClassName(`scroll_left`)[0];
let button_sleep_right = document.getElementsByClassName(`scroll_right`)[0];
let conntent_block_width = document.getElementsByClassName(`popular__item`)[0].offsetWidth
let StorageBlockSleep = document.getElementsByClassName(`popular`)[0];
const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)); // проверка сенсорный ли экран устройства
let ifGoToEndScroll = (object, limitForScroll) => {
    return (object.scrollWidth - object.offsetWidth < object.scrollLeft + limitForScroll)
}
let ifGoToStartScroll = (object, limitForScroll) => {
    return (object.scrollLeft <= limitForScroll)
}
let hiddenSleepButton = (condition, object) => {
    condition ? object.style.display = `none` : object.style.display = `block`;
}
let moveBy = (value, object) => {
    object.scrollBy({ left: value, behavior: 'smooth' })
}
let re_sleep = () => {
    hiddenSleepButton(ifGoToStartScroll(StorageBlockSleep, conntent_block_width / 2), button_sleep_left)
    hiddenSleepButton(ifGoToEndScroll(StorageBlockSleep, conntent_block_width / 2), button_sleep_right)
}
let searchClassName = (className, object) => {
    return ~(object.target.classList.value.indexOf(className))
}

window.addEventListener("click", e => {
    if (searchClassName('scroll_right', e) || searchClassName('scroll_left', e)) {
        if (searchClassName('right', e)) { moveBy(conntent_block_width, StorageBlockSleep) };
        if (searchClassName('left', e)) { moveBy(-conntent_block_width, StorageBlockSleep) }
    }
});

StorageBlockSleep.addEventListener("scroll", (e) => {
    !isTouch ? re_sleep() : false;
});