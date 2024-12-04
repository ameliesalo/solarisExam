const sun = document.querySelector('.sun')
const mercury = document.querySelector('.mercury')
const venus = document.querySelector('.venus')
const earth = document.querySelector('.earth')
const mars = document.querySelector('.mars')
const jupiter = document.querySelector('.jupiter')
const saturnus = document.querySelector('.saturnus')
const uranus = document.querySelector('.uranus')
const neptunus = document.querySelector('.neptunus')
const planet = document.querySelector('.planet')

let planetName = document.querySelector('.name')
let latin = document.querySelector('.latin')
let info = document.querySelector('.info')

const bodiesDataJson = []

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
        console.log(bodiesDataJson.bodies[0].name)
        window.location.replace('http://127.0.0.1:5500/solarisExam/solarisExam/planet.html')
        planetName.innerText = bodiesDataJson.bodies[0].name
        latin.innerText = bodiesDataJson.bodies[0].latinName
        info.innerText = bodiesDataJson.bodies[0].desc
    })

    
    
}

getKey('POST', '/keys')

function solis(){
    
}

planet.addEventListener('click', () => {
    window.location.replace('http://127.0.0.1:5500/solarisExam/solarisExam/index.html')
})