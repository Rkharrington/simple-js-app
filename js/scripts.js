let pokemonList = [
    { 
        name: 'Bulbasaur',
        height: 0.7,
        type: ['grass', 'poison']
    },
    { 
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying']
    },
    { 
        name: 'Weedle',
        height: 0.3,
        type: ['bug', 'poison']
    },
    { 
        name: 'Pidgetto',
        height: 1.1,
        type: ['flying', 'normal']
    },
    { name: 'Ekans',
    height: 2,
    type: ['poison']
    }
];

for (let i=0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + ' (height ' + pokemonList[i].height + ') ' + '<br>')
    if (pokemonList[i].height > 1.9){
        document.write(' -Wow! That\'s big!')
    }
  }