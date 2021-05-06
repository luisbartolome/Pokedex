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

    // adding pokemons to the repository

    function add(pokemon) {
        return typeof pokemon === 'object' ? pokemonList.push(pokemon) : 'error';
    }

    //return the pokemonList array
    function getAll() {
        return pokemonList;
    }

    return {
        getAll: getAll,
        add: add
    };

})();

// Add buttons and Style + Event listener

function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');

    //pokemon names on the buttons
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    //Event listener on click
    button.addEventListener('click', function(event) {
        showDetails(pokemon);
    });

    //append the butten und the list to thier parents
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
    showDetails: showDetails,
};


// showDetails function

function showDetails(pokemon) {
    console.log(pokemon);
}

// key variable to access the IIEF

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
};

//add the correct type of data to pokemonList array

pokemonRepository.add({
    name: 'Voltorb',
    height: 0.5,
    types: ['electric']
});

document.write('<ul class="pokemon-list">');

//move the function declaration passed to forEach() to make things clearer
function myLoopFunction(pokemon) {
    document.write('<li class="pokemon-list__item"><b>' + pokemon.name + '</b> (height: ' + pokemon.height + ')' + "<br>" + pokemon.types);
    if (pokemon.height > 1) {
        document.write(" - big pokemon");
    } else {
        document.write(" - small pokemon");
    }
    document.write('</li><br>');
};

function filterType(value) {
    const response = pokemonRepository.getAll().filter(p => p.types[0] == value)
    console.log(response, 'type:', value);
}

//forEach Loop iterates each pokemon name and height.
pokemonRepository.getAll().forEach(myLoopFunction);

document.write('<ul>');