export const foodItems = [
  {
    name: "Favorites",
    img: "/img/favorites.jpg",
    section: "Pizza"
  },
  {
    name: "The Lineup",
    img: "/img/the-lineup.jpg",
    section: "Sides"
  },
  {
    name: "Cheese-Onions-Mushrooms",
    img: "/img/pizza6.jpeg",
    section: "Pizza"
  },
  {
    name: "Mixed Peppers",
    img: "/img/princeton-pi3.jpg",
    section: "Pizza"
  },
  {
    name: "Cheese-Eggs-&More",
    img: "/img/cheese-eggs-more.jpg",
    section: "Pizza"
  },
  {
    name: "Basil-Cheese-Chili-Peppers",
    img: "/img/basil-cheese-chili-peppers.jpg",
    section: "Pizza"
  },
  {
    name: "Black Olives-Corn",
    img: "/img/black-olives-cheese-corn.jpg",
    section: "Pizza"
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
