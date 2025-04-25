function loadLanguageScript() {
    const script = document.createElement('script');
    script.src = 'languages.js';
    script.async = true;
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function() {
    loadLanguageScript();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
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
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') &&
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
        btn.addEventListener('click', function() {
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
            dot.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                showTestimonial(index);
            });
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = testimonials.length - 1;
            showTestimonial(newIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        });
    }

    // Auto rotate testimonials
    setInterval(function() {
        if (testimonials.length > 1) {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        }
    }, 8000);

    // Form validation
    const demoForm = document.getElementById('demo-form');
    const formSuccess = document.getElementById('form-success');

    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            let isValid = true;
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const telefono = document.getElementById('telefono');
            const tipoNegocio = document.getElementById('tipo-negocio');

            // Reset error messages
            document.querySelectorAll('.form-error').forEach(error => error.textContent = '');

            // Validate name
            if (nombre.value.trim() === '') {
                document.getElementById('nombre-error').textContent = 'Por favor, ingresa tu nombre';
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('email-error').textContent = 'Por favor, ingresa un email válido';
                isValid = false;
            }

            // Validate phone
            if (telefono.value.trim() === '') {
                document.getElementById('telefono-error').textContent = 'Por favor, ingresa tu teléfono';
                isValid = false;
            }

            // Validate business type
            if (tipoNegocio.value === '') {
                document.getElementById('tipo-negocio-error').textContent = 'Por favor, selecciona tu tipo de negocio';
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
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', function() {
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
        setTimeout(function() {
            cookieConsent.style.display = 'block';
        }, 2000);

        // Handle accept
        if (cookieAccept) {
            cookieAccept.addEventListener('click', function() {
                localStorage.setItem('cookieChoice', 'accepted');
                cookieConsent.style.display = 'none';
            });
        }

        // Handle decline
        if (cookieDecline) {
            cookieDecline.addEventListener('click', function() {
                localStorage.setItem('cookieChoice', 'declined');
                cookieConsent.style.display = 'none';
            });
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
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
});