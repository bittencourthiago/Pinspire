var tempoGif = 0; //2200

document.querySelector('body').style.overflow="hidden";//deixando o body sem navegação
let loading = document.querySelector('#loading')

function allCharge() {
        setTimeout(function(){
            loading.style.opacity = "0"
            setTimeout(function(){
                loading.style.display = "none"// Desaparecendo a tela de carregamento
                document.querySelector('body').style.overflow="auto"; //deixando o body navegável
            }, 500);
        }, tempoGif);
}