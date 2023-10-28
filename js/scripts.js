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
        { 
            name: 'Ekans',
            height: 2,
            type: ['poison']
        }
    ];
    function getAll () {
        return pokemonList;
      }
      function add (pokemon) {
        pokemonList.push(pokemon);
      }
    
      return {
        getAll: getAll,
        add: add
      }
      
    })();
    
    document.write('');
    pokemonRepository.getAll().forEach(function (pokemon) {
      document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + ' type: ' + pokemon.type + ')' + '</p>');
    });