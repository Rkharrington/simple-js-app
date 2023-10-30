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

return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  }
})();

document.write('');
pokemonRepository.getAll().forEach(function(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = 'placeholder';
  button.classList.add('button-class');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
});