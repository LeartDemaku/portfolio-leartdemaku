// Translation and Language Switcher logic
const translations = {
    en: {
        home: "HOME",
        about: "ABOUT ME",
        services: "SERVICES",
        portfolio: "PROJECTS",
        contact: "CONTACT",
        heroTitle: "Hi, I'm Leart Demaku",
        profesion: "I craft high-performance, user-focused web experiences",
        exploreProjects: "Explore My Latest Work",
        aboutTitle: "About Me",
        aboutText: "I’m Leart Demaku, a web developer with solid knowledge of HTML, CSS, JavaScript, Python, and SQLite (SQL). I build modern, fast, and fully responsive websites with a strong focus on clear structure, performance, and excellent user experience. I prioritize clean, maintainable code and reliable functionality, paying close attention to detail. I also use modern AI tools to enhance efficiency and creativity in development.",
        AI: "AI Enthusiast",
        hireMe: "Let's Build Something",
        viewPortfolio: "View All Projects",
        servicesTitle: "Services",
        servicesText: "Custom Web Development",
        servicesCustom: "Building responsive, mobile-first websites with clean, semantic code. Focus on performance and accessibility while maintaining modern design standards.",
        servicesUIUX: "UI/UX Implementation",
        serviceselements: "Transforming design concepts into functional interfaces with pixel-perfect precision. Specializing in interactive elements and smooth animations.",
        servicesoptimization: "Responsive Optimization",
        servicespractice: "Ensuring flawless functionality across all devices. Performance optimization and cross-browser compatibility as standard practice.",
        portfolioTitle: "Featured Projects",
        portfolio1: "Web Platform 1",
        portfolio2: "Ximi Vogue known for its stylishly designed products at affordable prices",
        portfolio3: "Web Platform 3",
        portfolio4: "NEONTECH, committed to advancing technology through innovation.",
        portfolio5: "Web Platform 2",
        portfolio6: "Demo platform for a residential villa complex (AVANA VILLAS), created for educational purposes only. Not a real business.",
        portfolio7: "Web Platform 4",
        portfolio8: "Vantalyra is a platform for managing digital assets (Digital Asset Management – DAM), designed to centralize, organize, and secure documents and digital content within a structured and secure environment. ",
        portfolio9: "Web Platform 5",
        portfolio10: "PunaIme - A job listing platform designed to connect job seekers with potential employers in a user-friendly environment.",
        portfolio11: "Web Platform 1",
        portfolio12: "WorkPulse - is a practice web project that demonstrates a complete job application workflow, including user profiles, company profiles, and job listings. The project includes both frontend and backend, built to showcase application architecture and platform logic. Created for educational purposes only.",
        contactTitle: "Get in touch",
        contactName: "Full Name",
        contactMessage: "Message",
        sendMessage: "Get In Touch",
        formSuccessMessage: "Your message has been sent successfully! I'll get back to you soon.",
        formErrorMessage: "Oops! Something went wrong. Please try again.",
        formSending: "Sending...",
        footerText: "© Leart Demaku - Portfolio. All rights reserved.",
        footercontact: "Contact",
        themeDinner: "Dinner Mode",
        themeGray: "Gray Mode",
        dynamicTexts: ["I craft high-performance, user-focused web experiences", "Web Developer", "UI/UX implementation", "Web Implementation"]
    },
    al: {
        home: "KRYEFAQJA",
        about: "RRETH MEJE",
        services: "SHËRBIMET",
        portfolio: "PROJEKTET",
        contact: "KONTAKTO",
        heroTitle: "Përshëndetje, Unë jam Leart Demaku",
        profesion: "Unë krijoj përvoja uebi me performancë të lartë dhe të fokusuara te përdoruesi",
        exploreProjects: "Zbulo Punët e Mia",
        aboutTitle: "Rreth Meje",
        aboutText: "Jam Leart Demaku, zhillues uebi me njohuri solide në HTML, CSS, JavaScript, Python dhe SQLite (SQL). Ndërtoj faqe ueb moderne, të shpejta dhe plotësisht responsive, me fokus në strukturë të qartë, performancë dhe përvojë të shkëlqyer të përdoruesit. I kushtoj rëndësi kodit të pastër, funksionalitetit të qëndrueshëm dhe detajeve që përmirësojnë cilësinë e produktit. Gjithashtu përdori mjete moderne të inteligjencës artificiale për të rritur efikasitetin dhe kreativitetin në zhvillim.",
        AI: "Entuziast i AI",
        hireMe: "Bashkëpunoni me Mua",
        viewPortfolio: "Shiko Galerinë",
        servicesTitle: "Shërbimet",
        servicesText: "Zhvillimi i personalizuar i uebit",
        servicesCustom: "Ndërtimi i faqeve të internetit të përgjegjshme, të para për celularët, me kod të pastër semantik. Përqendrimi në performancën dhe aksesueshmërinë duke ruajtur standardet moderne të dizajnit.",
        servicesUIUX: "Zbatimi i UI/UX",
        serviceselements: "Transformimi i koncepteve të dizajnit në ndërfaqe funksionale me saktësi të përsosur piksel. Specializuar në elemente ndërvepruese dhe animacione të qetë.",
        servicesoptimization: "Optimizimi i përgjegjshëm",
        servicespractice: "Sigurimi i funksionalitetit të përsosur në të gjitha pajisjet. Optimizimi i performancës dhe përputhshmëria e ndërshfletuesve si praktikë standarde.",
        portfolioTitle: "Projektet e Veçuara",
        portfolio1: "Ueb Platforma 6",
        portfolio2: "Ximi Vogue e njohur për produktet e saj të dizajnuara me stil dhe me çmime të përballueshme.",
        portfolio3: "Ueb Platforma 3",
        portfolio4: "NEONTECH, e përkushtuar ndaj përparimit të teknologjisë përmes inovacionit.",
        portfolio5: "Ueb Platforma 2",
        portfolio6: "Platformë demo për një kompleks vilash rezidenciale (AVANA VILLAS), e krijuar vetëm për qëllime mësimore. Nuk përfaqëson biznes real.",
        portfolio7: "Ueb Platforma 4",
        portfolio8: "Vantalyra është një platformë për menaxhimin e aseteve digjitale (Digital Asset Management – DAM), e projektuar për të centralizuar, organizuar dhe siguruar dokumentet dhe përmbajtjet digjitale në një mjedis të strukturuar dhe të sigurt.",
        portfolio9: "Ueb Platforma 5",
        portfolio10: "K-Secret (projekt konceptual) - Uebfaqe e krijuar për të ilustruar dizajn modern dhe prezantim produktesh kozmetike, e realizuar vetëm si projekt personal/portfolio.",
        portfolio11: "Ueb Platforma 1",
        portfolio12: "WorkPulse - është një projekt praktik web që demonstron një workflow të plotë aplikimi për punë, duke përfshirë profile përdoruesish, profile kompanish dhe lista vendesh pune. Projekti përfshin frontend dhe backend, i ndërtuar për të shfaqur arkitekturë aplikacioni dhe logjikë platforme. I krijuar vetëm për qëllime mësimore.",
        contactTitle: "Kontakto",
        contactName: "Emri i plotë",
        contactMessage: "Mesazhi",
        sendMessage: "Më Kontaktoni",
        formSuccessMessage: "Mesazhi juaj është dërguar me sukses! Do t'ju kthej përgjigje së shpejti.",
        formErrorMessage: "Ops! Diçka shkoi keq. Ju lutemi provoni përsëri.",
        formSending: "Duke dërguar...",
        footerText: "© Leart Demaku - Portfolio. Të gjitha të drejtat e rezervuara.",
        footercontact: "Kontakto",
        themeDinner: "Modaliteti i Darkës",
        themeGray: "Modaliteti i Hirtë",
        dynamicTexts: ["Unë krijoj përvoja uebi me performancë të lartë", "Zhvillues Uebi", "Zbatimi i UI/UX", "Implementimi i Uebit"]
    }
};

let typed = null;

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    if (typed) {
        typed.destroy();
    }
    typed = new Typed('#typed', {
        strings: translations[lang].dynamicTexts || [translations[lang].profesion],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    document.querySelector('.current-lang').textContent = lang.toUpperCase();
}

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        changeLanguage(option.dataset.lang);
    });
});

// Theme Switcher Logic
function changeTheme(theme) {
    const themeIcon = document.querySelector('.theme-btn i');
    if (theme === 'gray') {
        document.body.classList.add('gray-mode');
        document.querySelector('.current-theme').setAttribute('data-key', 'themeGray');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
    } else {
        document.body.classList.remove('gray-mode');
        document.querySelector('.current-theme').setAttribute('data-key', 'themeDinner');
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // Re-trigger language update for the newly set data-key
    const currentLang = document.querySelector('.current-lang').textContent.toLowerCase();
    changeLanguage(currentLang);

    localStorage.setItem('selectedTheme', theme);
}

document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', () => {
        changeTheme(option.dataset.theme);
    });
});

// Initialize language and theme after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
    const savedTheme = localStorage.getItem('selectedTheme') || 'black';
    changeTheme(savedTheme);
});

// Services Section Observer
const servObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach((card) => {
    servObserver.observe(card);
});

document.querySelectorAll('.services-section .service-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotate(15deg) scale(1.1)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotate(0) scale(1)';
    });
});

// Contact Form Script
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const submitButton = document.getElementById('submitButton');
    const loadingButton = document.getElementById('loadingButton');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            submitButton.classList.add('d-none');
            loadingButton.classList.remove('d-none');
            formSuccess.style.display = 'none';
            formError.style.display = 'none';

            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    formSuccess.style.display = 'block';
                    contactForm.reset();
                    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    submitButton.classList.remove('d-none');
                    loadingButton.classList.add('d-none');

                    if (typeof gsap !== 'undefined') {
                        gsap.from(formSuccess, {
                            y: -20,
                            opacity: 0,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    }
                })
                .catch(error => {
                    formError.style.display = 'block';
                    console.error('Error:', error);
                    formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    submitButton.classList.remove('d-none');
                    loadingButton.classList.add('d-none');

                    if (typeof gsap !== 'undefined') {
                        gsap.from(formError, {
                            y: -20,
                            opacity: 0,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    }
                });
        });
    }
});

// AOS, Particles, and Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            disable: function () {
                return window.innerWidth < 768;
            }
        });
    }

    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80 },
                color: { value: '#f0c674' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3 },
                move: {
                    enable: true,
                    speed: 5,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const elementRect = targetElement.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const top = elementRect.top + scrollTop - navbarHeight;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// GSAP Animations
if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        document.querySelectorAll('section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }

    document.querySelectorAll('a.btn, button').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            gsap.to(this, { scale: 1.1, duration: 0.2 });
        });
        btn.addEventListener('mouseleave', function () {
            gsap.to(this, { scale: 1, duration: 0.2 });
        });
    });

    document.querySelectorAll('#about a.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            gsap.timeline()
                .to(this, { rotation: 360, scale: 1.5, duration: 0.7, ease: "elastic.out(1, 0.3)" })
                .to(this, { rotation: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)" });
        });
    });
}

// Weird Express code (kept as per request)
// Note: This won't work in the browser but is kept to maintain original state
/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(5000, '0.0.0.0', () => {
    console.log('Server running on port 5000');
});
*/
