function mainImagesGen(){
    let feed = document.querySelector('div.feed')

    let imagens = [
        
        {path : './assets/images/foto1.jpg', tags:['tempo','números', 'hora', 'tecnologia']},
        {path : './assets/images/foto2.jpg', tags:['tempo','números']},
        {path : './assets/images/foto3.jpg', tags:['tempo','números', 'hora', 'tecnologia']},
        {path : './assets/images/foto4.jpg', tags:['natureza','paisagem']},
        {path : './assets/images/foto5.jpg', tags:['viagem','arte']},
        {path : './assets/images/foto6.jpg', tags:['tecnologia','ciência']},
        {path : './assets/images/foto7.jpg', tags:['comida','natureza']},
        {path : './assets/images/foto8.jpg', tags:['esporte','aventura']},

    ]

    imagens.forEach(item=>{

        let elementosP = ''

        item.tags.forEach(tag =>{
            elementosP += `<p>${tag}</p>`
        })

        feed.innerHTML += `
            
            <div>
                <img src="${item.path}" alt="foto${item}">
                <button class="download">Baixar</button><br>
                <div class="tags">
                    ${elementosP}
                    
                </div>
                <hr class="feed-separator">
            </div>

        `    
})
}
function noImage() {

    let feed = document.querySelector('div.feed')

    feed.setAttribute('class', 'newFeed')

    //let newDiv = feed.appendChild('div')

    feed.innerHTML = `
        <div class="not-found">

            <img src="./assets/images/robot.png">
            
            <h3>Desculpe</h3>
            <h4>não encontramos nada !</h4>
            
        </div>


    `

}

function checkFeed() {
   let hasImage = document.querySelector('.feed img')
    
   hasImage == null && noImage() 
   
}