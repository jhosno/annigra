document.addEventListener("DOMContentLoaded", () => {
    let currentHour = new Date().getHours()
    let greeting = this.document.getElementById('greeting')
    let greeting_bg = this.document.getElementById('__home_section')
    console.log(currentHour);
    if (currentHour <= 12) {
        console.log('morning')
        greeting.innerHTML = 'good morning'
        greeting_bg.style.background = "url('/assets/img/day.jpg')"
        
    }
    if (currentHour <= 18 && currentHour > 12) {
        console.log('afternoon')
        greeting.innerHTML = 'good afternoon'
        greeting_bg.style.background = "url('/assets/img/Evening.png')"
        
    }
    if (currentHour > 18 && currentHour <= 23) {
        console.log('evening')
        greeting.innerHTML = 'good evening'
        greeting_bg.style.background = "url('/assets/img/night.jpg')"

    }

});