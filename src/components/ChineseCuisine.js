import React, { useState } from 'react';
import './ChineseCuisine.css'; 

const ChineseCuisine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const chineseDishes = [
  {
    name: 'Sweet and Sour Pork',
    cuisine: 'Chinese',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-asian-dish-plate-with-meat-rice_23-2148694393.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Kung Pao Chicken',
    cuisine: 'Chinese',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/free-photo/fried-vegetables-chicken-sauce-with-sesame_141793-280.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Dumplings',
    cuisine: 'Chinese',
    rating: 4.9,
    deliveryTime: '15 mins',
    cost: '€10',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-japanese-dumplings-assortment_23-2148809863.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Fried Rice',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '20 mins',
    cost: '€8',
    imageUrl: 'https://img.freepik.com/free-photo/fried-rice-with-prawn-top_1203-9169.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chow Mein',
    cuisine: 'Chinese',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '€11',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-tasty-composition-noodles-table_23-2148803860.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  
  {
    name: 'Mapo Tofu',
    cuisine: 'Chinese',
    rating: 4.9,
    deliveryTime: '20 mins',
    cost: '€10',
    imageUrl: 'https://img.freepik.com/premium-photo/chili-tofu-traditional-chinese-dish-top-view_233226-939.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
 
  {
    name: 'Peking Duck',
    cuisine: 'Chinese',
    rating: 4.9,
    deliveryTime: '40 mins',
    cost: '€25',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-taco-studio_23-2150770619.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Spring Rolls',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '20 mins',
    cost: '€8',
    imageUrl: 'https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535885.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Hot and Sour Soup',
    cuisine: 'Chinese',
    rating: 4.5,
    deliveryTime: '15 mins',
    cost: '€7',
    imageUrl: 'https://img.freepik.com/free-photo/vegetable-soup-with-pasta-herbs_141793-422.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Szechuan Beef',
    cuisine: 'Chinese',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '€15',
    imageUrl: 'https://img.freepik.com/free-photo/stir-frying-beef-with-sweet-peppers-green-beans_2829-20101.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  
 
  {
    name: 'General Tso’s Chicken',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '25 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535858.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Egg Foo Young',
    cuisine: 'Chinese',
    rating: 4.5,
    deliveryTime: '20 mins',
    cost: '€9',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-egg-jewish-meal-pan_23-2148814504.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Lo Mein',
    cuisine: 'Chinese',
    rating: 4.8,
    deliveryTime: '25 mins',
    cost: '€11',
    imageUrl: 'https://img.freepik.com/free-photo/noodles-with-beef-vegetables-black-table_141793-1729.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Wonton Soup',
    cuisine: 'Chinese',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '€8',
    imageUrl: 'https://img.freepik.com/premium-photo/wonton-soup-bowl-selective-focus_74760-25813.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Sesame Chicken',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '30 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/premium-photo/delicious-sesame-chicken-isolated-white-background_1346034-124009.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Dim Sum',
    cuisine: 'Chinese',
    rating: 4.9,
    deliveryTime: '35 mins',
    cost: '€20',
    imageUrl: 'https://img.freepik.com/free-photo/flat-lay-traditional-asian-dumplings-with-herbs-chopsticks_23-2148694327.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Char Siu',
    cuisine: 'Chinese',
    rating: 4.8,
    deliveryTime: '45 mins',
    cost: '€18',
    imageUrl: 'https://img.freepik.com/free-photo/meat-with-tomato-sauce-black-table_141793-1727.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Beef and Broccoli',
    cuisine: 'Chinese',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '€13',
    imageUrl: 'https://img.freepik.com/free-photo/high-protein-meal-close-up-detail_23-2149098887.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pork meatballs ',
    cuisine: 'Chinese',
    rating: 4.6,
    deliveryTime: '30 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-composition-delicious-indonesian-bakso_23-2148933310.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Shrimp Fried Rice',
    cuisine: 'Chinese',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-seafood-fried-rice-with-shrimp-eggs-spring-onions-with-soup_1150-22895.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },

];

  // Filter dishes based on search term
  const filteredDishes = chineseDishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    setSelectedItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="chinese-cuisine">
      <h1>Welcome to Chinese Cuisine!</h1>

      <input
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="dishes-container">
        {filteredDishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <img src={dish.imageUrl} alt={dish.name} className="dish-image" />
            <h2 style={{ color: '#f0a500' }}>{dish.name}</h2>
            <p style={{ color: '#fff' }}>Cuisine: {dish.cuisine}</p>
            <p style={{ color: '#f0a500' }}>Rating: {dish.rating} ⭐</p>
            <p style={{ color: '#fff' }}>Delivery Time: {dish.deliveryTime}</p>
            <p style={{ color: '#fff' }}>Cost: {dish.cost}</p>
            <button onClick={() => handleAddItem(dish)} className="add-to-order-button">Add to Order</button>
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

export default ChineseCuisine;