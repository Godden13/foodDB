const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

function getFoodByLetter() {
  return fetch(`${BASE_URL}search.php?f=a`)
    .then((res) => res.json())
    .then((res) => res.meals);
}

function searchMeals(foodItem) {
  return fetch(`${BASE_URL}search.php?s=${foodItem}`)
    .then((res) => res.json())
    .then((res) => res.meals);
}

export default { getFoodByLetter, searchMeals };
