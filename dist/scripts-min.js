let pokemonRepository = function() { let e = [],
        t = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function n(t) { e.push(t) }

    function o({ name: e, type: t, weight: n, imageUrl: o }) { let i = document.querySelector(".modal-body");
        i.innerHTML = ""; let l = document.createElement("div");
        l.classList.add("example"); let a = document.createElement("h1");
        a.innerText = e; let c = document.createElement("p");
        c.innerText = "Type: " + t; let r = document.createElement("p");
        r.innerText = "Weight: " + n + "Kg"; let s = document.createElement("img");
        s.src = o, s.setAttribute("id", "pokemonImage"), l.appendChild(a), l.appendChild(c), l.appendChild(r), l.appendChild(s), i.appendChild(l) }
    async function i(e) { let t = e.detailsUrl; try { const n = await fetch(t),
                o = await n.json();
            e.imageUrl = o.sprites.front_default, e.height = o.height, e.weight = o.weight, e.type = o.types[0].type.name } catch (e) { console.error(e) } }

    function l(e) { i(e).then(function() { o(e) }) } return window.addEventListener("keyup", e => { let t = document.querySelector("#modal-container"); "Escape" === e.key && t.classList.contains("is-visible") && document.querySelector("#modal-container").classList.remove("is-visible") }), { getAll: function() { return e }, add: n, addListItem: function(e) { let t = document.querySelector(".pokemon-list"),
                n = document.createElement("li");
            n.classList.add("group-list-item"); let o = document.createElement("button");
            o.innerText = e.name, o.classList.add("button-class"), o.setAttribute("data-target", "#exampleModalCenter"), o.setAttribute("data-toggle", "modal"), o.type = "button", n.appendChild(o), t.appendChild(n), o.addEventListener("click", function() { l(e) }) }, loadList: async function() { try { const e = await fetch(t);
                (await e.json()).results.forEach(function(e) { n({ name: e.name, detailsUrl: e.url }) }) } catch (e) { console.error(e) } }, loadDetails: i, showDetails: l, showModal: o } }();

function filterPokemonList(e) { const t = document.querySelector("ul.pokemon-list"); if (!e) return void resetPokemonList(t); const n = new RegExp(e.replace(/[^a-zA-Z]+/g, ""), "ig");
    ([...t.children].filter(e => !e.innerText.match(n)) || []).forEach(e => e.style.display = "none") }

function resetPokemonList(e = []) {
    [...e.children].forEach(e => e.style.display = "block") }
pokemonRepository.loadList().then(function() { pokemonRepository.getAll().forEach(function(e) { pokemonRepository.addListItem(e) }) });