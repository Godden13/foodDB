import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = '<input type = "search" name = "searchTerm"><button>Search</button>';

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });
  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('head');
  header.innerHTML = '<h1 class = "title">Goddens Food Menu</h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMenu(foodItem) {
  const foodItemElement = document.createElement('div');
  foodItemElement.classList.add('foodItem');
  foodItemElement.innerHTML = `<h2>${foodItem.strMeal}</h2><p>${foodItem.strInstructions}</p>`;
  const img = `${foodItem.strMealThumb}`;
  foodItemElement.style.backgroundImage = `url(${img})`;
  return foodItemElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

// function createFooter() {
//   const footer = document.createElement('footer');
//   footer.classList.add('foot');
// }

function renderPage({ onSearch }) {
  appContainer.innerHTML = '';
  mainContainer = createMain();
  appContainer.appendChild(createHeader({ onSearch }));
  appContainer.appendChild(mainContainer);
}

function renderMenu(foodItems = []) {
  mainContainer.innerHTML = '';
  foodItems.forEach((foodItem) => {
    mainContainer.appendChild(createMenu(foodItem));
  });
}

export default {
  renderPage,
  renderMenu,
};
