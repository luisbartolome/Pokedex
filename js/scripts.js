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

//Display the data on the page as a unordered list

document.write('<ul class="pokemon-list">');

for (let i = 0; i < pokemonList.length; i++) {

    document.write('<li class="pokemon-list__item"><b>' + pokemonList[i].name + '</b> (height: ' + pokemonList[i].height + ')');
};

// The conditional check if the height is above a certain value
//using <b> tag to bold part of a tring display on page

// List all pokemons, emphasis on height

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {
        document.write(
            pokemonList[i].name + "'s height is " + pokemonList[i].height + "m" + " - big pokemon" + "<br>")
    } else {
        document.write(
            pokemonList[i].name + "'s height is " + pokemonList[i].height + "m" + " - small pokemon" + "<br>")
    }
};

document.write('<ul>');
document.write('<li><br>');
document.write('</li><br>');
document.write('</ul>');


};