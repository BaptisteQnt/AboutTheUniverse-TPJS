let i = 1;
let url = 'https://swapi.dev/api/planets/?page=';
let planets = [];
let table =[];
let nbrpage;



onInit();

async function onInit(){
    await countPages();
    await getplanets();
    createLi();
    countPlanete();
}

let selectfield = document.querySelector('#selectpl');
selectfield.addEventListener('change', launchFilter);

async function launchFilter(){
    await filter();
    filterCreateLi();
}

async function countPages() {
    const response = await fetch('https://swapi.dev/api/planets/');
    const planeteInfo = await response.json();
    nbrpage = planeteInfo.count / 10;
    
    
    // fetch('https://swapi.dev/api/planets/')
    //     .then(response => response.json())
    //     .then(response => {
    //         let nbrpage = response.count /10;
    //     })
        
}
   
async function getplanets (){      
    while(i <= nbrpage){
        const response = await fetch('https://swapi.dev/api/planets/?page=' + i);
        const data = await response.json();
        data.results.forEach(planet => {
        planets.push(planet);
        })
    i++;
    }
}   

async function createLi(){
    console.log(planets);
    let ul = document.querySelector('#listpla');
    planets.forEach(planet => {
    console.log('ok');
    let li = document.createElement('li');
    li.textContent = planet.name
    ul.appendChild(li);
    li.addEventListener('click', displayInfosPlanet);
    })
}

function displayInfosPlanet (event) {
    console.log(event.target.textContent);
    const planet = planets.find((planet) => event.target.textContent == planet.name);
    console.log(planet);
    let namePlanet = document.querySelector('#nameplanet');
    let population = document.querySelector('#population');
    let gravity = document.querySelector('#gravity');
    let climat = document.querySelector('#climat');
    let terrain = document.querySelector('#terrain');
    namePlanet.textContent = 'Nom : ' + planet.name;
    population.textContent = 'Population : ' + planet.population;
    gravity.textContent = 'Gravité : ' + planet.gravity;
    climat.textContent = 'Climat : ' + planet.climat;
    terrain.textContent = 'Terrain : ' + planet.terrain;

};

async function countPlanete (){
    document.querySelector('#countplanete').textContent = 'Nombre de planétes : ' + planets.length
}

async function filter() {
    let select = document.querySelector('#selectpl').value;
    let list = document.querySelectorAll('#listpla li');
    list.forEach(function (li) {
        li.remove();
    });
    table = planets;
    table = table.sort(function(a,b) {
        return a.population - b.population;
    })
    if(select == 'population'){
        table = table.sort(function(a,b) {
            return a.population - b.population;
        })
    } else if ( select == 'alpha'){
        table = table.sort(function (a,b) {
            return a.name.localeCompare(b.name);
        })
    } else if (select == 'zeros'){
        table = table.filter(function (planet) {
            return planet.population >= 0 && planet.population <= 100000;
        })
    } else if (select == 'cent'){
        table = table.filter(function (planet) {
            return planet.population >= 100000 && planet.population <= 100000000;
        })
    } else if (select == '+cent'){
        table = table.filter(function (planet) {
            return planet.population > 100000000 
        })
    }
}

async function filterCreateLi(){
    let ul = document.querySelector('#listpla');
    table.forEach(planet => {
    let li = document.createElement('li');
    li.textContent = planet.name
    ul.appendChild(li);
    li.addEventListener('click', displayInfosPlanet);
    })
}
    

// async function exe(){
//     await all();
//     event1();
// }

// const response = fetch('https://swapi.dev/api/planets/?page=' + i);
        // const data = (await response).json();
        // i++;
        // console.log(data);
        // return data.result;


// async  function obj (planet){
//     let table = planet.result;
//     console.log(planet.result);
//     let ul = document.querySelector('#listpla')
//     table.forEach(element => {
//     let allplanet = new Object();
//     allplanet.name = element.name;
//     allplanet.rota = element.rotation_period;
//     allplanet.orbit = element.orbital_period;
//     allplanet.diametre = element.diameter;
//     allplanet.gravite = element.gravity;
//     allplanet.popu = element.population;
//     allplanet.water = element.surface_water;
//     allplanet.terrain = element.terrain;
//     planets.push(allplanet);
//     let a = document.createElement('a');
//     a.className = 'elmntli';
//     ul.appendChild(a);
//     let li = document.createElement('li');
//     li.textContent = element.name
//     a.appendChild(li);
//     })
// }

// exe();

// fetch('https://swapi.dev/api/planets')
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//     })

// console.log(response);
                // Actuellement, nous réussissons à réaliser les 6 bonnes requêtes 
                // Nous pouvons donc récupérer les informations pour les mettre dans 
                // un tableau et les afficher sur l'interface
                // console.log(response.results);