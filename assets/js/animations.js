// dør Landing Page - Enhanced Animations

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Initialize animations
    initScrollAnimations();
    initHeroAnimations();
    initStaggeredAnimations();
    initHoverEffects();
    initSmoothScrolling();
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.classList.add('reduced-motion');
    }
});

function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => observer.observe(element));
}

function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hero.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(hero);
}

function initStaggeredAnimations() {
    const grids = ['.services-grid', '.features-grid', '.testimonials-grid'];
    
    grids.forEach(selector => {
        const grid = document.querySelector(selector);
        if (!grid) return;
        
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.classList.add('animate-on-scroll');
        });
    });
}

function initHoverEffects() {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.service-card, .feature-card, .card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}
