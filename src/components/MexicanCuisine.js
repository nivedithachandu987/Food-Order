import React, { useState } from 'react';
import './MexicanCuisine.css'; // Ensure you have appropriate styling

const foodItems = [
  
  {
    name: 'Tostadas',
    cuisine: 'Mexican',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '€10',
    imageUrl: 'https://img.freepik.com/free-photo/two-arepas-with-filling-plate_23-2148742421.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chimichangas',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '20 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-hot-dog-with-sauce_23-2148768259.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Flautas',
    cuisine: 'Mexican',
    rating: 4.9,
    deliveryTime: '10 mins',
    cost: '€8',
    imageUrl: 'https://img.freepik.com/free-photo/tasty-burritos-with-chicken-sauce-bowl_23-2148254398.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Tamales',
    cuisine: 'Mexican',
    rating: 4.8,
    deliveryTime: '25 mins',
    cost: '€11',
    imageUrl: 'https://img.freepik.com/premium-photo/traditional-mexican-tamales-image-collection_1046319-78866.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Sopes',
    cuisine: 'Mexican',
    rating: 4.9,
    deliveryTime: '5 mins',
    cost: '€6',
    imageUrl: 'https://img.freepik.com/premium-photo/three-hot-dogs-with-beans-cheese-them-are-table_1169880-257067.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chilaquiles',
    cuisine: 'Mexican',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '€9',
    imageUrl: 'https://img.freepik.com/free-photo/side-view-fried-meat-with-mushrooms-sauce-with-vegetable-salad-slices-tomato-cucumber_141793-4913.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Carnitas',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '20 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-bowls-with-lokum-seeds_23-2148234355.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Bunuelos',
    cuisine: 'Mexican',
    rating: 4.9,
    deliveryTime: '10 mins',
    cost: '€6',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-fast-food-napkin_23-2149235968.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Margaritas',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: '5 mins',
    cost: '€8',
    imageUrl: 'https://img.freepik.com/premium-photo/glass-cocktail-with-limes-limes-table_1150321-5473.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Papel Picado Tacos',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '€11',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-delicious-taco-studio_23-2150770531.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chiles Rellenos',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: '30 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/free-photo/still-life-with-delicious-eggplant_23-2150392332.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Nachos Supreme',
    cuisine: 'Mexican',
    rating: 4.5,
    deliveryTime: '10 mins',
    cost: '€9',
    imageUrl: 'https://img.freepik.com/free-photo/composition-c-rectangular-ketchup-small-bowl_23-2148254323.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mole Poblano',
    cuisine: 'Mexican',
    rating: 4.8,
    deliveryTime: '40 mins',
    cost: '€15',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-delicious-eggplants-dish-still-life_23-2150561820.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pico de Gallo',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '10 mins',
    cost: '€5',
    imageUrl: 'https://img.freepik.com/free-photo/bowl-fresh-salsa-dip-isolated_2829-14460.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Elote',
    cuisine: 'Mexican',
    rating: 4.6,
    deliveryTime: '15 mins',
    cost: '€7',
    imageUrl: 'https://img.freepik.com/free-photo/cups-with-delicious-esquites-lime_23-2149890923.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Huevos Rancheros',
    cuisine: 'Mexican',
    rating: 4.9,
    deliveryTime: '20 mins',
    cost: '€11',
    imageUrl: 'https://img.freepik.com/free-photo/view-delicious-egg-dish_23-2150777631.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Arroz con Pollo',
    cuisine: 'Mexican',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/premium-photo/mexican-food_1273633-2188.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Baja Fish Tacos',
    cuisine: 'Mexican',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '€13',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-tacos-lime-arrangement_23-2148750463.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Ceviche',
    cuisine: 'Mexican',
    rating: 4.9,
    deliveryTime: '25 mins',
    cost: '€10',
    imageUrl: 'https://img.freepik.com/free-photo/fruit-vegetable-salad-glass-cup-wooden-floor_1150-20742.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Salsa Verde',
    cuisine: 'Mexican',
    rating: 4.8,
    deliveryTime: '5 mins',
    cost: '€4',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-colorful-hummus_23-2149447785.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  }
];

const MexicanCuisine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Filter the dishes based on the search term
  const filteredDishes = foodItems.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Parse cost and convert it to a float value
  const parseCost = (costString) => {
    return parseFloat(costString.replace(/[^0-9.-]+/g, ''));
  };

  const handleAddItem = (dish) => {
    const dishCost = parseCost(dish.cost);
    setSelectedItems((prevItems) => [...prevItems, dish]);
    setTotalPrice((prevTotal) => prevTotal + dishCost);
  };

  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    const itemCost = parseCost(itemToRemove.cost);
    setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - itemCost);
  };

  const handleSubmitOrder = () => {
    alert(`Order placed! Total amount: ₹${totalPrice.toFixed(2)}`);
    setSelectedItems([]); // Clear the order after submission
    setTotalPrice(0);
  };

  return (
    <div className="mexican-cuisine">
      <h1>Welcome to Mexican Cuisine!</h1>

      <input
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="dish-cards">
        {filteredDishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.imageUrl} alt={dish.name} className="dish-image" />
            <h3>{dish.name}</h3>
            <p>Cuisine: {dish.cuisine}</p>
            <p>Rating: {dish.rating} ⭐</p>
            <p>Delivery Time: {dish.deliveryTime}</p>
            <p>Cost: {dish.cost}</p>
            <button onClick={() => handleAddItem(dish)} className="order-now">Add to Order</button>
          </div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.cost}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        <button onClick={handleSubmitOrder} disabled={selectedItems.length === 0}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default MexicanCuisine;