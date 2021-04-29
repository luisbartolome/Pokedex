let pokemonList = [{
        name: "Wartortle",
        type: 'water',
        height: 1
    },
    {
        name: "Charmander",
        type: 'fire',
        height: 6
    },
    {
        name: "Nidoran",
        type: 'poison',
        height: 4
    }
];

//Display the data on the page as a unordered list

document.write('<ul class="pokemon-list">');

for (let i = 0; pokemonList.length; i++)

// Used + string concatenation instead of ${} (string interpolation)

    document.write('<li class="pokemon-list__item"><b>' + pokemonList[i].name + '</b> (height: ' + pokemonList[i].height + ')');

// The conditional check if the height is above a certain value
//using <b> tag to bold part of a tring display on page

if (pokemonList[i].height > 5) {

    document.write('<b>- Wow, that\'s big!.</b>');
}