/**
 * Cookie Consent Manager
 * Handles GDPR-compliant cookie consent and Google Analytics initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    const COOKIE_CONSENT_KEY = 'cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;
    const GA_MEASUREMENT_ID = 'G-ZQZ9PJ51JH';
    
    // DOM Elements
    const cookieBanner = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    
    // Initialize the banner
    function initCookieBanner() {
        const userConsent = getCookieConsent();
        
        // Show banner if no consent choice was made yet
        if (userConsent === null) {
            showBanner();
        } else if (userConsent === true) {
            // If previously accepted, initialize GA
            initializeGoogleAnalytics();
        }
        
        // Add event listeners if elements exist
        if (acceptButton) {
            acceptButton.addEventListener('click', handleAccept);
        }
        
        if (rejectButton) {
            rejectButton.addEventListener('click', handleReject);
        }
    }
    
    /**
     * Show the cookie consent banner with animation
     */
    function showBanner() {
        if (!cookieBanner) return;
        
        // Ensure the banner is visible before adding the visible class
        cookieBanner.style.display = 'flex';
        // Trigger reflow to enable animation
        void cookieBanner.offsetWidth;
        // Add visible class to trigger the animation
        cookieBanner.classList.add('visible');
    }
    
    /**
     * Hide the cookie consent banner with animation
     */
    function hideBanner() {
        if (!cookieBanner) return;
        
        cookieBanner.classList.remove('visible');
        // Wait for animation to complete before hiding
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 400); // Match this with the CSS transition duration
    }
    
    /**
     * Handle accept button click
     */
    function handleAccept() {
        setCookieConsent(true);
        hideBanner();
        initializeGoogleAnalytics();
    }
    
    /**
     * Handle reject button click
     */
    function handleReject() {
        setCookieConsent(false);
        hideBanner();
    }
    
    /**
     * Set cookie consent preference
     * @param {boolean} consent - Whether to accept cookies
     */
    function setCookieConsent(consent) {
        try {
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + COOKIE_EXPIRY_DAYS);
            
            const consentData = {
                accepted: consent,
                timestamp: new Date().toISOString(),
                version: '1.0'
            };
            
            // Store in localStorage
            localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
            
            // Also set a cookie as fallback
            document.cookie = `${COOKIE_CONSENT_KEY}=${consent}; ` +
                            `expires=${expiryDate.toUTCString()}; ` +
                            'path=/; ' +
                            'SameSite=Lax; ' +
                            'Secure';
            
            console.log(`Cookie consent ${consent ? 'accepted' : 'rejected'}`);
        } catch (error) {
            console.error('Error setting cookie consent:', error);
        }
    }
    
    /**
     * Get user's cookie consent preference
     * @returns {boolean|null} - true if accepted, false if rejected, null if no choice made
     */
    function getCookieConsent() {
        try {
            // Check localStorage first
            const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
            if (savedConsent) {
                const consentData = JSON.parse(savedConsent);
                return consentData.accepted;
            }
            
            // Fallback to cookie
            const cookieValue = document.cookie
                .split('; ')
                .find(row => row.startsWith(`${COOKIE_CONSENT_KEY}=`))
                ?.split('=')[1];
                
            return cookieValue === 'true' ? true : 
                   cookieValue === 'false' ? false : 
                   null;
            
        } catch (error) {
            console.error('Error getting cookie consent:', error);
            return null;
        }
    }
    
    /**
     * Initialize Google Analytics with the provided measurement ID
     */
    function initializeGoogleAnalytics() {
        if (typeof gtag === 'undefined') {
            console.warn('Google Analytics gtag.js not loaded');
            return;
        }
        
        try {
            window.dataLayer = window.dataLayer || [];
            
            // Configure Google Analytics with privacy-focused settings
            gtag('js', new Date());
            gtag('config', GA_MEASUREMENT_ID, {
                'anonymize_ip': true,
                'allow_google_signals': false,
                'allow_ad_personalization_signals': false
            });
            
            console.log('Google Analytics initialized with measurement ID:', GA_MEASUREMENT_ID);
            
        } catch (error) {
            console.error('Error initializing Google Analytics:', error);
        }
    }
    
    // Initialize the cookie banner
    initCookieBanner();
});
