
fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let nbrpeople = response.count
        console.log(nbrpeople);
        document.querySelector('#nbr1').textContent = nbrpeople;
    })
   
    fetch('https://swapi.dev/api/planets')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let nbrplanet = response.count
        console.log(nbrplanet);
        document.querySelector('#nbr3').textContent = nbrplanet
    })
    
    
    fetch('https://swapi.dev/api/starships')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let nbrship = response.count
        console.log(nbrship);
        document.querySelector('#nbr2').textContent = nbrship;
    })

    
    
    document.querySelector('#nbr3').textContent(nbrship);