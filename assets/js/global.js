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

});
open_side_menu.addEventListener('click', () => {
    side_menu.style.display = "block";
    side_menu.style.visibility = "visible";
});






const dropdown_element = document.getElementsByClassName
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

const language_obj = document.getElementsByClassName('__anni_lenguage_dropdown_option')
const language_span = document.getElementById('__anni_languaje_span')
const language_option = document.getElementById("__anni_languaje_content");
/////asdasd

let i;

for (i = 0; i < language_obj.length; i++) {
    language_obj[i].addEventListener("click", function() {
      
    console.log('asdsdsad')
    console.log(language_obj)
    language_obj.addEventListener("click", function (e) {
        console.log('asdasd')
    })
  });
}
////
language_option.addEventListener("click", function (e) {
    // console.log(e.target.id); // log clicked element 
    console.log(e.target.id)
    if (e.target.id != "__anni_languaje_content") {
        language_span.innerHTML = e.target.id
    }

});


