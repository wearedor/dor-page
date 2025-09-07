// Cookie Consent Management
class CookieConsent {
    constructor() {
        this.cookieName = 'dor_cookie_consent';
        this.consentBanner = document.getElementById('cookie-consent');
        this.acceptBtn = document.getElementById('accept-cookies');
        this.rejectBtn = document.getElementById('reject-cookies');
        
        this.initialize();
    }

    initialize() {
        // Only show banner if no consent decision has been made
        if (!this.getCookiePreference()) {
            this.showBanner();
        } else if (this.getCookiePreference() === 'accepted') {
            this.loadGoogleAnalytics();
        }

        // Add event listeners
        if (this.acceptBtn && this.rejectBtn) {
            this.acceptBtn.addEventListener('click', () => this.handleAccept());
            this.rejectBtn.addEventListener('click', () => this.handleReject());
        }
    }

    showBanner() {
        if (this.consentBanner) {
            // Force reflow to ensure the element is in the DOM before adding class
            this.consentBanner.style.display = 'block';
            this.consentBanner.offsetHeight;
            this.consentBanner.classList.add('show');
        }
    }

    hideBanner() {
        if (this.consentBanner) {
            this.consentBanner.classList.remove('show');
            // Wait for animation to complete before hiding
            setTimeout(() => {
                this.consentBanner.style.display = 'none';
            }, 300);
        }
    }

    setCookiePreference(value) {
        try {
            localStorage.setItem(this.cookieName, value);
            this.hideBanner();
            return true;
        } catch (e) {
            console.error('Error setting cookie preference:', e);
            return false;
        }
    }

    getCookiePreference() {
        return localStorage.getItem(this.cookieName);
    }

    handleAccept() {
        this.setCookiePreference('accepted');
        this.loadGoogleAnalytics();
    }

    handleReject() {
        this.setCookiePreference('rejected');
    }

    loadGoogleAnalytics() {
        // Only load GA if it hasn't been loaded already
        if (window.ga) return;

        // Create Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(script);

        // Initialize gtag function
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { dataLayer.push(arguments); };
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
    }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});
