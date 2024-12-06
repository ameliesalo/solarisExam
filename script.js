const sun = document.querySelector('.sun')
const mercury = document.querySelector('.mercury')
const venus = document.querySelector('.venus')
const earth = document.querySelector('.earth')
const mars = document.querySelector('.mars')
const jupiter = document.querySelector('.jupiter')
const saturnus = document.querySelector('.saturnus')
const uranus = document.querySelector('.uranus')
const neptunus = document.querySelector('.neptunus')

const planets = document.querySelector('.planets')
const displayInfo = document.querySelector('.displayInfo')
displayInfo.style.display = 'none'
const halos = document.querySelector('.halos')

let planetName = document.querySelector('.name')
let planetLatinName = document.querySelector('.latin')
let planetDesc = document.querySelector('.info')
let infoList = document.querySelector('.infoList')
let moons = document.querySelector('.moons')

const getKey = (apiType, endpoint) => {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com' + endpoint

    const options = {
        method: apiType
    }

    fetch(url, options).then(res => {
        return res.json()
    }).then(res => {
        getPlanets('GET', '/bodies', res.key)
    })
}

const getPlanets = async (apiType, endpoint, key) => {
    const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com' + endpoint

    const options = {
        method: apiType,
        headers: {
            'x-zocom': key
        }
    }

    const bodiesData = await fetch (url, options)
    const bodiesDataJson = await bodiesData.json()

    console.log(bodiesDataJson)


sun.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[0].name
    planetLatinName.innerText = bodiesDataJson.bodies[0].latinName
    planetDesc.innerText = bodiesDataJson.bodies[0].desc
    infoList.innerHTML = 
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[0].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[0].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[0].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[0].temp.night} C </li> 
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[0].moons[0]}</li></ul> `
})

mercury.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[1].name
    planetLatinName.innerText = bodiesDataJson.bodies[1].latinName
    planetDesc.innerText = bodiesDataJson.bodies[1].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[1].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[1].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[1].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[1].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[1].moons[0]}</li></ul> `
})

venus.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[2].name
    planetLatinName.innerText = bodiesDataJson.bodies[2].latinName
    planetDesc.innerText = bodiesDataJson.bodies[2].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[2].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[2].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[2].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[2].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[2].moons[0]}</li></ul> `
})

earth.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[3].name
    planetLatinName.innerText = bodiesDataJson.bodies[3].latinName
    planetDesc.innerText = bodiesDataJson.bodies[3].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[3].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[3].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[3].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[3].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[3].moons[0]}</li></ul> `
})

mars.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[4].name
    planetLatinName.innerText = bodiesDataJson.bodies[4].latinName
    planetDesc.innerText = bodiesDataJson.bodies[4].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[4].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[4].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[4].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[4].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[4].moons[0, 1]}</li></ul> `
})

jupiter.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[5].name
    planetLatinName.innerText = bodiesDataJson.bodies[5].latinName
    planetDesc.innerText = bodiesDataJson.bodies[5].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[5].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[5].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[5].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[5].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[5].moons.length}</li></ul> `
})

saturnus.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[6].name
    planetLatinName.innerText = bodiesDataJson.bodies[6].latinName
    planetDesc.innerText = bodiesDataJson.bodies[6].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[6].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[6].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[6].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[6].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[6].moons.length}</li></ul> `
})

uranus.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[7].name
    planetLatinName.innerText = bodiesDataJson.bodies[7].latinName
    planetDesc.innerText = bodiesDataJson.bodies[7].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[7].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[7].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[7].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[7].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[7].moons.length}</li></ul> `
})

neptunus.addEventListener('click', () => {
    planets.style.display = 'none'
    displayInfo.style.display = 'grid'

    planetName.innerText = bodiesDataJson.bodies[8].name
    planetLatinName.innerText = bodiesDataJson.bodies[8].latinName
    planetDesc.innerText = bodiesDataJson.bodies[8].desc
    infoList.innerHTML =
    `<ul> 
    <li>OMKRETS: ${bodiesDataJson.bodies[8].circumference} KM </li>
    <li> KM FRÅN SOLEN: ${bodiesDataJson.bodies[8].distance} KM </li>
    <li> MAX TEMP: ${bodiesDataJson.bodies[8].temp.day} C </li>
    <li> MIN TEMP: ${bodiesDataJson.bodies[8].temp.night} C </li>
    </ul>`
    moons.innerHTML = 
    `<ul><li> MÅNAR: ${bodiesDataJson.bodies[8].moons.length}</li></ul> `
})

}

getKey('POST', '/keys')

halos.addEventListener('click', () => {
    displayInfo.style.display = 'none'
    planets.style.display = 'grid'
})







