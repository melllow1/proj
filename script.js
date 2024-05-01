const myHeading = document.getElementById('headingjp');
    myHeading.style.backgroundImage = "url('imgs/redcircle.png')";
    myHeading.style.backgroundSize = "contain"; 
    myHeading.style.backgroundRepeat = "no-repeat"
    myHeading.style.backgroundPosition = "center"; 
function switchdark(){
    var theme = document.getElementById('stylesheet');
    if(stylesheet.getAttribute('href') == 'CSS/style.css'){
        stylesheet.setAttribute('href','CSS/style2.css');
    }else{
        stylesheet.setAttribute('href','CSS/style.css');
    }
}
