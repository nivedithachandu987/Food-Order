import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopularCuisines.css';

const cuisinesData = [
  { id: 1, name: 'Indian', icon: '🍛', route: '/cuisine/indian' },
  { id: 2, name: 'Italian', icon: '🍝', route: '/cuisine/italian' },
  { id: 3, name: 'Chinese', icon: '🥡', route: '/cuisine/chinese' },
  { id: 4, name: 'Mexican', icon: '🌮', route: '/cuisine/mexican' },
];

const PopularCuisines = () => {
  const navigate = useNavigate();

  const handleCuisineSelect = (route) => {
    navigate(route);
  };

  return (
    <section id="popular-cuisines" className="popular-cuisines"> {/* Added id attribute */}
      <h2>Popular Cuisines</h2>
      <div className="cuisine-cards">
        {cuisinesData.map(cuisine => (
          <div 
            key={cuisine.id} 
            className="cuisine-card" 
            onClick={() => handleCuisineSelect(cuisine.route)}
            role="button" 
            tabIndex={0} 
            onKeyPress={(e) => e.key === 'Enter' && handleCuisineSelect(cuisine.route)}
          >
            <span className="cuisine-icon">{cuisine.icon}</span>
            <span className="cuisine-name">{cuisine.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCuisines;
