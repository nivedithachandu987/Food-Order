import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css'; // Import the CSS file for styling

function Recipes() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(json => setData(json.recipes));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleAddItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price);
  };

  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
    setTotalPrice((prevTotal) => prevTotal - itemToRemove.price);
  };

  const handleSubmitOrder = () => {
    alert(`Order placed! Total amount: ₹${totalPrice}`);
    setSelectedItems([]); // Clear the order after submission
    setTotalPrice(0);
  };

  const filteredRecipes = data.filter(recipe =>
    recipe.name.toLowerCase().includes(search)
  );

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search recipes..."
        value={search}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">
                  <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
                </p>
                <p className="card-text">
                  <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
                </p>
                <p className="card-text">
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
                <button 
                  onClick={() => handleAddItem({ name: recipe.name, price: 300 })} 
                  className="btn btn-primary"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="order-summary mt-5">
        <h3>Order Summary</h3>
        <ul className="summary-list">
          {selectedItems.map((item, index) => (
            <li key={index} className="summary-item">
              {item.name} - ₹{item.price}
              <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <h4>Total: ₹{totalPrice}</h4>
        <button onClick={handleSubmitOrder} className="btn btn-success">Place Order</button>
      </div>
    </div>
  );
}

export default Recipes;
