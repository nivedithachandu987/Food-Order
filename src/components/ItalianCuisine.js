import React, { useState } from 'react';
import './ItalianCuisine.css'; // Assuming you have a CSS file for styling

const italianDishes = [
  {
    name: 'Margherita Pizza',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/free-photo/homemade-vegan-margherita-pizza-food-photography_53876-63238.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pasta Carbonara',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '20 mins',
    cost: '€15',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690581.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Lasagna',
    cuisine: 'Italian',
    rating: 4.9,
    deliveryTime: '30 mins',
    cost: '€18',
    imageUrl: 'https://img.freepik.com/free-photo/view-delicious-dish-food_23-2150777707.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Risotto',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '25 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/free-photo/mushroom-risotto-plate-garnished-with-grated-parmesan-parsley_141793-1934.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Tiramisu',
    cuisine: 'Italian',
    rating: 4.9,
    deliveryTime: '15 mins',
    cost: '€10',
    imageUrl: 'https://img.freepik.com/premium-photo/delectable-serving-tiramisu-is-elegantly-presented-plate_955152-11599.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Bruschetta',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '€8',
    imageUrl: 'https://img.freepik.com/free-photo/tapas-appetizers_144627-20856.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Minestrone Soup',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '20 mins',
    cost: '€9',
    imageUrl: 'https://img.freepik.com/free-photo/minestrone-italian-vegetable-soup-with-pasta-vegan-food-top-view-flat-lay_2829-19687.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Fettuccine Alfredo',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '20 mins',
    cost: '€16',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-delicious-pasta-plain-background_23-2148305607.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Osso Buco',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '35 mins',
    cost: '€22',
    imageUrl: 'https://img.freepik.com/free-photo/fried-meat-with-its-own-sauce_140725-3635.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Gnocchi',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '25 mins',
    cost: '€13',
    imageUrl: 'https://img.freepik.com/free-photo/creative-arrangement-tasty-food_23-2148949063.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Panna Cotta',
    cuisine: 'Italian',
    rating: 4.9,
    deliveryTime: '10 mins',
    cost: '€7',
    imageUrl: 'https://img.freepik.com/free-photo/glass-cup-delicious-acai-brazilian-dessert_23-2149788565.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Caprese Salad',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '10 mins',
    cost: '€9',
    imageUrl: 'https://img.freepik.com/free-photo/classic-caprese-salad-with-mozzarella-cheese-tomatoes_140725-1048.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Calzone',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '€14',
    imageUrl: 'https://img.freepik.com/free-photo/front-view-pastry-along-with-white-red-sauces-brown-wooden-round-desk-grey-surface_140725-14470.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Polenta',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '30 mins',
    cost: '€12',
    imageUrl: 'https://img.freepik.com/free-photo/corn-porridge-with-pumpkin-white-wooden-background_155003-294.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Cannoli',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '€6',
    imageUrl: 'https://img.freepik.com/free-photo/tasty-dessert-with-glazed-topping_23-2147802392.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Parmigiana',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '30 mins',
    cost: '€16',
    imageUrl: 'https://img.freepik.com/free-photo/mimosa-salad-ornated-with-chips-olives_140725-1176.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Arancini',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '20 mins',
    cost: '€10',
    imageUrl: 'https://img.freepik.com/premium-photo/arancini-rice-balls-with-chicken_1313853-10564.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Spaghetti Bolognese',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '€13',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-spaghetti-bolognese-white-plate_140725-10377.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Caprese Skewers',
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '€9',
    imageUrl: 'https://img.freepik.com/premium-photo/black-plate-with-variety-food-it-including-tomatoes-spinach-basil_1290348-149.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Panzanella',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '20 mins',
    cost: '€11',
    imageUrl: 'https://img.freepik.com/premium-photo/various-fresh-dry-products_1337460-73834.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  
];

const ItalianCuisine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Filter the dishes based on the search term
  const filteredDishes = italianDishes.filter(dish =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = (dish) => {
      setSelectedItems((prevItems) => [...prevItems, dish]);
      setTotalPrice((prevTotal) => prevTotal + parseInt(dish.cost.replace('€', '')));
  };

  const handleRemoveItem = (index) => {
      const itemToRemove = selectedItems[index];
      setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
      setTotalPrice((prevTotal) => prevTotal - parseInt(itemToRemove.cost.replace('€', '')));
  };

  const handleSubmitOrder = () => {
      alert(`Order placed! Total amount: €${totalPrice}`);
      setSelectedItems([]); // Clear the order after submission
      setTotalPrice(0);
  };

  return (
      <div className="italian-cuisine">
          <h1>Welcome to Italian Cuisine!</h1>
          <input
              type="text"
              placeholder="Search for a dish..."
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
              <h3>Total: €{totalPrice}</h3>
              <button onClick={handleSubmitOrder} disabled={selectedItems.length === 0}>
                  Place Order
              </button>
          </div>
      </div>
  );
};

export default ItalianCuisine;