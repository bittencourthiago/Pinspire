function openLogin() {
    let divLogin = document.getElementById('loginPage');
    document.querySelector('body').style.overflow="hidden";
    divLogin.classList.add('loginNew');
}
function closeLogin() {
    let divLogin = document.getElementById('loginPage');
    document.querySelector('body').style.overflow="auto";
    divLogin.classList.remove('loginNew');
}