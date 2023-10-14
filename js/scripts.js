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

let pokemon = ['Bulbasaur', 'Charizard', 'Weedle', 'Pidgetto', 'Ekans'];

for(let i = 0; i < pokemon.length; i++) {
    document.write(pokemon[i] + '<br>')
}