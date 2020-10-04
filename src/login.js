document.getElementById('loginPage').style.transitionDuration="0.45s";
function openLogin() {
    let divLogin = document.getElementById('loginPage');
    divLogin.classList.add('loginNew');
    
    setTimeout(function(){
        divLogin.style.display="block"
    
        setTimeout(function(){
    
            divLogin.style.opacity = "1"
    
        }, 400)
    
    }, 0);
}
function closeLogin() {
    let divLogin = document.getElementById('loginPage');

    setTimeout(function(){
        divLogin.style.opacity = "0"
        setTimeout(function(){
    
            divLogin.style.display="none"
    
        }, 400)
    }, 100);
}
