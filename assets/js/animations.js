// dør Landing Page - Advanced Animations

// Counter Animation for Statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-count') || counter.textContent);
    const duration = 2000; // 2 seconds
    const start = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.floor(target * easedProgress);
        counter.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target.toLocaleString();
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Typewriter Effect for Hero Title
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter-effect');
    if (!typewriterElement) return;
    
    const text = typewriterElement.textContent;
    const speed = 100; // milliseconds per character
    
    typewriterElement.textContent = '';
    typewriterElement.style.borderRight = '3px solid #F26C3B';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Blinking cursor effect
            setTimeout(() => {
                typewriterElement.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 500);
}

// Parallax Effect for Hero Section
function initParallax() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled <= window.innerHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Stagger Animation for Grid Items
function initStaggeredAnimation() {
    const animateGrids = document.querySelectorAll('.services-grid, .features-grid, .testimonials-grid');
    
    animateGrids.forEach(grid => {
        const items = grid.children;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateGridItems(Array.from(items));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(grid);
    });
}

function animateGridItems(items) {
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Floating Animation for Service Icons
function initFloatingAnimation() {
    const floatingElements = document.querySelectorAll('.circle-icon');
    
    floatingElements.forEach((element, index) => {
        const delay = index * 0.5;
        element.style.animation = `float 3s ${delay}s ease-in-out infinite`;
    });
}

// Add floating keyframes to CSS
const floatingCSS = `
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
`;

// Inject floating CSS
function injectFloatingCSS() {
    const style = document.createElement('style');
    style.textContent = floatingCSS;
    document.head.appendChild(style);
}

// Magnetic Effect for Buttons
function initMagneticEffect() {
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const maxDistance = 50;
            const distance = Math.sqrt(x * x + y * y);
            
            if (distance < maxDistance) {
                const intensity = (maxDistance - distance) / maxDistance;
                const moveX = x * intensity * 0.3;
                const moveY = y * intensity * 0.3;
                
                button.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Text Reveal Animation
function initTextReveal() {
    const textElements = document.querySelectorAll('.reveal-text');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        // Wrap each character in a span
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px)';
            span.style.transition = `all 0.6s ease ${index * 0.05}s`;
            element.appendChild(span);
        });
        
        // Observer to trigger animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

// Progress Bar Animation for Skills/Features
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-width') || '100%';
                
                progressBar.style.width = '0%';
                progressBar.style.transition = 'width 2s ease-in-out';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 200);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Ripple Effect for Buttons
function initRippleEffect() {
    const rippleButtons = document.querySelectorAll('.btn');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const circle = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            
            const rect = button.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - rect.left - radius}px`;
            circle.style.top = `${e.clientY - rect.top - radius}px`;
            circle.classList.add('ripple');
            
            const existingRipple = button.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }
            
            button.appendChild(circle);
        });
    });
}

// Add ripple CSS
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.btn {
    position: relative;
    overflow: hidden;
}
`;

function injectRippleCSS() {
    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Inject CSS for animations
    injectFloatingCSS();
    injectRippleCSS();
    
    // Initialize animations with slight delays for better performance
    setTimeout(() => animateCounters(), 100);
    setTimeout(() => initTypewriter(), 200);
    setTimeout(() => initParallax(), 300);
    setTimeout(() => initStaggeredAnimation(), 400);
    setTimeout(() => initFloatingAnimation(), 500);
    setTimeout(() => initMagneticEffect(), 600);
    setTimeout(() => initTextReveal(), 700);
    setTimeout(() => initProgressBars(), 800);
    setTimeout(() => initRippleEffect(), 900);
});

// Performance monitoring
let animationFrameId;
const performanceMonitor = {
    fps: 0,
    lastTime: performance.now(),
    frameCount: 0,
    
    monitor() {
        const currentTime = performance.now();
        this.frameCount++;
        
        if (currentTime - this.lastTime >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
            this.frameCount = 0;
            this.lastTime = currentTime;
            
            // Disable animations if performance is poor
            if (this.fps < 30) {
                console.warn('Low FPS detected. Consider disabling animations.');
                // You could add logic here to disable heavy animations
            }
        }
        
        animationFrameId = requestAnimationFrame(() => this.monitor());
    },
    
    start() {
        this.monitor();
    },
    
    stop() {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    }
};

// Start performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    performanceMonitor.start();
}
