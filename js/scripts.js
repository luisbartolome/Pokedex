let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    // Add pokemon to list

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //return the repository array
    function getAll() {
        return pokemonList;
    }

    //create and display clickable pokemon objects

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        listpokemon.classList.add('group-list-item')

        //Display pokemon in button
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.setAttribute('data-bs-target', '#modal-container');
        button.setAttribute('data-bs-toggle', 'modal');
        button.type = 'button';

        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

        // Add event listener to button

        button.addEventListener("click", function() {

            showDetails(pokemon);

        });
    }

    // Modal window function

    function showModal({ name: title, type: text, weight, imageUrl: url }) {

        let modalContainer = document.querySelector('#modal-container');


        // Clear all existing modal content

        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        // Add the new modal content

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = title;

        let contentElement = document.createElement('p');
        contentElement.innerText = "Type: " + text;
        let pokemonWeight = document.createElement("p");
        pokemonWeight.innerText = "Weight: " + weight + "Kg";

        let modalImage = document.createElement("img");
        modalImage.src = url;
        modalImage.setAttribute("id", "pokemonImage");



        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(pokemonWeight);
        modal.appendChild(modalImage);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    };

    // Close modal

    window.addEventListener('keyup', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
    };

    //Promise Fetch function

    async function loadList() {

        try {
            const response = await fetch(apiUrl);
            const json = await response.json();
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        } catch (e) {
            console.error(e);
        }

    };

    //loadDetails function

    async function loadDetails(item) {

        let url = item.detailsUrl;
        try {
            const response = await fetch(url);
            const details = await response.json();
            //Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.type = details.types[0].type.name;
        } catch (e) {
            console.error(e);
        }
    };

    // Event listener for showDetails

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showModal(pokemon);
        });
    }

    // key variable to access the IIEF

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
    };
})();


// validate forms

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

function filterPokemonList(query) {
    const list = document.querySelector('ul.pokemon-list')
    if (!query) {
        resetPokemonList(list)
        return
    }
    const regex = new RegExp(query.replace(/[^a-zA-Z]+/g, ''), 'ig')

    const results = [...list.children].filter(item => !item.innerText.match(regex)) || []
    results.forEach(item => item.style.display = 'none')
}

function resetPokemonList(list = []) {
    [...list.children].forEach(item => item.style.display = 'block')
}