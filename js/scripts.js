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


    // add the Pokémon referred to with item to the pokemonList array +  datatype check

    function add(pokemon) {
        if (typeof pokemon === 'object' && typeof pokemon !== null) {
            pokemonList.push(pokemon);
        } else {
            alert('type of parameter is not an object');
        }
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

    document.write('</li><br>');
};

//forEach Loop iterates each pokemon name and height.
pokemonRepository.getAll().forEach(myLoopFunction);

document.write('<ul>');