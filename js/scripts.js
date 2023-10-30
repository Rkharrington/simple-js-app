let pokemonRepository = (function () {
    let pokemonList = [
        { 
            name: 'Bulbasaur',
            height: 0.7,
            type: ['grass', ' poison']
        },
        { 
            name: 'Charizard',
            height: 1.7,
            type: ['fire', ' flying']
        },
        { 
            name: 'Weedle',
            height: 0.3,
            type: ['bug', ' poison']
        },
        { 
            name: 'Pidgetto',
            height: 1.1,
            type: ['flying', ' normal']
        },
        { name: 'Ekans',
        height: 2,
        type: ['poison']
        }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
      }
  
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon){
      let pokemonList = document.querySelector('.pokemon-list');
      let listpokemon = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });