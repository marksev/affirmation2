// Global variables for affirmation viewer
let currentCategory = '';
let currentAffirmations = [];
let currentIndex = 0;
let startY = 0;
let isDragging = false;
// Affirmation categories and data
const affirmationCategories = [
    'Self-Love',
    'Confidence',
    'Success',
    'Health',
    'Abundance',
    'Gratitude',
    'Relationships',
    'Healing',
    'Mindfulness',
    'Motivation',
    'Positivity',
    'Stress Relief'
];

const affirmations = {
    'Self-Love': [
        'I am worthy of love and respect.',
        'I accept myself as I am.',
        'My self-worth is not defined by others.',
        'I treat myself with kindness and compassion.',
        'I am enough just as I am.',
        'I honor my feelings and emotions.',
        'I forgive myself for past mistakes.',
        'I celebrate my unique qualities.'
    ],
    'Confidence': [
        'I believe in myself and my abilities.',
        'I am confident in what I do.',
        'I trust my instincts and decisions.',
        'I embrace challenges as opportunities to grow.',
        'I am capable of achieving my goals.',
        'I speak up for myself with confidence.',
        'I am proud of my accomplishments.',
        'I face each day with courage and determination.'
    ],
    'Success': [
        'I am creating the success I desire.',
        'Every step I take leads me closer to my goals.',
        'I attract opportunities for growth and success.',
        'I am persistent and resilient in pursuing my dreams.',
        'Success flows to me naturally.',
        'I learn from every experience and become stronger.',
        'I am worthy of achieving great things.',
        'My potential for success is limitless.'
    ],
    'Health': [
        'My body is strong and healthy.',
        'I make choices that support my wellbeing.',
        'I listen to my body and give it what it needs.',
        'I am grateful for my body and treat it with respect.',
        'Every cell in my body vibrates with energy and health.',
        'I nourish my body with healthy foods and movement.',
        'I am healing and becoming healthier each day.',
        'My mind and body work together in perfect harmony.'
    ],
    'Abundance': [
        'I am open to receiving abundance in all forms.',
        'Prosperity flows to me from multiple sources.',
        'I am grateful for all the abundance in my life.',
        'I attract wealth and success effortlessly.',
        'I deserve to live a life of abundance.',
        'Money comes to me easily and frequently.',
        'I am a magnet for positive opportunities.',
        'The universe provides for all my needs.'
    ],
    'Gratitude': [
        'I am grateful for this moment and all it offers.',
        'My heart is filled with appreciation and joy.',
        'I notice and appreciate the beauty around me.',
        'I am thankful for all the blessings in my life.',
        'Gratitude transforms my perspective and my life.',
        'I appreciate the people who support and love me.',
        'Every day brings new reasons to be grateful.',
        'I express gratitude for both challenges and gifts.'
    ],
    'Relationships': [
        'I attract loving and supportive relationships.',
        'I communicate with love and understanding.',
        'I am worthy of healthy, fulfilling relationships.',
        'I give and receive love freely.',
        'I set healthy boundaries in my relationships.',
        'I forgive others and release past hurts.',
        'I attract people who appreciate and value me.',
        'My relationships are based on mutual respect and trust.'
    ],
    'Healing': [
        'I am healing in all areas of my life.',
        'My body has the power to heal itself.',
        'I release what no longer serves me.',
        'Peace and healing energy flow through me.',
        'I am patient with my healing journey.',
        'Every breath brings me closer to wholeness.',
        'I trust in my body\'s wisdom and healing abilities.',
        'I am surrounded by love and healing energy.'
    ],
    'Mindfulness': [
        'I am present in this moment.',
        'I observe my thoughts without judgment.',
        'I breathe deeply and find peace within.',
        'I am aware of my thoughts, feelings, and surroundings.',
        'I accept what is and let go of what I cannot control.',
        'I find joy in simple, everyday moments.',
        'I am calm and centered in all situations.',
        'Mindfulness brings clarity and peace to my life.'
    ],
    'Motivation': [
        'I am motivated and inspired to take action.',
        'I have the energy and drive to pursue my goals.',
        'I am committed to my personal growth and success.',
        'Every day I take steps toward my dreams.',
        'I am disciplined and focused on what matters.',
        'I turn challenges into opportunities for growth.',
        'I am passionate about creating positive change.',
        'My motivation comes from within and never fades.'
    ],
    'Positivity': [
        'I choose to see the good in every situation.',
        'Positive energy radiates from me and attracts good things.',
        'I focus on solutions rather than problems.',
        'I maintain an optimistic outlook on life.',
        'I spread joy and positivity wherever I go.',
        'I attract positive people and experiences.',
        'My positive attitude creates positive outcomes.',
        'I choose happiness and joy in each moment.'
    ],
    'Stress Relief': [
        'I am calm and at peace.',
        'I release tension and embrace relaxation.',
        'I breathe slowly and let go of stress.',
        'I have the power to create inner peace.',
        'I handle challenges with grace and ease.',
        'I prioritize my mental and emotional wellbeing.',
        'I find healthy ways to manage stress.',
        'Calmness and tranquility flow through me.'
    ]
};

// Category descriptions
const categoryDescriptions = {
    'Self-Love': 'Embrace your worth and practice self-compassion',
    'Confidence': 'Build unshakeable belief in yourself',
    'Success': 'Attract achievement and prosperity',
    'Health': 'Nurture your physical and mental wellbeing',
    'Abundance': 'Open yourself to life\'s infinite possibilities',
    'Gratitude': 'Cultivate appreciation for life\'s blessings',
    'Relationships': 'Create meaningful connections with others',
    'Healing': 'Restore balance and wholeness',
    'Mindfulness': 'Find peace in the present moment',
    'Motivation': 'Ignite your inner drive and passion',
    'Positivity': 'Choose optimism and joy',
    'Stress Relief': 'Find calm in life\'s storms'
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    createCategoryCards();
    setupAffirmationViewer();
});

function createCategoryCards() {
    const grid = document.getElementById('categoriesGrid');
    
    affirmationCategories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-category', category);
        
        card.innerHTML = `
            <h2>${category}</h2>
            <p>${categoryDescriptions[category]}</p>
        `;
        
        card.addEventListener('click', () => openAffirmationViewer(category));
        grid.appendChild(card);
    });
}

function openAffirmationViewer(category) {
    currentCategory = category;
    currentAffirmations = affirmations[category] || [];
    currentIndex = 0;
    
    const viewer = document.getElementById('affirmationViewer');
    const title = document.getElementById('viewerTitle');
    
    title.textContent = category;
    
    // Create progress indicators
    createProgressIndicators();
    
    // Display first affirmation
    displayCurrentAffirmation();
    
    // Show the viewer
    viewer.style.display = 'block';
    
    // Add slide-in animation
    setTimeout(() => {
        viewer.style.opacity = '1';
    }, 10);
}

function createProgressIndicators() {
    const progressContainer = document.getElementById('progressIndicator');
    progressContainer.innerHTML = '';
    
    currentAffirmations.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (index === currentIndex) {
            dot.classList.add('active');
        }
        progressContainer.appendChild(dot);
    });
}

function displayCurrentAffirmation() {
    const content = document.getElementById('affirmationContent');
    const affirmation = currentAffirmations[currentIndex];
    
    content.innerHTML = `<p class="affirmation-text">${affirmation}</p>`;
    
    // Update progress indicators
    updateProgressIndicators();
}

function updateProgressIndicators() {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function navigateToAffirmation(direction) {
    if (direction === 'next' && currentIndex < currentAffirmations.length - 1) {
        currentIndex++;
        displayCurrentAffirmation();
        animateSlide('up');
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
        displayCurrentAffirmation();
        animateSlide('down');
    }
}

function animateSlide(direction) {
    const slide = document.getElementById('affirmationSlide');
    slide.classList.remove('slide-up', 'slide-down');
    
    // Trigger reflow
    slide.offsetHeight;
    
    if (direction === 'up') {
        slide.classList.add('slide-up');
    } else {
        slide.classList.add('slide-down');
    }
}

function closeAffirmationViewer() {
    const viewer = document.getElementById('affirmationViewer');
    viewer.style.display = 'none';
}

function setupAffirmationViewer() {
    const viewer = document.getElementById('affirmationViewer');
    const backBtn = document.getElementById('backBtn');
    const container = document.getElementById('affirmationContainer');
    
    // Back button event
    backBtn.addEventListener('click', closeAffirmationViewer);
    
    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (viewer.style.display === 'block') {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    navigateToAffirmation('prev');
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    navigateToAffirmation('next');
                    break;
                case 'Escape':
                    closeAffirmationViewer();
                    break;
            }
        }
    });
    
    // Touch/swipe events
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Mouse events for desktop
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
}

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
    isDragging = true;
}

function handleTouchMove(event) {
    if (!isDragging) return;
    event.preventDefault();
}

function handleTouchEnd(event) {
    if (!isDragging) return;
    
    const endY = event.changedTouches[0].clientY;
    const deltaY = startY - endY;
    const threshold = 50;
    
    if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
            // Swiped up - next affirmation
            navigateToAffirmation('next');
        } else {
            // Swiped down - previous affirmation
            navigateToAffirmation('prev');
        }
    }
    
    isDragging = false;
}

function handleMouseDown(event) {
    startY = event.clientY;
    isDragging = true;
    event.preventDefault();
}

function handleMouseMove(event) {
    if (!isDragging) return;
    event.preventDefault();
}

function handleMouseUp(event) {
    if (!isDragging) return;
    
    const endY = event.clientY;
    const deltaY = startY - endY;
    const threshold = 50;
    
    if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
            navigateToAffirmation('next');
        } else {
            navigateToAffirmation('prev');
        }
    }
    
    isDragging = false;
}

function handleWheel(event) {
    if (document.getElementById('affirmationViewer').style.display === 'block') {
        event.preventDefault();
        
        if (event.deltaY > 0) {
            navigateToAffirmation('next');
        } else {
            navigateToAffirmation('prev');
        }
    }
}