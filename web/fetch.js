
async function getPokemon() {

    const name = document.getElementById('pokemonName').value.toLowerCase();
    const image = document.getElementById('image');
    try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        
        if (!response.ok){
            throw new Error("Could not find you pokemon!");
        }

        const data = await response.json()

        image.src = data.sprites.front_default;

    } catch(error){
        console.error(error);
    }


}

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if(!response.ok){
//             throw new Error("Could not fetch!");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));