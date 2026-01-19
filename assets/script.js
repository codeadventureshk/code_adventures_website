// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Language state
let currentLanguage = 'en';

// Language toggle with dynamic content switching
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('preferredLanguage', currentLanguage);
    updateLanguage();
    updateLangButton();
}

// Update all text content based on current language
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-zh]');
    
    elements.forEach(element => {
        if (currentLanguage === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-zh');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh';
    
    // Update page title
    if (currentLanguage === 'en') {
        document.title = 'Code Adventures - STEM Education Hong Kong';
    } else {
        document.title = 'Code Adventures - STEM教育香港';
    }
}

// Update language button text
function updateLangButton() {
    const langText = document.getElementById('langText');
    if (currentLanguage === 'en') {
        langText.textContent = '中文';
    } else {
        langText.textContent = 'EN';
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has a language preference in localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
        updateLangButton();
    } else {
        // Set default to English
        currentLanguage = 'en';
        updateLangButton();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.mission-card, .course-card, .strength-card, .objective-card, .module-card, .why-card, .timeline-item, .support-card, .founder-card, .philosophy-card, .vision-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
