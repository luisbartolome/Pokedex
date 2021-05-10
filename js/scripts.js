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

        if (typeof pokemon === 'object' && typeof pokemon !== null) {
            repository.push(pokemon);
        } else {
            alert('type of parameter is not an object');
        }
    }

    //return the repository array  
    function getAll() {
        return pokemonList;
    }

    //creating lists and button in the DOM

    function addListItem(pokemon) {

        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');

        //pokemon names on the buttons
        let button = document.createElement('button');
        button.innerText = pokemon.name + ' (height: ' + pokemon.height + ') ' + pokemon.types;
        button.classList.add('button-class');
        //Event listener on click
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });

        //append the button and the list to their parents
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    //execute the details of clicked pokemon on console
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    };

})();

//add the correct type of data to pokemonList array

pokemonRepository.add({
    name: 'Voltorb',
    height: 0.5,
    types: ['electric']
});

//forEach Loop iterates each pokemon name in a button in an unorderd list
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});