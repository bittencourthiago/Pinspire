document.getElementById('add-image-page').style.transitionDuration="0.45s"; //definindo o tempo de transição da página de login

function gerarBotoesTags(){
    let div = document.querySelector('.tags-add')
    let tags = ['Tecnologia', 'Comida', 'Arte', 'Esporte', 'Natureza', 'Jogos', 'Infantil', 'Musica'] 

    tags.forEach(item=>{
        let minusculo = item.toLowerCase()

        div.innerHTML+=`
        
            <label id="label-${minusculo}" for="${minusculo}" select>${item}</label>
            <input type="checkbox" name="${minusculo}" id="${minusculo}" style="display: none;" onclick="activateCheck(this.id)">
            
        `
    })

}

function openAddImage() {
    let divLogin = document.getElementById('add-image-page');
    divLogin.classList.add('add-imageNew');

    let symbol = document.querySelector('.plus-icon')
    let retangle = document.querySelector('.select-image')

    retangle.style.background = '#ffffff49'


    symbol.setAttribute('src', './assets/images/plus.png')
    symbol.style.height = '30%' 
    
    setTimeout(function(){
        divLogin.style.display="block" // tirando o display none
    
        setTimeout(function(){
    
            divLogin.style.opacity = "1" //mostrando a página de login
    
        }, 400)
    
    }, 0);
}
function closeAddImage() {
    let addImage = document.getElementById('add-image-page');

    setTimeout(function(){

        addImage.style.opacity = "0" //fazendo login ficar invisível
        setTimeout(function(){
    
            addImage.style.display="none" //deixando login com display none
    
        }, 400)
    }, 100);

}

function confirmAdd(){

    let retangle = document.querySelector('.select-image')
    let symbol = document.querySelector('.plus-icon')

    symbol.setAttribute('src', './assets/images/check.svg')
    symbol.style.height = '50%' 


    retangle.style.background = 'linear-gradient(317deg, rgba(91, 228, 111, 1) 0%, rgba(40, 223, 196, 1) 100%)'

}


function activateCheck(id) {

    let checkButton = document.getElementById(id)
    let label = document.getElementById(`label-${id}`)

    checkButton.checked == true? 
    label.style.background = 'linear-gradient(125deg, #e247ce -50%, #f8f35b 110%)'
    : label.style.background = '#444444'

}

gerarBotoesTags()