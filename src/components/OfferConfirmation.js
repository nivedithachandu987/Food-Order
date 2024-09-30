import React, { useState } from 'react';
import './OfferConfirmation.css';

const indianDishes = [
  {
    name: 'Crispy Samosas',
    cuisine: 'Snack',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '₹50',
    imageUrl: 'https://img.freepik.com/free-photo/samsa-samosas-with-meat_658428-358.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Cheesy Nachos',
    cuisine: 'Snack',
    rating: 4.9,
    deliveryTime: '10 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/premium-photo/commercial-photo-corn-chips-with-delicious-cheese-sauce_1151123-65662.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Paneer Tikka',
    cuisine: 'Snack',
    rating: 4.7,
    deliveryTime: '20 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/premium-photo/photography-tasty-indian-paneer-tikka_1288657-46631.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Masala Fries',
    cuisine: 'Snack',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '₹80',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-street-food-still-life_23-2151535321.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Veggie Spring Rolls',
    cuisine: 'Snack',
    rating: 4.9,
    deliveryTime: '18 mins',
    cost: '₹120',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-fried-spring-rolls-with-chicken-vegetables-served-with-soy-sauce-plate-black_141793-11984.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Garlic Breadsticks',
    cuisine: 'Snack',
    rating: 4.6,
    deliveryTime: '12 mins',
    cost: '₹70',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387996.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Onion Rings',
    cuisine: 'Snack',
    rating: 4.7,
    deliveryTime: '10 mins',
    cost: '₹90',
    imageUrl: 'https://img.freepik.com/free-photo/fried-rings-with-sweet-chili_140725-3764.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mini Pizzas',
    cuisine: 'Snack',
    rating: 4.5,
    deliveryTime: '20 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/premium-photo/photo-mini-pizzas-decorated-with-olives-herbs-wooden-board_1325814-999.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Spicy Popcorn',
    cuisine: 'Snack',
    rating: 4.8,
    deliveryTime: '8 mins',
    cost: '₹50',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-popcorn_144627-12655.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Aloo Tikki',
    cuisine: 'Snack',
    rating: 4.6,
    deliveryTime: '15 mins',
    cost: '₹60',
    imageUrl: 'https://img.freepik.com/premium-photo/photography-tasty-aloo-tikki_1288657-56815.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chicken Nuggets',
    cuisine: 'Snack',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/premium-photo/closeup-image-plate-spicy-chicken-nuggets_1042541-4543.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pav Bhaji',
    cuisine: 'Snack',
    rating: 4.9,
    deliveryTime: '25 mins',
    cost: '₹120',
    imageUrl: 'https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2285.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Dhokla Bites',
    cuisine: 'Snack',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹90',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-spanish-croquettes-composition_23-2149173856.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chicken Wings',
    cuisine: 'Snack',
    rating: 4.7,
    deliveryTime: '30 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/premium-photo/plate-chicken-wings-with-side-ketchup-cup-sauce_1044943-237916.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chili Cheese Toast',
    cuisine: 'Snack',
    rating: 4.9,
    deliveryTime: '15 mins',
    cost: '₹80',
    imageUrl: 'https://img.freepik.com/free-photo/sandwich-with-ground-meat_658428-388.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Spicy Nacho Bites',
    cuisine: 'Snacks',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/premium-photo/plate-nachos-with-salsa-salsa-it_1171594-43984.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Cheddar Cheese Popcorn',
    cuisine: 'Snacks',
    rating: 4.9,
    deliveryTime: '15 mins',
    cost: '₹80',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-popcorn_144627-12685.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Sriracha Chicken Wings',
    cuisine: 'Snacks',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '₹180',
    imageUrl: 'https://img.freepik.com/free-photo/top-view-fried-chicken-plate-with-sauce-fizzy-drink_23-2148646619.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Garlic Parmesan Fries',
    cuisine: 'Snacks',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹120',
    imageUrl: 'https://img.freepik.com/free-photo/composition-nutritious-cassava-cooked_23-2149091055.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Loaded Potato Skins',
    cuisine: 'Snacks',
    rating: 4.9,
    deliveryTime: '30 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/premium-photo/baked-potato-skins-with-bacon-green-peppers-cheese_1082141-28654.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Buffalo Cauliflower Bites',
    cuisine: 'Snacks',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '₹110',
    imageUrl: 'https://img.freepik.com/free-photo/fresh-vegetarian-falafel-with-sauce-selective-focus_155003-349.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mini Veggie Quesadillas',
    cuisine: 'Snacks',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹90',
    imageUrl: 'https://img.freepik.com/free-photo/flat-lay-mexican-food_23-2148140193.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'BBQ Pulled Pork Sliders',
    cuisine: 'Snacks',
    rating: 4.9,
    deliveryTime: '25 mins',
    cost: '₹160',
    imageUrl: 'https://img.freepik.com/free-photo/street-food-still-life_23-2151535293.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mozzarella Sticks',
    cuisine: 'Snacks',
    rating: 4.6,
    deliveryTime: '20 mins',
    cost: '₹110',
    imageUrl: 'https://img.freepik.com/free-photo/fried-mozzarella-sticks-with-ice-tea_140725-1269.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Sweet Potato Chips',
    cuisine: 'Snacks',
    rating: 4.7,
    deliveryTime: '18 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/free-photo/close-up-view-homemade-delicious-potato-crispy-chips-small-brown-bowl-potatoes-oil-bottle-green-tomatoes-garlic-ketchup-dark-background_140725-140063.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Bacon Wrapped Jalapeños',
    cuisine: 'Snacks',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹130',
    imageUrl: 'https://img.freepik.com/free-photo/asparagus-with-bacon_144627-18725.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Herb Roasted Nuts',
    cuisine: 'Snacks',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '₹120',
    imageUrl: 'https://img.freepik.com/free-photo/view-allergens-commonly-found-nuts_23-2150170258.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chili Lime Popcorn',
    cuisine: 'Snacks',
    rating: 4.6,
    deliveryTime: '10 mins',
    cost: '₹70',
    imageUrl: 'https://img.freepik.com/premium-photo/bucket-freshly-popped-popcorn_1304147-142212.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Crispy Onion Rings',
    cuisine: 'Snacks',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹90',
    imageUrl: 'https://img.freepik.com/free-photo/fried-rings-with-sweet-chili_140725-3764.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Tandoori Paneer Skewers',
    cuisine: 'Snacks',
    rating: 4.9,
    deliveryTime: '25 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/premium-photo/paneer-tikka-is-indian-cuisine-dish-with-grilled-paneer-cheese-with-vegetables-spices-indian-food_781325-5522.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Chocolate Fudge Cake',
    cuisine: 'Dessert',
    rating: 4.8,
    deliveryTime: '40 mins',
    cost: '₹500',
    imageUrl: 'https://img.freepik.com/free-photo/chocolate-cocoa-cake-slice-served-with-mint-leaves_114579-904.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Red Velvet Cake',
    cuisine: 'Dessert',
    rating: 4.9,
    deliveryTime: '35 mins',
    cost: '₹550',
    imageUrl: 'https://img.freepik.com/free-photo/red-velvet-cake-slices-with-yellof-cherry-top-mint-leaves_114579-2593.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Vanilla Sponge Cake',
    cuisine: 'Dessert',
    rating: 4.6,
    deliveryTime: '30 mins',
    cost: '₹400',
    imageUrl: 'https://img.freepik.com/premium-photo/lemon-elderflower-cake-with-elderflower-buttercream-lemon-zest-garnish_1230902-15705.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Black Forest Cake',
    cuisine: 'Dessert',
    rating: 4.7,
    deliveryTime: '45 mins',
    cost: '₹600',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-delicious-chocolate-cake-concept_23-2148769271.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Cheesecake',
    cuisine: 'Dessert',
    rating: 4.8,
    deliveryTime: '50 mins',
    cost: '₹650',
    imageUrl: 'https://img.freepik.com/free-photo/classic-cheesecake-with-strawberry-cherry-slices_140725-3241.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Strawberry Shortcake',
    cuisine: 'Dessert',
    rating: 4.7,
    deliveryTime: '30 mins',
    cost: '₹450',
    imageUrl: 'https://img.freepik.com/premium-photo/strawberry-cake-with-strawberries-cream-plate_1057389-106898.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Lemon Drizzle Cake',
    cuisine: 'Dessert',
    rating: 4.6,
    deliveryTime: '35 mins',
    cost: '₹480',
    imageUrl: 'https://img.freepik.com/free-photo/close-up-decorated-lemon-cake-slice-white-plate-with-spoon_23-2147972719.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Carrot Cake',
    cuisine: 'Dessert',
    rating: 4.8,
    deliveryTime: '40 mins',
    cost: '₹500',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-carrot-cake-with-cream_23-2150727528.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Tiramisu Cake',
    cuisine: 'Dessert',
    rating: 4.9,
    deliveryTime: '45 mins',
    cost: '₹600',
    imageUrl: 'https://img.freepik.com/free-photo/side-view-tiramisu-cake-topped-with-chocolate-sprinkles-table_140725-10212.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Blueberry Cheesecake',
    cuisine: 'Dessert',
    rating: 4.9,
    deliveryTime: '50 mins',
    cost: '₹650',
    imageUrl: 'https://img.freepik.com/premium-photo/sweet-cheesecake-with-blue-berry-wooden-table_1337460-38444.jpg?uid=R154150191&ga=GA1.1.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Orange Blast Juice',
    cuisine: 'Juice',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹120',
    imageUrl: 'https://img.freepik.com/free-photo/fresh-orange-juice-glass-marble-background_1150-45567.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mango Magic Juice',
    cuisine: 'Juice',
    rating: 4.9,
    deliveryTime: '25 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/free-photo/delicious-mango-still-life_23-2151542230.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Watermelon Cooler Juice',
    cuisine: 'Juice',
    rating: 4.7,
    deliveryTime: '15 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/free-photo/watermelon-juice-wooden-table_501050-929.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pineapple Paradise Juice',
    cuisine: 'Juice',
    rating: 4.8,
    deliveryTime: '30 mins',
    cost: '₹130',
    imageUrl: 'https://img.freepik.com/free-photo/pineapple-fresh-table_140725-5382.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Strawberry Delight Juice',
    cuisine: 'Juice',
    rating: 4.9,
    deliveryTime: '20 mins',
    cost: '₹140',
    imageUrl: 'https://img.freepik.com/free-photo/strawberry-cocktail_1150-18531.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Apple Crush Juice',
    cuisine: 'Juice',
    rating: 4.6,
    deliveryTime: '25 mins',
    cost: '₹110',
    imageUrl: 'https://img.freepik.com/free-photo/front-view-fresh-apple-juice-inside-can-with-fresh-apple-dark-bar-fruit-drink-photo-cocktail-color_140725-92812.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mixed Berry Fusion Juice',
    cuisine: 'Juice',
    rating: 4.7,
    deliveryTime: '18 mins',
    cost: '₹160',
    imageUrl: 'https://img.freepik.com/free-photo/arrangement-with-forest-fruits-smoothie_23-2148545365.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Grapefruit Sunrise Juice',
    cuisine: 'Juice',
    rating: 4.5,
    deliveryTime: '20 mins',
    cost: '₹130',
    imageUrl: 'https://img.freepik.com/free-photo/grapefruit-fresh-table_140725-4734.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Lemon Zing Juice',
    cuisine: 'Juice',
    rating: 4.8,
    deliveryTime: '15 mins',
    cost: '₹120',
    imageUrl: 'https://img.freepik.com/premium-photo/glass-lemonade-with-lemon-slices-wooden-tray_1023064-41295.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Peach Perfection Juice',
    cuisine: 'Juice',
    rating: 4.6,
    deliveryTime: '25 mins',
    cost: '₹140',
    imageUrl: 'https://img.freepik.com/free-photo/high-angle-peach-milkshake-with-straws_23-2148707783.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Kiwi Quencher Juice',
    cuisine: 'Juice',
    rating: 4.7,
    deliveryTime: '20 mins',
    cost: '₹130',
    imageUrl: 'https://img.freepik.com/free-photo/kiwi-fresh-with-kiwi-slice-table_140725-6684.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Pomegranate Punch Juice',
    cuisine: 'Juice',
    rating: 4.9,
    deliveryTime: '18 mins',
    cost: '₹150',
    imageUrl: 'https://img.freepik.com/premium-photo/pomegranate-juice-with-studio-background_741910-49431.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Coconut Cooler Juice',
    cuisine: 'Juice',
    rating: 4.8,
    deliveryTime: '20 mins',
    cost: '₹100',
    imageUrl: 'https://img.freepik.com/free-photo/coconut-cocktail-with-straw-tropical-drink_144627-42780.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Green Detox Juice',
    cuisine: 'Juice',
    rating: 4.7,
    deliveryTime: '25 mins',
    cost: '₹170',
    imageUrl: 'https://img.freepik.com/premium-photo/refreshing-green-juice-with-vibrant-leaflets_1135715-12675.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
  {
    name: 'Mint Mojito Juice',
    cuisine: 'Juice',
    rating: 4.9,
    deliveryTime: '20 mins',
    cost: '₹140',
    imageUrl: 'https://img.freepik.com/premium-photo/glass-cold-mint-drink_1346048-59843.jpg?uid=R154150191&ga=GA1.2.990051736.1723114380&semt=ais_hybrid',
  },
];
//Assuming indianDishes is imported or defined above this component

const OfferConfirmation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Filter the dishes based on the search term
  const filteredDishes = indianDishes.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = (dish) => {
    const originalPrice = parseFloat(dish.cost.replace('₹', ''));
    const discountedPrice = originalPrice * 0.8; // Applying 20% discount

    // Add the discounted item to the selected items list
    setSelectedItems((prevItems) => [...prevItems, { ...dish, discountedPrice: discountedPrice.toFixed(2) }]);
    // Update the total price with the discounted price
    setTotalPrice((prevTotal) => prevTotal + discountedPrice);
  };

  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    // Remove the discounted price from the total
    setTotalPrice((prevTotal) => prevTotal - parseFloat(itemToRemove.discountedPrice));
    // Remove the item from the selected items list
    setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleSubmitOrder = () => {
    alert(`Order placed! Total amount: ₹${totalPrice.toFixed(2)}`);
    setSelectedItems([]); // Clear the order after submission
    setTotalPrice(0);
  };

  return (
    <div className="offer-confirmation">
      <h1>Offers</h1>
      <h2 className="discount-message">🎉 Enjoy 20% OFF on All Dishes! 🎉</h2>

      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="dishes-container">
        {filteredDishes.map((dish) => {
          const originalPrice = parseFloat(dish.cost.replace('₹', ''));
          const discountedPrice = (originalPrice * 0.8).toFixed(2); // 20% discount

          return (
            <div className="dish-card" key={dish.name}>
              <img src={dish.imageUrl} alt={dish.name} className="dish-image" />
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>Cuisine: {dish.cuisine}</p>
                <p>Rating: {dish.rating} ⭐</p>
                <p>Delivery Time: {dish.deliveryTime}</p>
                <p>
                  Cost: ₹{discountedPrice}{' '}
                  <span className="original-price">₹{originalPrice.toFixed(2)}</span>
                </p>
                <button className="add-to-order-button" onClick={() => handleAddItem(dish)}>
                  Add to Order
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.discountedPrice}
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        <button onClick={handleSubmitOrder} disabled={selectedItems.length === 0}>
          Place Order
        </button>
      </div>

      <button onClick={() => window.history.back()} className="go-back-button">Go Back</button>
    </div>
  );
};

export default OfferConfirmation;