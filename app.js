// App state
let currentCategory = null;
let currentAffirmationIndex = 0;

// DOM elements
const homeScreen = document.getElementById('home-screen');
const affirmationScreen = document.getElementById('affirmation-screen');
const categoriesGrid = document.getElementById('categories-grid');
const backBtn = document.getElementById('back-btn');
const categoryTitle = document.getElementById('category-title');
const affirmationCounter = document.getElementById('affirmation-counter');
const affirmationText = document.getElementById('affirmation-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Initialize the app
function init() {
    renderCategories();
    setupEventListeners();
}

// Render category cards
function renderCategories() {
    categoriesGrid.innerHTML = '';
    
    affirmationCategories.forEach((category, index) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-name">${category.name}</div>
            <div class="category-description">${category.description}</div>
        `;
        
        card.addEventListener('click', () => {
            showAffirmationScreen(category);
        });
        
        categoriesGrid.appendChild(card);
    });
}

// Show affirmation screen for selected category
function showAffirmationScreen(category) {
    currentCategory = category;
    currentAffirmationIndex = 0;
    
    categoryTitle.textContent = category.name;
    updateAffirmationDisplay();
    
    // Switch screens
    homeScreen.classList.remove('active');
    affirmationScreen.classList.add('active');
}

// Show home screen
function showHomeScreen() {
    affirmationScreen.classList.remove('active');
    homeScreen.classList.add('active');
    currentCategory = null;
    currentAffirmationIndex = 0;
}

// Update affirmation display
function updateAffirmationDisplay() {
    if (!currentCategory) return;
    
    const affirmations = currentCategory.affirmations;
    affirmationText.textContent = affirmations[currentAffirmationIndex];
    affirmationCounter.textContent = `${currentAffirmationIndex + 1} of ${affirmations.length}`;
    
    // Update navigation button states
    prevBtn.disabled = currentAffirmationIndex === 0;
    nextBtn.disabled = currentAffirmationIndex === affirmations.length - 1;
}

// Navigate to previous affirmation
function navigatePrevious() {
    if (currentAffirmationIndex > 0) {
        currentAffirmationIndex--;
        updateAffirmationDisplay();
    }
}

// Navigate to next affirmation
function navigateNext() {
    if (currentCategory && currentAffirmationIndex < currentCategory.affirmations.length - 1) {
        currentAffirmationIndex++;
        updateAffirmationDisplay();
    }
}

// Setup event listeners
function setupEventListeners() {
    backBtn.addEventListener('click', showHomeScreen);
    prevBtn.addEventListener('click', navigatePrevious);
    nextBtn.addEventListener('click', navigateNext);
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (affirmationScreen.classList.contains('active')) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    navigatePrevious();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    navigateNext();
                    break;
                case 'Escape':
                    e.preventDefault();
                    showHomeScreen();
                    break;
            }
        }
    });
    
    // Add touch swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    const affirmationCard = document.getElementById('affirmation-card');
    
    affirmationCard.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    affirmationCard.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50; // Minimum distance for swipe
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swiped left - next affirmation
                navigateNext();
            } else {
                // Swiped right - previous affirmation
                navigatePrevious();
            }
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);