import React from 'react';
import type { AffirmationCategory } from '../data/affirmationData';
import './CategoryCard.css';

interface CategoryCardProps {
  category: AffirmationCategory;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <h3 className="category-name">{category.name}</h3>
      <p className="category-description">{category.description}</p>
    </div>
  );
};

export default CategoryCard;