// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Language toggle
function toggleLanguage() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('python-class') || currentPage.includes('blockly-class')) {
        // For course pages, just toggle the button text
        const langText = document.getElementById('langText');
        langText.textContent = langText.textContent === '中文' ? 'EN' : '中文';
    } else {
        // For main pages, navigate between index.html and en.html
        if (currentPage.includes('en.html') || currentPage.endsWith('/en.html')) {
            window.location.href = 'index.html';
        } else {
            window.location.href = 'en.html';
        }
    }
}

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
document.querySelectorAll('.mission-card, .course-card, .strength-card, .objective-card, .module-card, .why-card, .timeline-item, .support-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
