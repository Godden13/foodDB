import ui from './ui';
import api from './api';
import data from './data';

function updateMeal(foodItems) {
  data.setMenu(foodItems);
  ui.renderMenu(data.getMenu());
}

ui.renderPage({
  onSearch: (searchTerm) => {
    api.searchMeals(searchTerm).then(updateMeal);
  },
});

api.getFoodByLetter().then(updateMeal);
