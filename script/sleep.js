let button_sleep_left = document.getElementsByClassName(`scroll_left`)[0];
let button_sleep_right = document.getElementsByClassName(`scroll_right`)[0];
let conntent_block_width = document.getElementsByClassName(`popular__item`)[0].offsetWidth
let popular = document.getElementsByClassName(`popular`)[0];
const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)); // проверка сенсорный ли экран устройства
let re_sleep = () => {
    (popular.scrollLeft <= conntent_block_width / 2) ? button_sleep_left.style.display = `none`: button_sleep_left.style.display = `block`;
    (popular.scrollWidth - popular.offsetWidth < popular.scrollLeft + conntent_block_width / 2) ? button_sleep_right.style.display = `none`: button_sleep_right.style.display = `block`;
}
window.addEventListener("click", e => {
    if (e.target.classList[0] === `scroll_right`) {
        (popular.scrollWidth - popular.offsetWidth < popular.scrollLeft + conntent_block_width) ? button_sleep_right.style.display = `none`: button_sleep_left.style.display = `block`;
        popular.scrollBy({ left: conntent_block_width, behavior: 'smooth' });
    }
    if (e.target.classList[0] === `scroll_left`) {
        (popular.scrollLeft <= conntent_block_width) ? button_sleep_left.style.display = `none`: button_sleep_right.style.display = `block`;
        popular.scrollBy({ left: -conntent_block_width, behavior: 'smooth' });
    }

});

popular.addEventListener("scroll", (e) => {
    !isTouch ? re_sleep() : false;
});