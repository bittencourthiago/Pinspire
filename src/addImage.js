document.getElementById('add-image-page').style.transitionDuration="0.45s"; //definindo o tempo de transição da página de login

function openAddImage() {
    let divLogin = document.getElementById('add-image-page');
    divLogin.classList.add('add-imageNew');
    
    setTimeout(function(){
        divLogin.style.display="block" // tirando o display none
    
        setTimeout(function(){
    
            divLogin.style.opacity = "1" //mostrando a página de login
    
        }, 400)
    
    }, 0);
}
function closeAddImage() {
    let divLogin = document.getElementById('add-image-page');

    setTimeout(function(){

        divLogin.style.opacity = "0" //fazendo login ficar invisível
        setTimeout(function(){
    
            divLogin.style.display="none" //deixando login com display none
    
        }, 400)
    }, 100);
}
