function loadLanguageScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'languages.js';
        script.async = true;
        script.onload = () => {
            console.log('Language file loaded successfully');
            resolve();
        };
        script.onerror = () => {
            console.error('Error loading language file');
            reject();
        };
        document.body.appendChild(script);
    });
}

// Video configuration
const VIDEO_CONFIG = {
    main: {
        youtubeId: 'NcfqZRuRflI', // Your main demo video ID
        placeholder: 'video-placeholder',
        iframe: 'youtube-embed'
    },
    team: {
        youtubeId: '', // Add your team video ID here when available
        placeholder: 'team-video-placeholder',
        iframe: 'team-youtube-embed',
        fallback: 'no-video-message'
    }
};

// Initialize video functionality
function initializeVideos() {
    // Main demo video
    const mainVideoPlaceholder = document.getElementById(VIDEO_CONFIG.main.placeholder);
    if (mainVideoPlaceholder) {
        const playButton = mainVideoPlaceholder.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', () => playVideo('main'));
            // Also make the entire placeholder clickable
            mainVideoPlaceholder.addEventListener('click', () => playVideo('main'));
        }
    }

    // Team video
    const teamVideoPlaceholder = document.getElementById(VIDEO_CONFIG.team.placeholder);
    if (teamVideoPlaceholder) {
        const teamPlayButton = teamVideoPlaceholder.querySelector('.team-play-btn');
        if (teamPlayButton) {
            teamPlayButton.addEventListener('click', (e) => {
                e.stopPropagation();
                playVideo('team');
            });
            // Also make the entire placeholder clickable
            teamVideoPlaceholder.addEventListener('click', () => playVideo('team'));
        }
    }
}

// Play video function
function playVideo(videoType) {
    const config = VIDEO_CONFIG[videoType];

    if (!config) {
        console.error('Invalid video type:', videoType);
        return;
    }

    const placeholder = document.getElementById(config.placeholder);
    const iframe = document.getElementById(config.iframe);

    if (!placeholder || !iframe) {
        console.error('Video elements not found for type:', videoType);
        return;
    }

    // Check if we have a video ID
    if (!config.youtubeId) {
        // Show fallback message for team video if no video available
        if (videoType === 'team' && config.fallback) {
            const fallbackElement = document.getElementById(config.fallback);
            if (fallbackElement) {
                placeholder.classList.add('hidden');
                fallbackElement.classList.remove('hidden');
            }
        }
        return;
    }

    // Add loading state
    placeholder.classList.add('video-loading');

    // Set the YouTube embed URL
    const embedUrl = `https://www.youtube.com/embed/${config.youtubeId}?autoplay=1&rel=0`;
    const iframeElement = iframe.querySelector('iframe');

    if (iframeElement) {
        iframeElement.src = embedUrl;

        // Wait a moment then switch to video
        setTimeout(() => {
            placeholder.classList.add('hidden');
            iframe.classList.remove('hidden');
            placeholder.classList.remove('video-loading');
        }, 500);
    }
}

// Reset team video to photo
function resetTeamVideo() {
    const config = VIDEO_CONFIG.team;
    const placeholder = document.getElementById(config.placeholder);
    const iframe = document.getElementById(config.iframe);
    const fallback = document.getElementById(config.fallback);

    if (placeholder) placeholder.classList.remove('hidden');
    if (iframe) {
        iframe.classList.add('hidden');
        const iframeElement = iframe.querySelector('iframe');
        if (iframeElement) iframeElement.src = '';
    }
    if (fallback) fallback.classList.add('hidden');
}

// Make resetTeamVideo available globally for the button
window.resetTeamVideo = resetTeamVideo;

document.addEventListener('DOMContentLoaded', async function () {
    try {
        await loadLanguageScript();
        // Only initialize language after script is loaded
        if (typeof addTranslationAttributes === 'function' && typeof changeLanguage === 'function') {
            // Default language is English per requirements
            let currentLang = localStorage.getItem('language') || 'en';

            // Add data-i18n attributes to elements that need translation
            addTranslationAttributes();

            // If saved language is not English, apply translations
            if (currentLang !== 'en') {
                changeLanguage(currentLang);
            }

            // Initialize language toggle button
            const languageToggle = document.getElementById('language-toggle');
            if (languageToggle) {
                languageToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';

                // Add event to change language
                languageToggle.addEventListener('click', function () {
                    const newLang = localStorage.getItem('language') === 'en' ? 'es' : 'en';
                    changeLanguage(newLang);
                });
            }

            console.log('Language initialization completed');
        } else {
            console.error('Translation functions are not available');
        }
    } catch (error) {
        console.error('Error in language initialization:', error);
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Change hamburger to X
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (navMenu && navMenu.classList.contains('active') &&
            !event.target.closest('.nav-menu') &&
            !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');

            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const target = this.dataset.target;

            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    if (dots.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener('click', function () {
                const index = parseInt(this.dataset.index);
                showTestimonial(index);
            });
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            showTestimonial(newIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        });
    }

    // Auto rotate testimonials
    setInterval(function () {
        if (testimonials.length > 1) {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        }
    }, 8000);

    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Form validation
    const demoForm = document.getElementById('demo-form');
    const formSuccess = document.getElementById('form-success');

    if (demoForm) {
        demoForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const businessType = document.getElementById('business-type');

            // Reset error messages
            document.querySelectorAll('.form-error').forEach(error => error.textContent = '');

            // Validate name
            if (name.value.trim() === '') {
                document.getElementById('name-error').textContent = 'Please enter your name';
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                isValid = false;
            }

            // Validate phone
            if (phone.value.trim() === '') {
                document.getElementById('phone-error').textContent = 'Please enter your phone number';
                isValid = false;
            }

            // Validate business type
            if (businessType.value === '') {
                document.getElementById('business-type-error').textContent = 'Please select your business type';
                isValid = false;
            }

            // If valid, show success message
            if (isValid) {
                demoForm.style.display = 'none';
                formSuccess.classList.remove('hidden');

                // In a real application, you would send the form data to a server here
                console.log('Form submitted successfully');
            }
        });
    }

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Cookie consent
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');

    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');

    if (!cookieChoice && cookieConsent) {
        // Show cookie consent after 2 seconds
        setTimeout(function () {
            cookieConsent.style.display = 'block';
        }, 2000);

        // Handle accept
        if (cookieAccept) {
            cookieAccept.addEventListener('click', function () {
                localStorage.setItem('cookieChoice', 'accepted');
                cookieConsent.style.display = 'none';
            });
        }

        // Handle decline
        if (cookieDecline) {
            cookieDecline.addEventListener('click', function () {
                localStorage.setItem('cookieChoice', 'declined');
                cookieConsent.style.display = 'none';
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');

                        const spans = mobileMenuBtn.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                }
            }
        });
    });

    // Placeholder images for demo
    const logoImg = document.getElementById('logo');
    if (logoImg && logoImg.src.includes('logo.png')) {
        logoImg.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" fill="%230078d7"/><path d="M30,40 L40,30 L60,30 L70,40 L70,60 L60,70 L40,70 L30,60 Z" fill="white"/><circle cx="50" cy="50" r="10" fill="white"/></svg>';
    }

    // Create placeholder images for all images without src
    document.querySelectorAll('img').forEach(img => {
        if (!img.src || img.src === window.location.href) {
            const width = img.width || 300;
            const height = img.height || 200;
            img.src = `https://via.placeholder.com/${width}x${height}/0078d7/FFFFFF?text=OsitoPolar`;
        }
    });

    // Initialize videos after all other initialization
    setTimeout(() => {
        initializeVideos();
        console.log('Video functionality initialized');
    }, 100);
});