// FeaturedRestaurants.js
import React, { useState } from 'react';
import './FeaturedRestaurants.css'; // Assuming you have a CSS file for styling


const restaurants = [
  {
    name: 'Pizza Delight',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873912.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Sushi Heaven',
    cuisine: 'Japanese',
    rating: 4.5,
    deliveryTime: '40 mins',
    cost: '₹600',
    imageUrl: 'https://img.freepik.com/free-photo/seafood-sushi-dish-with-details-simple-black-background_23-2151349402.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Spicy Indian',
    cuisine: 'Indian',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '₹500',
    imageUrl: 'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246103.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Burger Boss',
    cuisine: 'American',
    rating: 4.6,
    deliveryTime: '35 mins',
    cost: '₹400',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.4,
    deliveryTime: '20 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-delicious-tacos-arrangement_23-2150770491.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Dragon Wok',
    cuisine: 'Chinese',
    rating: 4.9,
    deliveryTime: '45 mins',
    cost: '₹500',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-traditional-asian-dish-with-chopsticks_23-2148694329.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Greek Taverna',
    cuisine: 'Greek',
    rating: 4.6,
    deliveryTime: '50 mins',
    cost: '₹550',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690845.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Thai Treat',
    cuisine: 'Thai',
    rating: 4.7,
    deliveryTime: '30 mins',
    cost: '₹480',
    imageUrl: 'https://img.freepik.com/free-photo/thai-dessert-called-bualoy-balls-dippers-with-hot-coconut-milk-pandan-leaves-increase-deliciousness_1150-23512.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'BBQ Bonanza',
    cuisine: 'Barbecue',
    rating: 4.8,
    deliveryTime: '40 mins',
    cost: '₹600',
    imageUrl: 'https://img.freepik.com/free-photo/arrangement-thanksgiving-day-delicious-dinner_23-2149100156.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mediterranean Magic',
    cuisine: 'Mediterranean',
    rating: 4.9,
    deliveryTime: '25 mins',
    cost: '₹700',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-toast-slice-with-cherry-tomatoes-kitchen-table_23-2148698633.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pho Palace',
    cuisine: 'Vietnamese',
    rating: 4.6,
    deliveryTime: '35 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/free-photo/closeup-shot-vegan-meal-with-mushrooms-onions-carrots-leek_181624-44269.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Curry Fusion',
    cuisine: 'Indian',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '₹480',
    imageUrl: 'https://img.freepik.com/free-photo/indian-delicious-roti-assortment_23-2149073338.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pasta Lovers',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '25 mins',
    cost: '₹600',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-delicious-pasta-plate_23-2150690791.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Salsa Shack',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '30 mins',
    cost: '₹500',
    imageUrl: 'https://img.freepik.com/free-photo/dipping-nacho-chips_23-2148159766.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Wok Wonders',
    cuisine: 'Chinese',
    rating: 4.9,
    deliveryTime: '40 mins',
    cost: '₹420',
    imageUrl: 'https://img.freepik.com/free-photo/close-up-street-food-neon-light_23-2151571723.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Taste of Seoul',
    cuisine: 'Korean',
    rating: 4.6,
    deliveryTime: '45 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/free-photo/chicken-fried-hot-pot-with-spicy-sauce-korean-style_1150-42904.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Le Bistro',
    cuisine: 'French',
    rating: 4.8,
    deliveryTime: '50 mins',
    cost: '₹650',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205186.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Poke Paradise',
    cuisine: 'Hawaiian',
    rating: 4.7,
    deliveryTime: '35 mins',
    cost: '₹550',
    imageUrl: 'https://img.freepik.com/free-photo/hawaiian-poke-bowl-with-salmon-bowl-with-seaweed-sesame-seeds-cabbage-top-view-flat-lay-vertical_127032-2489.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Tex-Mex Treats',
    cuisine: 'Tex-Mex',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '₹480',
    imageUrl: 'https://img.freepik.com/free-photo/kanape-prawns-sauce-with-mixed-salad-side-view_141793-2766.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Biryani',
    cuisine: 'Indian',
    rating: 4.9,
    deliveryTime: '45 mins',
    cost: '₹550',
    imageUrl: 'https://img.freepik.com/free-photo/dry-spices-near-rice-dish_23-2147894748.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Momo Mania',
    cuisine: 'Tibetan',
    rating: 4.7,
    deliveryTime: '35 mins',
    cost: ' ₹360',
    imageUrl: 'https://img.freepik.com/premium-photo/traditional-dumpling-momos-food-from-nepal-served-with-tomato-chutney-moody-background-selective-focus_466689-29271.jpg?w=360',
  },
  {
    name: 'Tandoori Delight',
    cuisine: 'Indian',
    rating: 4.8,
    deliveryTime: '40 mins',
    cost: ' ₹400',
    imageUrl: 'https://img.freepik.com/free-photo/chicken-kebab-rice-near-condiments_23-2147894709.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Paneer Paradise',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: '30 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-food-table_23-2150857894.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Dosa Junction',
    cuisine: 'South Indian',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-indian-dosa-arrangement_23-2149086027.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'pani puri',
    cuisine: 'Street Food',
    rating: 4.5,
    deliveryTime: '20 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/premium-photo/group-bombay-chat-food-includes-golgappa-panipuri-bhel-puri-sev-poori-dahipuri-ragda-pattice-raj-kachori-etc-selective-focus_466689-34746.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  
];

const FeaturedRestaurants = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (restaurant) => {
    setSelectedItems((prevItems) => [...prevItems, restaurant]);
    setTotalPrice((prevTotal) => prevTotal + parseInt(restaurant.cost.replace('₹', '')));
  };

  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - parseInt(itemToRemove.cost.replace('₹', '')));
  };

  const handleSubmitOrder = () => {
    alert(`Order placed! Total amount: ₹${totalPrice}`);
    setSelectedItems([]); // Clear the order after submission
    setTotalPrice(0);
  };

  return (
    <section id="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div className="restaurant-grid">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img src={restaurant.imageUrl} alt={restaurant.name} />
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>Cuisine: {restaurant.cuisine}</p>
              <p>Rating: {restaurant.rating}</p>
              <p>Delivery Time: {restaurant.deliveryTime}</p>
              <p>Cost: {restaurant.cost}</p>
              <button onClick={() => handleAddItem(restaurant)}>Add to Order</button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Your Order</h3>
        {selectedItems.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.cost}
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ₹{totalPrice}</h4>
        <button onClick={handleSubmitOrder} disabled={selectedItems.length === 0}>
          Submit Order
        </button>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;