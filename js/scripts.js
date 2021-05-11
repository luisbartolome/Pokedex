let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    //move the function declaration passed to forEach() to make things clearer
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
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
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("card");
        //create delete button on the buttons of pokemon list
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.classList.add('delete-button');
        //creat edit button on the buttons of pokemon list
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.classList.add('edit-button');
        //pokemon names on the buttons
        let button = document.createElement("button");
        button.innerText = pokemon.name + " (height: " + pokemon.height + ") " + pokemon.types;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        //Event listener on click
        button.addEventListener("click", function(event) {
            showDetails(pokemon);

        });
    }
    //append the buttons and the list to thier parents
    button.appendChild(editButton);
    button.appendChild(deleteButton);
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    //ShowDetails function
    function showDetails(pokemon) {
        if (pokemon.height > 1) {
            console.log("your Pokemon is " + pokemon.name + "and is a big Pokemon");
        } else {
            console.log(pokemon.name + " is a small Pokemon");
        }
    }

    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.result.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            }).then(function() {
                hideLoadingMessage();
            }).catch(function(e) {
                console.error(e);
            })
            hideLoadingMessage();
        })
    };

    function loadDetails(item) {
        showLoadingMessage();
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            //Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).then(function() {
            hideLoadingMessage();
        }).catch(function(e) {
            console.error(e);
        });
        hideLoadingMessage();
    }

    //shows the loading image
    function showLoadingMessage() {
        loadImage = document.querySelector(".loadingImage");
        loadImage.classList.add("showImg");
    }

    //hides the loading image
    function hideLoadingMessage() {
        loadImage = document.querySelector(".loadingImage");
        loadImage.classList.remove("showImg");
    }


    //execute the details of clicked pokemon on console

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        hideLoadingMessage: hideLoadingMessage,
    };
})();

//Calling the loadList function of pokemonrepository
pokemonRepository.LoadList().then(function() {
    //shows loading image in browser
    pokemonRepository.showLoadingMessage();
    //timer to simulate the time it takes to load
    setTimeout(function() {
        pokemonRepository.getAll().forEach(function(pokemon) {
            pokemonRepository.addListItem(pokemon);
        })
        pokemonRepository.hideLoadingMessage();
    }, 2000)
});