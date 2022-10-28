//loader
window.addEventListener('load', () => {
    this.document.getElementById('loader').classList.toggle('loader-out')
})

//back to up btn
let backToUpBtn = document.getElementById('__btn-back-to-top');

window.onscroll = () => {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToUpBtn.style.display = "block";
    } else {
        backToUpBtn.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//form validation

let contact_name = this.document.getElementById('__contact_form_name')
let contact_tel = this.document.getElementById('__contact_form_telephone')
let contact_email = this.document.getElementById('__contact_form_email')

//menu function 
let open_side_menu = this.document.getElementById('__anni_menu_opener');
let close_side_menu = this.document.getElementById('__anni_close_side_menu');
let side_menu = this.document.getElementById('__anni_side_menu_area');
let menu_icon_has_hover = this.document.getElementsByClassName('__anni_icon_has_hover');
close_side_menu.addEventListener('click', () => {
    side_menu.style.display = "none";
    side_menu.style.visibility = "hidden";
    console.log('hode')

});
open_side_menu.addEventListener('click', () => {
    side_menu.style.display = "block";
    side_menu.style.visibility = "visible";
    console.log('visible')
});

open_side_menu.addEventListener("mouseover", e => {
    console.log("mouse over test!");
    open_side_menu
}, false);