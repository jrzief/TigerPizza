export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Favorites",
    img: "/img/favorites.jpg",
    section: "Pizza",
    price: 2.5
  },
  {
    name: "The Lineup",
    img: "/img/the-lineup.jpg",
    section: "Sides",
    price: 3.5
  },
  {
    name: "Cheese-Onions-Mushrooms",
    img: "/img/pizza6.jpeg",
    section: "Pizza",
    price: 2.5
  },
  {
    name: "Mixed Peppers",
    img: "/img/princeton-pi3.jpg",
    section: "Pizza",
    price: 3.0
  },
  {
    name: "Cheese-Eggs-&More",
    img: "/img/cheese-eggs-more.jpg",
    section: "Pizza",
    price: 4.0
  },
  {
    name: "Basil-Cheese-Chili-Peppers",
    img: "/img/basil-cheese-chili-peppers.jpg",
    section: "Pizza",
    price: 2.5
  },
  {
    name: "Black Olives-Corn",
    img: "/img/black-olives-cheese-corn.jpg",
    section: "Pizza",
    price: 4.0
  },
  {
    price: 1,
    name: "Healthy Drinks",
    section: "Drinks",
    choices: ["Mountain H20", "Gremlin", "OJ Crush", " Unsweetened Lemonade"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
