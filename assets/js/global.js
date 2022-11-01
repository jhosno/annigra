//wow
AOS.init();
//loader
window.addEventListener('load', () => {
    this.document.getElementById('loader').classList.toggle('loader-out')
})

//back to up btn
let backToUpBtn = document.getElementById('__anni_-back-to-top');

window.onscroll = () => {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToUpBtn.style.display = "block";

        backToUpBtn.classList.add('on')
        backToUpBtn.classList.add('.__anni_-invert')
        backToUpBtn.classList.remove('off')
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
let open_side_menu_mobile = this.document.getElementById('__anni_menu_opener_mobile');
let close_side_menu = this.document.getElementById('__anni_close_side_menu');
let side_menu = this.document.getElementById('__anni_side_menu_area');
let menu_icon_has_hover = this.document.getElementsByClassName('__anni_icon_has_hover');

close_side_menu.addEventListener('click', () => {
    side_menu.style.display = "none";
    side_menu.style.visibility = "hidden";
});


let menu_icon = this.document.getElementsByClassName('st0')
let menu_icon3 = this.document.querySelector('.__anni_menu_opner_icon .st0:nth-child(1)')

open_side_menu_mobile.addEventListener('click', () => {
    side_menu.style.display = "block";
    side_menu.style.visibility = "visible";
    menu_icon[3].setAttributeNS = ('height', '23')
    menu_icon[3].setAttribute = ('height', '23')
    menu_icon3.setAttribute = ('height', '23')
    menu_icon3.setAttributeNS = ('fill', 'red')

});
open_side_menu.addEventListener('click', () => {
    side_menu.style.display = "block";
    side_menu.style.visibility = "visible";
});


open_side_menu.addEventListener("mouseout", e => {
    console.log("mouse over test!");
    menu_icon[0].style.fill = "#FF0000";
    menu_icon[0].style.height = "23";

    menu_icon[3].setAttributeNS = ('height', '23')
    menu_icon[3].setAttribute = ('height', '23')
}, false);



const dropdown_element = document.getElementsByClassName
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

const language_span = document.getElementById('__anni_languaje_span')
const language_option = document.getElementById("__anni_languaje_content");
language_option.addEventListener("click", function (e) {
    // console.log(e.target.id); // log clicked element 
    console.log(e.target.id)
    if (e.target.id != "__anni_languaje_content") {
        language_span.innerHTML = e.target.id
    }

});


/*
function(e) {
  e.preventDefault(), t.hasClass("mkdf-fm-opened") ? (t.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-expanding-menu-opened")) : (t.addClass("mkdf-fm-opened"), mkdf.body.addClass("mkdf-expanding-menu-opened"), a(document).keyup(function(e) {
    27 == e.keyCode && (t.removeClass("mkdf-fm-opened"), mkdf.body.removeClass("mkdf-expanding-menu-opened"))
  }))
}
*/