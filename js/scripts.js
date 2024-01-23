let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'details' in pokemon
    ) {
      pokemonList.push(pokemon);
  } else {
    console.log('This Pokémon is not correct');
  }
    }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function getAll() {
    return pokemonList;
  }

  // Adds list of buttons
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
  //Adds Bootstrap utility class
    pokemonList.classList.add('list-group-item');
    button.innerText = pokemon.name;
    button.classList.add('btn-class', 'btn-primary');
  //Buttons open bootstrap modal
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modal-container');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click',() => {
      showDetails(pokemon);
    })
  }

  // Fetch data from Pokemon API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            details: item.url
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      })
    }

  function loadDetails(item) {
    let url = item.details;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then (function (details) {
      // Item details
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  
  // let modalContainer = document.querySelector('#modal-container');

function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  modalTitle.empty();
  modalBody.empty();

  let titleElement = $("<h1>" + pokemon.name + "</h1>");
  modal.appendChild(titleElement);

  let myImage = $('<img class="modal-img" style="width:50%">');
  myImage.attr('src', pokemon.imageUrl);
  modal.appendChild(myImage);

  let contentHeight = $('<p>' + "Height: " + pokemon.height + '</p>');
  modal.appendChild(contentHeight);

  let contentWeight = $('<p>' + "Weight: " + pokemon.weight + '</p>');
  modal.appendChild(contentWeight);

}

  // Clears all existing modal content
  // function showModal(pokemon) {
  //   modalContainer.innerHTML = '';

  //   let modal = document.createElement('div');
  //   modal.classList.add('modal');

    // Modal content
    // let closeButtonElement = document.createElement('button');
    // closeButtonElement.classList.add('modal-close');
    // closeButtonElement.innerText = 'Close';
    // closeButtonElement.addEventListener('click', hideModal);

    // let titleElement = document.createElement('h1');
    // titleElement.innerText = pokemon.name;

    // let contentHeight = document.createElement('p');
    // contentHeight.innerText = "Height: " + pokemon.height;

    // let contentWeight = document.createElement('p');
    // contentWeight.innerText = "Weight: " + pokemon.weight;

    // let myImage = document.createElement('img');
    // myImage.src = pokemon.imageUrl;
    
  //   modal.appendChild(closeButtonElement);
    // modal.appendChild(titleElement);
    // modal.appendChild(myImage);
    // modal.appendChild(contentHeight);
    // modal.appendChild(contentWeight);

  //   modalContainer.appendChild(modal);

  //   modalContainer.classList.add('is-visible');
  // }

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');
  // }

  // window.addEventListener('keydown', (e) => {
  //   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //     hideModal();
  //   }
  // });

  // modalContainer.addEventListener('click', (e) => {

  //   // Close container only when user clicks directly on the overlay
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });

  // Return statement
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});