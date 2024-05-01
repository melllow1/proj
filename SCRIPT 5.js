function toggleStylesheet(){
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'style.css'){
        stylesheet.setAttribute('href', 'style2.css');
    } else{
        stylesheet.setAttribute('href', 'style.css');
    }

}