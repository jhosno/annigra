//home greetings 
window.addEventListener('load', () => {
    this.document.getElementById('__home_section').classList.toggle('mask-2')
    this.document.getElementById('__home_section').classList.toggle('cd-intro-content')
    this.document.getElementById('__home_section_wrapper').classList.toggle('content-wrapper')

})
//home greetings 
document.addEventListener("DOMContentLoaded", () => {
    let currentHour = new Date().getHours()
    let greeting = this.document.getElementById('greeting')
    let greeting_bg = this.document.getElementById('hero')
    
    if (currentHour <= 12) {
        greeting.innerHTML = 'good morning'
        greeting_bg.style.background = "url('/assets/img/Morning.jpg') top center/ cover no-repeat";
        greeting_bg.style.backgroundSize = "cover";
        greeting_bg.style.backgroundAttachment = "fixed";
    }
    
    if (currentHour <= 18 && currentHour > 12) {    
        
        greeting.innerHTML = 'good afternoon'
        greeting_bg.style.background = "url('/assets/img/Afternoon.jpg') top center/ cover no-repeat"
        greeting_bg.style.backgroundSize = "cover"
        greeting_bg.style.backgroundAttachment = "fixed";
    }
    
    if (currentHour > 18 && currentHour <= 23) {    
        
        console.log('dssd')
        greeting.innerHTML = 'good evening'
        greeting_bg.style.backgroundSize = "cover"
        greeting_bg.style.background = "url('/assets/img/Evening.png') top center/ cover no-repeat"
        greeting_bg.style.backgroundAttachment = "fixed";
    }

});


//Form var

function validateForm(e) {
    e.preventDefault()

    let submit_form = this.document.getElementById('contact_submit')
    let contact_name = this.document.forms['contact_form']['name'].value;
    let contact_email = this.document.forms['contact_form']['email'].value;
    let contact_tlf = this.document.getElementById('tel')
    let contact_descript = this.document.getElementById('descrip')

    return false;
}




function validateForm(e) {
    e.preventDefault()

    let cname = document.forms["contact_form"]["cname"];
    let cemail = document.forms["contact_form"]["cemail"];
    let cdescrip = document.forms["contact_form"]["cdescrip"];
    let ctel = document.forms["contact_form"]["ctel"];
    let alertSuccess = document.getElementById('submit-alert')
    let validations = [isTel(ctel),
        isEmpty(cname),
        isEmpty(cdescrip),
        isEmail(cemail)
    ].every((value) => value ? true : false)
    if (validations) {
        alertSuccess.style.display = 'block'
        setTimeout(
            () => {
                alertSuccess.style.display = 'none'
            }, 3000);
    }
}


function isEmpty(input) {
    let invalid_msg = this.document.getElementsByClassName('invalid-feedback-' + input.name)

    if (input.value.trim() === "") {
        input.classList.add('invalid')
        invalid_msg[0].style.display = 'block'
        return false;

    } else {
        input.classList.remove('invalid')
        invalid_msg[0].style.display = 'none'
        return true;

    }
}



function isEmail(input) {
    let invalid_msg = this.document.getElementsByClassName('invalid-feedback-' + input.name)
    let telf = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let value = input.value

    if (!telf.test(value)) {
        console.log('text')
        input.classList.add('invalid')
        invalid_msg[0].style.display = 'block'
        return false;


    } else {
        input.classList.remove('invalid');
        invalid_msg[0].style.display = 'none'
        return true;

    }
}

function isTel(input) {
    let invalid_msg = this.document.getElementsByClassName('invalid-feedback-' + input.name)
    let phoneno = /^\(?[(]?([0-9]{3})\)\*?[)]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let value = input.value
    if (!phoneno.test(value)) {
        input.classList.add('invalid')
        invalid_msg[0].style.display = 'block'
        return false;

    } else {
        input.classList.remove('invalid')
        invalid_msg[0].style.display = 'none'
        return true;

    }
}