document.addEventListener("DOMContentLoaded", () => {
    let currentHour = new Date().getHours()
    let greeting = this.document.getElementById('greeting')
    let greeting_bg = this.document.getElementById('__home_section')
    console.log(currentHour);
    if (currentHour <= 12) {
        console.log('morning')
        greeting.innerHTML = 'good morning'
        greeting_bg.style.background = "url('/assets/img/Morning.jpg') no-repeat center center"
        greeting_bg.style.backgroundSize = "cover"

    }
    if (currentHour <= 18 && currentHour > 12) {
        console.log('afternoon')
        greeting.innerHTML = 'good afternoon'
        greeting_bg.style.background = "url('/assets/img/Afternoon.png') no-repeat center center"
        greeting_bg.style.backgroundSize = "cover"

    }
    if (currentHour > 18 && currentHour <= 23) {
        console.log('evening')
        greeting.innerHTML = 'good evening'
        greeting_bg.style.background = "url('/assets/img/Evening.jpg') no-repeat center center"
        greeting_bg.style.backgroundSize = "cover"
        



    }

});

let toggle_faq = this.document.getElementsByClassName('__anni_faq_acc')
open_side_menu.addEventListener("mouseover", e => {
    console.log("mouse over test!");
    
}, false);




function validateForm (e){
    e.preventDefault()
    
    let submit_form = this.document.getElementById('contact_submit')
    let contact_name = this.document.forms['contact_form']['name'].value;
    let contact_email = this.document.forms['contact_form']['email'].value;
    let contact_tlf = this.document.getElementById('tel')
    let contact_descript = this.document.getElementById('descrip')
    console.log(contact_name)
    return false;   
}