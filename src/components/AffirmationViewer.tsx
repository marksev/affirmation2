import React, { useState } from 'react';
import type { AffirmationCategory } from '../data/affirmationData';
import './AffirmationViewer.css';

interface AffirmationViewerProps {
  category: AffirmationCategory;
  onBack: () => void;
}

const AffirmationViewer: React.FC<AffirmationViewerProps> = ({ category, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAffirmation = () => {
    setCurrentIndex((prev) => 
      prev < category.affirmations.length - 1 ? prev + 1 : prev
    );
  };

  const prevAffirmation = () => {
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

  return (
    <div className="affirmation-viewer">
      <div className="viewer-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h2 className="category-title">{category.name}</h2>
        <div className="counter">
          {currentIndex + 1} of {category.affirmations.length}
        </div>
      </div>
      
      <div className="affirmation-container">
        <div className="affirmation-card">
          <p className="affirmation-text">
            {category.affirmations[currentIndex]}
          </p>
        </div>
      </div>

      <div className="navigation-controls">
        <button 
          className="nav-button" 
          onClick={prevAffirmation}
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>
        <button 
          className="nav-button" 
          onClick={nextAffirmation}
          disabled={currentIndex === category.affirmations.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default AffirmationViewer;