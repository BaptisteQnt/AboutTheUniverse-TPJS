let i = 1;
let url = 'https://swapi.dev/api/planets/?page=';
const planets = [];
// let rotations = [];


async function all() {
    // Un problème ici: si demain il y a 7 pages sur l'API, ça n'ira pas chercher la 7ème
    // Alors il faut réfléchir à une solution
    while(i <= 6){
        
        
        // const response = fetch('https://swapi.dev/api/planets/?page=' + i);
        // const data = (await response).json();
        // i++;
        // console.log(data);
        // return data.result;

        fetch('https://swapi.dev/api/planets/?page=' + i)
            .then(response => response.json())
            .then(response => {
                let ul = document.querySelector('#listpla')
                response.results.forEach(planet => {
                    planets.push(planet);
                    let li = document.createElement('li');
                    li.textContent = planet.name
                    ul.appendChild(li);
                    li.addEventListener('click', displayPlanet);
                }); 
            })
    i++;
    }
    
}   

function displayPlanet (event) {
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
    



all();

// async function exe(){
//     await all();
//     event1();
// }


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