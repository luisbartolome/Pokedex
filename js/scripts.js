let pokemonRepository = (function() {
    let pokemonList = [{
            name: "Wartortle",
            types: ['water'],
            height: 3
        },
        {
            name: "Charmander",
            types: ['fire'],
            height: 0.9
        },
        {
            name: "Nidoran",
            types: ['poison'],
            height: 1
        }
    ];

    //move the function declaration passed to forEach() to make things clearer

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "types" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    //return the repository array  
    function getAll() {
        return pokemonList;
    }

    //creating lists and button in the DOM

    function addListItem(pokemon) {

        let pokemonList = document.querySelector('.pokemon-list');
        let listpokemon = document.createElement('card');

        //pokemon names on the buttons
        let button = document.createElement('button');
        button.innerText = pokemon.name + ' (height: ' + pokemon.height + ') ' + pokemon.types;
        button.classList.add('button-class');
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        //Event listener on click
        button.addEventListener('click', function(event) {
            showDetails(pokemon)
        })
    };

    //ShowDetails function

    function showDetails(pokemon) {
        if (pokemon.height > 1) {
            console.log('that is a big Pokemon')
        } else if (pokemon < 1) {
            console.log('that is a big Pokemon')
        }
    };

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };

});

//add the correct type of data to pokemonList array

pokemonRepository.add({
    name: 'Voltorb',
    height: 0.5,
    types: ['electric']
});

console.log(pokemonRepository.getAll());

//forEach Loop iterates each pokemon name in a button in an unorderd list
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});