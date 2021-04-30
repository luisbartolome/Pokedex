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
    if (pokemonList[i].height > 1) {
        document.write(" - big pokemon" + "<br>")
    } else {
        document.write(
            " - small pokemon" + "<br>")
    }
};
document.write('</ul>');