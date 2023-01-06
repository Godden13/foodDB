const state = {
  foodItems: [],
};

function getMenu() {
  return state.foodItems;
}

function setMenu(foodItems) {
  state.foodItems = foodItems;
}

export default {
  getMenu,
  setMenu,
};
