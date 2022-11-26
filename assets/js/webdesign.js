function validateForm(e) {
    e.preventDefault()

    let cname = document.forms["contact_form"]["cname"];
    let cemail = document.forms["contact_form"]["cemail"];
    let cdescrip = document.forms["contact_form"]["cdescrip"];
    let csubject = document.forms["contact_form"]["csubject"];
    let alertSuccess = document.getElementById('submit-alert')
    let validations = [
        isEmpty(cname),
        isEmpty(csubject),
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