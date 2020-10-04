var tempoGif = 2200; //2200
document.querySelector('body').style.overflow="hidden";
let loading = document.querySelector('#loading')
function allCharge() {
        setTimeout(function(){
            loading.style.opacity = "0"
            setTimeout(function(){
                loading.style.display = "none"
                document.querySelector('body').style.overflow="auto";
            }, 500);
        }, tempoGif);
}