/**
 * Our Contributions Carousel
 * Handles the carousel functionality for the Our Contributions section
 */

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.success-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (!carousel || cards.length === 0) return;
    
    let currentIndex = 0;
    let autoScrollInterval = null;
    let cardWidth = 0;
    let isAnimating = false;
    let scrollTimeout = null;
    const cardGap = 32; // 2rem gap between cards
    const autoScrollDelay = 5000; // 5 seconds
    const animationDuration = 300; // ms - should match CSS transition
    
    // Initialize the carousel
    function initCarousel() {
        updateCardWidth();
        createDots();
        setupEventListeners();
        startAutoScroll();
        updateNavigation();
        
        // Initial position
        goToSlide(0, false);
    }
    
    // Create dots for mobile navigation
    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = ''; // Clear existing dots
        Array.from(cards).forEach((_, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Update active dot and arrow states
    function updateNavigation() {
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Calculate the correct scroll position based on card width and gap
    function getScrollPosition(index) {
        return Math.round(index * (cardWidth + cardGap));
    }
    
    // Update card width based on current viewport
    function updateCardWidth() {
        if (cards.length > 0) {
            const card = cards[0];
            const style = window.getComputedStyle(card);
            const marginLeft = parseFloat(style.marginLeft) || 0;
            const marginRight = parseFloat(style.marginRight) || 0;
            cardWidth = card.offsetWidth + marginLeft + marginRight;
        }
        return cardWidth;
    }
    
    // Handle scroll end
    function handleScrollEnd() {
        isAnimating = false;
        updateNavigation();
        resetAutoScroll();
    }
    
    // Go to specific slide with smooth scrolling
    function goToSlide(index, animate = true) {
        // Prevent multiple rapid clicks
        if (isAnimating) return;
        
        // Update current index with bounds checking
        const totalSlides = cards.length;
        currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
        
        // Get the actual scroll position
        const scrollPosition = getScrollPosition(currentIndex);
        
        // Start animation
        isAnimating = true;
        
        // Clear any pending timeouts
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        // Scroll to the new position
        carousel.scrollTo({
            left: scrollPosition,
            behavior: animate ? 'smooth' : 'auto'
        });
        
        // Update navigation immediately for better UX
        updateNavigation();
        
        // Set a timeout to handle the end of the scroll
        scrollTimeout = setTimeout(() => {
            // Snap to the exact position in case of sub-pixel rendering issues
            carousel.scrollLeft = scrollPosition;
            handleScrollEnd();
        }, animate ? animationDuration + 50 : 0);
    }
    
    // Next slide with infinite loop
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide with infinite loop
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Auto-scroll functionality
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            if (!isAnimating) {
                nextSlide();
            }
        }, autoScrollDelay);
    }
    
    // Stop auto-scroll
    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }
    
    // Reset auto-scroll timer
    function resetAutoScroll() {
        if (!autoScrollInterval) {
            startAutoScroll();
        } else {
            // Just reset the timer without restarting
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => {
                if (!isAnimating) {
                    nextSlide();
                }
            }, autoScrollDelay);
        }
    }
    
    // Pause auto-scroll on hover
    function setupHoverPause() {
        if (!carousel) return;
        
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);
        
        // Also pause when interacting with navigation
        const navElements = [prevBtn, nextBtn];
        if (dotsContainer) {
            navElements.push(...dotsContainer.querySelectorAll('.carousel-dot'));
        }
        
        navElements.forEach(el => {
            if (el) {
                el.addEventListener('mouseenter', stopAutoScroll);
                el.addEventListener('mouseleave', startAutoScroll);
            }
        });
    }
    
    // Handle touch events for mobile swipe
    function setupTouchEvents() {
        if (!carousel) return;
        
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // Minimum distance to trigger slide change
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            stopAutoScroll();
        }, { passive: true });
        
        carousel.addEventListener('touchmove', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            // Prevent scrolling the page while swiping
            if (Math.abs(touchStartX - touchEndX) > 10) {
                e.preventDefault();
            }
        }, { passive: false });
        
        carousel.addEventListener('touchend', () => {
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            
            startAutoScroll();
        }, { passive: true });
    }
    
    // Handle keyboard navigation
    function setupKeyboardNavigation() {
        if (prevBtn) {
            prevBtn.addEventListener('keydown', (e) => {
                if (['Enter', ' '].includes(e.key)) {
                    e.preventDefault();
                    prevSlide();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('keydown', (e) => {
                if (['Enter', ' '].includes(e.key)) {
                    e.preventDefault();
                    nextSlide();
                }
            });
        }
        
        // Global keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        });
    }
    
    // Set up all event listeners
    function setupEventListeners() {
        // Navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide();
            });
        }
        
        // Touch events for mobile
        if ('ontouchstart' in window) {
            setupTouchEvents();
        }
        
        // Keyboard navigation
        setupKeyboardNavigation();
        
        // Pause on hover
        setupHoverPause();
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateCardWidth();
                goToSlide(currentIndex, false);
            }, 250);
        });
        
        // Handle scroll events to detect when animation is complete
        carousel.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleScrollEnd, animationDuration + 50);
        }, { passive: true });
    }
    
    // Initialize the carousel
    initCarousel();
});
