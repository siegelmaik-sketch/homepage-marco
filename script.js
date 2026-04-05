document.addEventListener('DOMContentLoaded', function () {

    // ===== Mobile Navigation Toggle =====
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        // Animate hamburger
        this.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ===== Scroll Animations =====
    const fadeElements = document.querySelectorAll('.service-card, .highlight-card, .contact-item, .about-text');
    fadeElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    fadeElements.forEach(function (el) {
        observer.observe(el);
    });

    // ===== Contact Form Handling =====
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        // Build mailto link as fallback (no backend)
        const subject = encodeURIComponent('Anfrage über Website - ' + (data.service || 'Allgemein'));
        const body = encodeURIComponent(
            'Name: ' + data.name + '\n' +
            'E-Mail: ' + data.email + '\n' +
            'Telefon: ' + (data.phone || '-') + '\n' +
            'Leistung: ' + (data.service || '-') + '\n\n' +
            'Nachricht:\n' + data.message
        );

        window.location.href = 'mailto:info@gebaeude-glas-gras.de?subject=' + subject + '&body=' + body;

        // Show success message
        formSuccess.classList.add('show');
        form.reset();

        setTimeout(function () {
            formSuccess.classList.remove('show');
        }, 6000);
    });

    // ===== Navbar background on scroll =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
        }
    });

});