const ContentTypes = document.getElementById('types')
const ContentName = document.getElementsByTagName('h1')[0]
const Contentnumber = document.getElementById('number')
const ContentHeader = document.getElementById('header')
const ContentImg = document.getElementById('img')
const ContentInfoTypes = document.getElementById('types-info')

function getPokemon(){
    return JSON.parse(localStorage.getItem('pokemon'))
}

function addImg(url){
    ContentImg.innerHTML = `<img src="${url}">`
}

function main(){
    let pokemon = getPokemon()
    ContentName.innerText = pokemon.name
    Contentnumber.innerText = '#'+pokemon.number
    ContentHeader.classList.add(pokemon.type)
    addImg(pokemon.photo)

    let i = 0
    for (type of pokemon.types) {
        ContentTypes.innerHTML += `<p class='${type}'>${type}</p>`
        if (i == 0)
            ContentInfoTypes.innerHTML += `<div class="linha types"><span class="opacity">Principal</span><span class='color-${type}'>${type}</span></div>`
        else
            ContentInfoTypes.innerHTML += `<div class="linha types"><span class="opacity">Outros</span><span class='color-${type}'>${type}</span></div>`
        i++
    }
    
}

main()