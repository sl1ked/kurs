
let dropdownBtn=document.querySelector("footer"); // document.getElementsByClassName('nav');
dropdownBtn.addEventListener("click",e=>{
    if (e.target.classList[0]==="header"){
        e.target.children[0].classList.toggle("reverse")
    drop=e.target.parentElement.children[1];
    drop.classList.toggle("show-footer-nav")}
    if  (e.target.parentElement.classList[0]==="header"){ 
        e.target.classList.toggle('reverse')
        drop=e.target.parentElement.parentElement.children[1];
        drop.classList.toggle("show-footer-nav")}
});