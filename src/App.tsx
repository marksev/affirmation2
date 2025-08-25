import { useState } from 'react';
import CategoryCard from './components/CategoryCard';
import AffirmationViewer from './components/AffirmationViewer';
import { affirmationCategories, type AffirmationCategory } from './data/affirmationData';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<AffirmationCategory | null>(null);

  const handleCategorySelect = (category: AffirmationCategory) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <AffirmationViewer 
        category={selectedCategory} 
        onBack={handleBack} 
      />
    );
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">Affirmation Categories</h1>
        <p className="app-subtitle">Choose a category to explore positive affirmations</p>
      </div>
      
      <div className="categories-grid">
        {affirmationCategories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
            onClick={() => handleCategorySelect(category)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
