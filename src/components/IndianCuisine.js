import React, { useState } from 'react';
import './IndianCuisine.css'; 

const indianDishes = [
    {
      name: 'Biryani',
      cuisine: 'Indian',
      rating: 4.5,
      deliveryTime: '30 mins',
      cost: '₹350',
      imageUrl: 'https://img.freepik.com/free-photo/vertical-view-delicious-vegan-salad-various-vegetables_140725-135335.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Paneer Masala',
      cuisine: 'Indian',
      rating: 4.7,
      deliveryTime: '25 mins',
      cost: '₹400',
      imageUrl: 'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246089.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Dosa',
      cuisine: 'Indian',
      rating: 4.6,
      deliveryTime: '20 mins',
      cost: '₹150',
      imageUrl: 'https://img.freepik.com/free-photo/delicious-indian-dosa-arrangement_23-2149086025.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Chaat',
      cuisine: 'Indian',
      rating: 4.8,
      deliveryTime: '15 mins',
      cost: '₹100',
      imageUrl: 'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246121.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Rogan Josh',
      cuisine: 'Indian',
      rating: 4.9,
      deliveryTime: '35 mins',
      cost: '₹500',
      imageUrl: 'https://img.freepik.com/premium-photo/bhindi-masala-with-chapati-hindu_1279545-4854.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Palak Paneer',
      cuisine: 'Indian',
      rating: 4.6,
      deliveryTime: '30 mins',
      cost: '₹350',
      imageUrl: 'https://img.freepik.com/premium-photo/palak-paneer-cubes-ceramic-bowl-against-textured-grey-background_113876-14803.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Dal Makhani',
      cuisine: 'Indian',
      rating: 4.7,
      deliveryTime: '25 mins',
      cost: '₹200',
      imageUrl: 'https://img.freepik.com/premium-photo/dal-tadka-dal-fry-lentil-curry-is-popular-indian-dish_136354-24871.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
   
    {
      name: 'Chole Bhature',
      cuisine: 'Indian',
      rating: 4.6,
      deliveryTime: '30 mins',
      cost: '₹250',
      imageUrl: 'https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2017/03/Chola-Bhatura-Recipe.jpg?fit=1200%2C1807&ssl=1',
    },
    {
        name: 'FullMeal',
        cuisine: 'Indian',
        rating: 4.9,
        deliveryTime: '35 mins',
        cost: '₹650',  
        imageUrl: 'https://img.freepik.com/premium-photo/pan-food-with-rice-rice-vegetables_715950-15414.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid', // Replace with a relevant image URL
      },
      
    {
      name: 'Aloo Gobi',
      cuisine: 'Indian',
      rating: 4.5,
      deliveryTime: '25 mins',
      cost: '₹180',
      imageUrl: 'https://img.freepik.com/premium-photo/delicious-aloo-gobhi-indian-dish_802140-12214.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Samosa',
      cuisine: 'Indian',
      rating: 4.7,
      deliveryTime: '15 mins',
      cost: '₹80',
      imageUrl: 'https://img.freepik.com/free-photo/high-angle-delicious-pakistani-food_23-2148825159.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    },
    {
      name: 'Methi Thepla',
      cuisine: 'Indian',
      rating: 4.6,
      deliveryTime: '20 mins',
      cost: '₹120',
      imageUrl: 'https://img.freepik.com/premium-photo/methi-thepla-with-pickle-best-banner-flyer-poster_922664-18667.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
    
    },
    {
      name: 'Pav Bhaji',
      cuisine: 'Indian',
      rating: 4.8,
      deliveryTime: '25 mins',
      cost: '₹150',
      imageUrl: 'https://shwetainthekitchen.com/wp-content/uploads/2022/07/Pav-bhaji.jpg',
    },
  
    {
      name: 'Idli',
      cuisine: 'Indian',
      rating: 4.4,
      deliveryTime: '20 mins',
      cost: '₹100',
      imageUrl: 'https://static.tnn.in/thumb/110831254/110831254.jpg?height=746&width=420&resizemode=76&imgsize=101732',
    },
   
    {
      name: 'Bhindi Masala',
      cuisine: 'Indian',
      rating: 4.6,
      deliveryTime: '30 mins',
      cost: '₹200',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6skFTrxXaJSEUIxkmQ1QezYzMpa6njCp1Xw&s',
    },
    {
      name: 'puri',
      cuisine: 'Indian',
      rating: 4.8,
      deliveryTime: '35 mins',
      cost: '₹500',
      imageUrl: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Aloo-Puri-2-1.jpg',
    },
    {
      name: 'Vada',
      cuisine: 'Indian',
      rating: 4.5,
      deliveryTime: '30 mins',
      cost: '₹300',
      imageUrl: 'https://maayeka.com/wp-content/uploads/2018/10/vrat-ka-medu-vada-2-2.jpg',
    },
    {
        name: 'Pani Puri',
        cuisine: 'Indian',
        rating: 4.5,
        deliveryTime: '15 mins',
        cost: '₹80',
        imageUrl: 'https://img.freepik.com/premium-photo/group-bombay-chat-food-includes-golgappa-panipuri-bhel-puri-sev-poori-dahipuri-ragda-pattice-raj-kachori-etc-selective-focus_466689-34746.jpg?ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
      },
    {
        name: 'Ras Malai',
        cuisine: 'Indian',
        rating: 4.9,
        deliveryTime: '20 mins',
        cost: '₹120',
        imageUrl: 'https://rachnas-kitchen.com/wp-content/uploads/2017/09/rasmalai-1-gpo-700-1050.jpg',
      },
    {
        name: 'Gulab Jamun',
        cuisine: 'Indian',
        rating: 4.8,
        deliveryTime: '15 mins',
        cost: '₹100',
        imageUrl: 'https://img.freepik.com/premium-photo/gulab-jamun-clay-pot-with-spoon-dry-fruits-indian-dessert-sweet-dish_136354-9234.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
      },
      {
        name: 'Sweet Tooth',
        cuisine: 'Indian',
        rating: 4.8,
        deliveryTime: '30 mins',
        cost: '₹200',
        imageUrl: 'https://img.freepik.com/free-photo/delicious-indian-dessert-plate-view_23-2149312388.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
      },
      {
        name: 'Rasgulla',
        cuisine: 'Indian',
        rating: 4.5,
        deliveryTime: '15 mins',
        cost: '₹80',
        imageUrl: 'https://farm8.staticflickr.com/7558/15791279061_c0ab15bcfd_o.jpg',
      },
      {
        name: 'Kaju Katli',
        cuisine: 'Indian',
        rating: 4.9,
        deliveryTime: '20 mins',
        cost: '₹120',
        imageUrl: 'https://img.freepik.com/premium-photo/kaju-katli-is-diamond-shape-indian-sweet-made-using-cashew-sugar-mava-served-plate-moody-surface-selective-focus_466689-4868.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
      },
      {
        name: 'Barfi',
        cuisine: 'Indian',
        rating: 4.8,
        deliveryTime: '15 mins',
        cost: '₹100',
        imageUrl: 'https://img.freepik.com/free-photo/delicious-nougats-plate-high-angle_23-2149646358.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
      },
      {
        name: 'Ladoo',
        cuisine: 'Indian',
        rating: 4.8,
        deliveryTime: '30 mins',
        cost: '₹200',
        imageUrl: 'https://img.freepik.com/free-photo/tasty-indian-dessert-plate-flat-lay_23-2149312386.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
      },
  
  ];


  const IndianCuisine = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Filter the dishes based on the search term
    const filteredDishes = indianDishes.filter(dish =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddItem = (dish) => {
        setSelectedItems((prevItems) => [...prevItems, dish]);
        setTotalPrice((prevTotal) => prevTotal + parseInt(dish.cost.replace('₹', '')));
    };

    const handleRemoveItem = (index) => {
        const itemToRemove = selectedItems[index];
        setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
        setTotalPrice((prevTotal) => prevTotal - parseInt(itemToRemove.cost.replace('₹', '')));
    };

    const handleSubmitOrder = () => {
        alert(`Order placed! Total amount: ₹${totalPrice}`);
        setSelectedItems([]); 
        setTotalPrice(0);
    };

    return (
        <div className="indian-cuisine">
            <h1>Welcome to Indian Cuisine!</h1>
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
                <h3>Total: ₹{totalPrice}</h3>
                <button onClick={handleSubmitOrder} disabled={selectedItems.length === 0}>
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default IndianCuisine;