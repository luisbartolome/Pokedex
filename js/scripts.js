let pokemonList = [{
        name: "Wartortle",
        types: ['water'],
        height: 1
    },
    {
        name: "Charmander",
        types: ['fire'],
        height: 6
    },
    {
        name: "Nidoran",
        types: ['poison'],
        height: 4
    }
];

//Display the data on the page as a unordered list

document.write('<ul class="pokemon-list">');

for (let i = 0; i < pokemonList.length; i++) {

    document.write('<li class="pokemon-list__item"><b>' + pokemonList[i].name + '</b> (height: ' + pokemonList[i].height + ')');
};

// The conditional check if the height is above a certain value
//using <b> tag to bold part of a tring display on page

let i = 1;

if (pokemonList[i].height > 5) {

    document.write('<b>- Wow, that\'s big!.</b>');

    document.write('<ul>');
    document.write('<li><br>');
    document.write('</li><br>');
    document.write('</ul>');


};