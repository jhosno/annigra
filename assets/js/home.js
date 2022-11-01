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
        greeting_bg.style.background = "url('/assets/img/Afternoon.jpg') no-repeat center center"
        greeting_bg.style.backgroundSize = "cover"

    }
    if (currentHour > 18 && currentHour <= 23) {
        console.log('evening')
        greeting.innerHTML = 'good evening'
        greeting_bg.style.background = "url('/assets/img/Evening.png') no-repeat center center"
        greeting_bg.style.backgroundSize = "cover"




    }

});




function validateForm(e) {
    e.preventDefault()

    let submit_form = this.document.getElementById('contact_submit')
    let contact_name = this.document.forms['contact_form']['name'].value;
    let contact_email = this.document.forms['contact_form']['email'].value;
    let contact_tlf = this.document.getElementById('tel')
    let contact_descript = this.document.getElementById('descrip')
    console.log(contact_name)
    return false;
}
/* 
const collapseElementBtns = document.querySelectorAll('.__anni_faq_btn')
const collapseElementList = document.querySelectorAll('.collapse')

collapseElementBtns.forEach((element, index) => {

    collapseElementBtns[index].addEventListener('click', () => {

        if (collapseElementList[index].classList.contains("collapsing")) {
       console.log('test')
       collapseElementList[index].classList.add("collapse");
       collapseElementList[index].classList.remove("collapsing");
       collapseElementList[index].classList.remove("show");
        }
    })
}) */

function validateForm() {
    let cname = document.forms["contact_form"]["cname"].value;
    let cemail = document.forms["contact_form"]["cemail"].value;
    let cdescrip = document.forms["contact_form"]["cdescrip"].value;
    let ctel = document.forms["contact_form"]["ctel"].value;
    values =  [
        cname,
        cemail,
        cdescrip,
        ctel
    ].every(isEmpty)

  }
  function isEmpty(input){
    if (input.trim() === "") {
        alert("must be input something");
        input.focus();
        return false;
  }
}
function isEmail(input){
    if (input.trim() === "") {
        alert("must be input something");
        input.focus();
        return false;
  }
}