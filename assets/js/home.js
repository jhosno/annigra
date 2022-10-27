document.addEventListener("DOMContentLoaded", () => {
    let currentHour = new Date().getHours()
    console.log(currentHour);
    if(currentHour <= 12){
        console.log('morning')
        this.document.getElementById('greeting').innerHTML='good morning'
        
    }
    if(currentHour <= 18 && currentHour > 12){
        console.log('afternoon')
        this.document.getElementById('greeting').innerHTML='good afternoon'

    }
    if(currentHour > 18 && currentHour <= 23){
        console.log('evening')
        this.document.getElementById('greeting').innerHTML='good evening'

    }
  
  });