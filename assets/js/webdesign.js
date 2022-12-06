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

///////////*********************************************** */
// init controller
var controller = new ScrollMagic.Controller();
// build scenes

// build scenes
const $infograph = document.getElementsByClassName('infograph')
const $infographHeight = $infograph[0].offsetHeight

let revealElements = document.getElementsByClassName("infograph_section");
let val;
for (val = 0; val < revealElements.length; val++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: revealElements[val], // y value not modified, so we can use element as trigger as well
            offset: 50, // start a little later
            triggerHook: 0.9,
        })
        .setClassToggle(revealElements[val], "js-animate") // add class toggle
 
        .addTo(controller);
}

///////////*********************************************** */

let rotate = (degrees, elem) => {
    elem.style.cssText += '-webkit-transform: rotate(' + degrees + 'deg);-moz-transform: rotate(' + degrees + ' deg);   -ms-transform: rotate(' + degrees + 'deg);transform: rotate(' + degrees + 'deg);'

}



//icon animation 
let animateInfograph = (offSet, $infographHeight, $infograph, $icon_container) => {

    //Prep variables

    /////Prep variables images 
    let startPos = $image[0].offsetHeight;
    /////Prep variables sections
    let $sectionHeight = $sections[$sections.length - 1].offsetHeight;

    //get top offset 
    let scrollTop = document.documentElement.scrollTop
    let positionInfo = $infograph[0].offsetTop  
    
    //rotate icons
    rotate(360 - (scrollTop - startPos) / 2, $image[0]);
    
    //Sticky if within infographic
    if (scrollTop >= startPos - offSet) {
        let top = scrollTop - $infographHeight
        $image_container[0].style.top = `${top}px`
    }
    
    
    let sectionPosition = $sections[0].offsetTop;

    console.log("1 - " + ($sections[0].offsetTop - $sectionHeight))
    console.log("2 - " + ($sections[1].offsetTop - ($sectionHeight/2)))
    console.log("3 - " + ($sections[2].offsetTop - ($sectionHeight/2)))
    console.log("4 - " + ($sections[3].offsetTop - ($sectionHeight/2)))
    console.log("5 - " + ($sections[4].offsetTop - ($sectionHeight/2)))
  
    console.error(scrollTop)


    //icons throught sections
    if (scrollTop < positionInfo + $sectionHeight ) {
        $image[0].classList.remove('s-v2')
        $image[0].classList.add('s-v1')
        $($number).html('1');
    }
     if(scrollTop >= ($sections[0].offsetTop - ($sectionHeight/2)) ){
        $image[0].classList.remove('s-v1')
        $image[0].classList.remove('s-v3')
        $image[0].classList.add('s-v2')
        $($number).html('2');
    }
     if(scrollTop >= ($sections[1].offsetTop - ($sectionHeight/2)) ){
        $image[0].classList.remove('s-v2')
        $image[0].classList.remove('s-v4')
        $image[0].classList.add('s-v3')
        $($number).html('3');
    }
     if(scrollTop >= ($sections[2].offsetTop - ($sectionHeight/2)) ){
        $image[0].classList.remove('s-v3')
        $image[0].classList.remove('s-v5')
        $image[0].classList.add('s-v4')
        $($number).html('4');
    }
     if(scrollTop >= ($sections[3].offsetTop - ($sectionHeight/2)) ){
        $image[0].classList.remove('s-v4')
        $image[0].classList.add('s-v5')
        $($number).html('5');
    }
}


//varibles
const offSet = 75
const $image = document.getElementsByClassName('infograph_img')
const $image_container = document.getElementsByClassName('infograph_icon')
const $icon_container = document.getElementsByClassName('infograph_iconcontainer')

const $sections = document.getElementsByClassName('infograph_section')
const $number = document.getElementsByClassName('infograph_number')



//Event listener get height to icon
window.addEventListener('load', () => {
    $image[0].style.width = $infographHeight / $sections.length + "px"
    $image[0].style.height = $infographHeight / $sections.length + "px"
    $image_container[0].style.height = $infographHeight / 5 + "px"
})
//Event listener scroll
window.onscroll = () => {
    animateInfograph(offSet, $infographHeight, $infograph, $icon_container)
 
}