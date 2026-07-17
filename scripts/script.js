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
        aboutText: "I’m Leart Demaku, a Full-Stack Web Developer focused on building modern, responsive, and high-performance web applications. I possess strong competencies in developing Frontend interfaces and creating APIs using Node.js & Express.js, integrated with SQL database architecture (SQLite & SQL Server) and Python. I apply advanced AI-Assisted Development and Prompt Engineering practices to optimize software development processes. I am driven by high standards of professional coding, structured version control with Git/GitHub, and building functional, user-experience-oriented solutions.",
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
        portfolio3: "Web Platform 4",
        portfolio4: "NEONTECH, committed to advancing technology through innovation.",
        portfolio5: "Web Platform 2",
        portfolio6: "Demo platform for a residential villa complex (AVANA VILLAS), created for educational purposes only. Not a real business.",
        portfolio7: "Web Platform 3",
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
        dynamicTexts: ["I craft high-performance, user-focused web experiences", "Web Developer", "UI/UX implementation", "Web Implementation"],
        viewCV: "View CV",
        cvTitle: "Leart Demaku \u2014 Curriculum Vitae",
        downloadCV: "Download",
        cvFallbackText: "Your browser cannot display this PDF.",
        aiHeaderName: "Leart's AI Assistant",
        aiStatus: "Online",
        aiPlaceholder: "Ask me anything about Leart...",
        aiQ1: "Who is Leart Demaku?",
        aiQ2: "What is his profession?",
        aiQ3: "What services does he offer?",
        aiQ4: "What projects has he built?",
        aiQ5: "What technologies does he use?",
        aiQ6: "How can I contact him?",
        aiWelcome: "Hi there! \ud83d\udc4b I'm Leart's AI Assistant. Ask me anything about Leart \u2014 his profession, skills, projects, services, or how to contact him.",
        aiFallback: "I'm not sure about that, but you can reach Leart at leart.demaku2006@gmail.com or through the Contact section. He'll be happy to answer! \ud83d\ude0a"
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
        aboutText: "Jam Leart Demaku, zhvillues uebi Full-Stack i fokusuar në ndërtimin e ueb-aplikacioneve moderne, responsive dhe të optimizuara për performancë të lartë. Zotëroj kompetenca në zhvillimin e ndërfaqeve Frontend dhe në krijimin e API-ve përmes Node.js & Express.js, të integruara me arkitekturën e databazave SQL (SQLite & SQL Server) dhe gjuhën Python. Aplikoj praktika të avancuara të AI-Assisted Development dhe Prompt Engineering për optimizimin e proceseve të zhvillimit softuerik. I orientuar drejt standardeve të larta të kodimit profesional, menaxhimit të strukturuar të kodeve me Git/GitHub dhe krijimit të zgjidhjeve funksionale të bazuara në përvojën e përdoruesit.",
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
        portfolio3: "Ueb Platforma 4",
        portfolio4: "NEONTECH, e përkushtuar ndaj përparimit të teknologjisë përmes inovacionit.",
        portfolio5: "Ueb Platforma 2",
        portfolio6: "Platformë demo për një kompleks vilash rezidenciale (AVANA VILLAS), e krijuar vetëm për qëllime mësimore. Nuk përfaqëson biznes real.",
        portfolio7: "Ueb Platforma 3",
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
        dynamicTexts: ["Un\u00eb krijoj p\u00ebrvoja uebi me performanc\u00eb t\u00eb lart\u00eb", "Zhvillues Uebi", "Zbatimi i UI/UX", "Implementimi i Uebit"],
        viewCV: "Shiko CV",
        cvTitle: "Leart Demaku \u2014 Curriculum Vitae",
        downloadCV: "Shkarko",
        cvFallbackText: "Shfletuesi juaj nuk mund t\u00eb shfaq\u00eb k\u00ebt\u00eb PDF.",
        aiHeaderName: "Asistenti AI i Leart-it",
        aiStatus: "Online",
        aiPlaceholder: "Pyete \u00e7do gj\u00eb rreth Leart-it...",
        aiQ1: "Kush \u00ebsht\u00eb Leart Demaku?",
        aiQ2: "\u00c7far\u00eb profesioni ka?",
        aiQ3: "\u00c7far\u00eb sh\u00ebrbimedsh ofron?",
        aiQ4: "\u00c7far\u00eb projektesh ka nd\u00ebrtuar?",
        aiQ5: "\u00c7far\u00eb teknologjish p\u00ebrdor?",
        aiQ6: "Si mund ta kontaktoj?",
        aiWelcome: "Pershëndetje! \ud83d\udc4b Unë jam Asistenti AI i Leart-it. Pyetëni \u00e7do gj\u00eb \u2014 profesioni, aftësitë, projektet, shërbimet ose si ta kontaktoni.",
        aiFallback: "Nuk jam i sigurt për këtë, por mund ta kontaktoni Leart-in direkt në leart.demaku2006@gmail.com ose n\u00ebpërmjet seksionit Kontakt. Do t\u02bc p\u00ebrgjigjet me gëzim! \ud83d\ude0a"
    }
};

let typed = null;

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    if (typeof Typed !== 'undefined') {
        if (typed) {
            typed.destroy();
        }
        const typedEl = document.querySelector('#typed');
        if (typedEl) {
            typed = new Typed('#typed', {
                strings: translations[lang].dynamicTexts || [translations[lang].profesion],
                typeSpeed: 100,
                backSpeed: 50,
                loop: true
            });
        }
    }

    const currentLangEl = document.querySelector('.current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = lang.toUpperCase();
    }
}

document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        changeLanguage(option.dataset.lang);
        const langOptions = document.querySelector('.lang-options');
        if (langOptions) langOptions.classList.remove('active');
    });
});

// Theme Switcher Logic
function changeTheme(theme) {
    const themeIcon = document.querySelector('.theme-btn i');
    const currentThemeEl = document.querySelector('.current-theme');
    if (theme === 'gray') {
        document.body.classList.add('gray-mode');
        if (currentThemeEl) {
            currentThemeEl.setAttribute('data-key', 'themeGray');
        }
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
    } else {
        document.body.classList.remove('gray-mode');
        if (currentThemeEl) {
            currentThemeEl.setAttribute('data-key', 'themeDinner');
        }
        if (themeIcon) {
            themeIcon.className = 'fas fa-moon';
        }
    }

    // Re-trigger language update for the newly set data-key
    const currentLangEl = document.querySelector('.current-lang');
    const currentLang = currentLangEl ? currentLangEl.textContent.trim().toLowerCase() : 'en';
    changeLanguage(currentLang);

    localStorage.setItem('selectedTheme', theme);
}

document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        changeTheme(option.dataset.theme);
        const themeOptions = document.querySelector('.theme-options');
        if (themeOptions) themeOptions.classList.remove('active');
    });
});

// Initialize language and theme after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');
    const langOptions = document.querySelector('.lang-options');
    if (langBtn && langOptions) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langOptions.classList.toggle('active');
            const themeOptions = document.querySelector('.theme-options');
            if (themeOptions) themeOptions.classList.remove('active');
        });
    }

    const themeBtn = document.querySelector('.theme-btn');
    const themeOptions = document.querySelector('.theme-options');
    if (themeBtn && themeOptions) {
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeOptions.classList.toggle('active');
            const langOptions = document.querySelector('.lang-options');
            if (langOptions) langOptions.classList.remove('active');
        });
    }

    document.addEventListener('click', () => {
        const langOpts = document.querySelector('.lang-options');
        const themeOpts = document.querySelector('.theme-options');
        if (langOpts) langOpts.classList.remove('active');
        if (themeOpts) themeOpts.classList.remove('active');
    });

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

function openCVModal() {
    const modal = document.getElementById('cvModal');
    const iframe = document.getElementById('cvIframe');
    const fallback = document.getElementById('cvFallback');

    if (!modal) return;

    if (!iframe.src || iframe.src === window.location.href) {
        iframe.src = 'CV/Leart_Demaku_CV.pdf';
    }

    iframe.style.display = 'block';
    fallback.classList.remove('visible');

    iframe.onload = function () {
        try {
            if (!iframe.contentDocument && !iframe.contentWindow) {
                iframe.style.display = 'none';
                fallback.classList.add('visible');
            }
        } catch (e) {
            // Cross-origin: PDF is loading normally
        }
    };

    modal.classList.add('active');
    document.body.classList.add('cv-open');
}

function closeCVModal() {
    const modal = document.getElementById('cvModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.classList.remove('cv-open');
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeCVModal();
    }
});

(function () {
    var KB = [
        {
            keys: ['who is leart', 'kush eshte leart', 'kush është leart', 'kush je', 'who are you', 'tell me about', 'introduce', 'prezanto', 'rreth leart', 'about leart'],
            en: "Leart Demaku is a passionate Full-Stack Web Developer based in Kosovo. He specializes in building modern, responsive, and high-performance web applications — from clean frontends to robust backend APIs. He combines technical precision with a strong sense of design, always delivering solutions that are both functional and visually compelling.",
            al: "Leart Demaku është një zhvillues uebi Full-Stack i pasionuar me bazë në Kosovë. Specializohet në ndërtimin e aplikacioneve moderne, responsive dhe me performancë të lartë — nga ndërfaqet e pastra frontend deri te API-t robuste backend. Kombinon saktësinë teknike me ndjenjën e fortë të dizajnit, duke ofruar gjithmonë zgjidhje funksionale dhe vizualisht tërheqëse."
        },
        {
            keys: ['profession', 'profesion', 'job', 'role', 'developer', 'zhvillues', 'what does he do', 'what do you do', 'cfare ben', 'çfarë bën', 'pune ka', 'çfarë profesioni'],
            en: "Leart is a Full-Stack Web Developer. His core focus is on crafting modern frontend interfaces and scalable backend systems. He works professionally across the entire web stack — from pixel-perfect UI to database-driven APIs — with a commitment to clean code and outstanding user experience.",
            al: "Leart është Zhvillues Uebi Full-Stack. Fokusi i tij kryesor është ndërtimi i ndërfaqeve moderne frontend dhe sistemeve backend të shkallëzueshme. Punon profesionalisht në të gjithë stack-un e uebit — nga UI i saktë piksel deri te API-t e bazuara në databazë — me angazhim ndaj kodit të pastër dhe përvojës së shkëlqyer të përdoruesit."
        },
        {
            keys: ['service', 'sherbim', 'shërbim', 'offer', 'ofron', 'provide', 'what can', 'cfare ofron', 'çfarë ofron'],
            en: "Leart offers three core services:\n\n🔹 Custom Web Development — Responsive, mobile-first websites built with clean semantic code and modern standards.\n\n🔹 UI/UX Implementation — Transforming design concepts into polished, interactive interfaces with smooth animations.\n\n🔹 Responsive Optimization — Ensuring flawless performance across all devices and browsers.",
            al: "Leart ofron tre shërbime kryesore:\n\n🔹 Zhvillim i Personalizuar i Uebit — Faqe interneti responsive, mobile-first me kod semantik të pastër dhe standarde moderne.\n\n🔹 Implementim i UI/UX — Transformimi i koncepteve të dizajnit në ndërfaqe të lëmuara dhe ndërvepruese me animacione të qetë.\n\n🔹 Optimizim Responsive — Sigurimi i funksionalitetit të përsosur në të gjitha pajisjet dhe shfletuesit."
        },
        {
            keys: ['project', 'projekt', 'portfolio', 'built', 'ndertoi', 'ndërtoi', 'platform', 'aplikacion', 'what projects', 'çfarë projektesh', 'cilat projekte'],
            en: "Leart has built 6 professional web platforms:\n\n🚀 WorkPulse — Full job application platform with user & company profiles\n🏡 Avana Villas — Residential villa complex demo platform\n🗂️ Vantalyra — Digital Asset Management (DAM) system\n💡 NeonTech — Technology innovation landing page\n💄 K-Secret — Skincare brand concept website\n👗 Ximi Vogue — Fashion e-commerce platform\n\nAll projects are live in the Projects section.",
            al: "Leart ka ndërtuar 6 platforma profesionale uebi:\n\n🚀 WorkPulse — Platformë e plotë aplikimi për punë me profila përdoruesish & kompanish\n🏡 Avana Villas — Platformë demo për kompleks vilash rezidenciale\n🗂️ Vantalyra — Sistem i Menaxhimit të Aseteve Digjitale (DAM)\n💡 NeonTech — Faqe kryesore inovacioni teknologjik\n💄 K-Secret — Faqe konceptuale për markë kozmetike\n👗 Ximi Vogue — Platformë e-commerce mode\n\nTë gjitha projektet janë live në seksionin Projektet."
        },
        {
            keys: ['tech', 'teknologji', 'stack', 'language', 'gjuhe', 'gjuhë', 'skill', 'aftesi', 'aftësi', 'tool', 'framework', 'expertise', 'ekspertize', 'html', 'css', 'javascript', 'node', 'python', 'sql', 'çfarë teknologjish', 'what technologies'],
            en: "Leart's full technology stack:\n\n🎨 Frontend: HTML5, CSS3, JavaScript (ES6+), Responsive Design, Flexbox, Grid\n\n⚙️ Backend: Node.js & Express.js\n\n🗄️ Databases: SQLite & SQL Server\n\n🐍 Programming: Python\n\n🔧 Tools: Git & GitHub, Figma, Adobe XD, GSAP\n\n🤖 AI: AI-Assisted Development & Prompt Engineering",
            al: "Stack-u i plotë teknologjik i Leart-it:\n\n🎨 Frontend: HTML5, CSS3, JavaScript (ES6+), Dizajn Responsive, Flexbox, Grid\n\n⚙️ Backend: Node.js & Express.js\n\n🗄️ Databaza: SQLite & SQL Server\n\n🐍 Programim: Python\n\n🔧 Mjete: Git & GitHub, Figma, Adobe XD, GSAP\n\n🤖 AI: Zhvillim i Asistuar nga AI & Inxhinieri e Prompt-eve"
        },
        {
            keys: ['contact', 'kontakt', 'hire', 'reach', 'email', 'social', 'linkedin', 'github', 'instagram', 'message', 'mesazh', 'si mund', 'get in touch', 'si ta kontaktoj'],
            en: "You can reach Leart through multiple channels:\n\n📧 Email: leart.demaku2006@gmail.com\n💼 LinkedIn: linkedin.com/in/leart-demaku-77023b299\n🐙 GitHub: github.com/LeartDemaku\n📸 Instagram: @leart_demaku\n\nOr fill out the Contact form on this portfolio — he responds promptly!",
            al: "Mund ta kontaktoni Leart-in përmes kanaleve të ndryshme:\n\n📧 Email: leart.demaku2006@gmail.com\n💼 LinkedIn: linkedin.com/in/leart-demaku-77023b299\n🐙 GitHub: github.com/LeartDemaku\n📸 Instagram: @leart_demaku\n\nOse plotësoni formularin Kontakt në këtë portfolio — përgjigjet shpejt!"
        },
        {
            keys: ['experience', 'eksperience', 'vjet', 'year', 'how long', 'sa vjet', 'background', 'sa eksperiencë'],
            en: "Leart has hands-on experience building real-world web applications across various domains — from job platforms and DAM systems to e-commerce and villa management portals. He continuously grows through practical projects, AI-assisted development, and staying current with modern web technologies.",
            al: "Leart ka eksperiencë praktike në ndërtimin e aplikacioneve uebi të botës reale në fusha të ndryshme — nga platformat e punës dhe sistemet DAM deri te e-commerce dhe portalet e menaxhimit të villave. Rritet vazhdimisht përmes projekteve praktike, zhvillimit të asistuar nga AI dhe qëndrimit aktual me teknologjitë moderne të uebit."
        },
        {
            keys: ['education', 'arsim', 'study', 'studime', 'school', 'shkolle', 'university', 'universiteti', 'learn', 'mesoi'],
            en: "Leart is a self-driven developer who has built his expertise through consistent hands-on practice and real-world projects. He applies AI-Assisted Development and Prompt Engineering to accelerate learning and deliver production-quality solutions.",
            al: "Leart është zhvillues i drejtuar nga vetja, i cili ka ndërtuar ekspertizën e tij përmes praktikës së vazhdueshme dhe projekteve reale. Aplikon Zhvillim të Asistuar nga AI dhe Inxhinieri Prompt për të përshpejtuar mësimdhënien dhe ofruar zgjidhje cilësore."
        },
        {
            keys: ['hello', 'hi', 'hey', 'hej', 'pershendetje', 'përshëndetje', 'mirëdita', 'miredita', 'tungjatjeta', 'ciao'],
            en: "Hello! 👋 I'm Leart's AI Assistant. I can tell you all about Leart Demaku — his profession, skills, projects, services, and how to get in touch. What would you like to know?",
            al: "Përshëndetje! 👋 Unë jam Asistenti AI i Leart-it. Mund t'ju tregoj gjithçka rreth Leart Demaku — profesionin, aftësitë, projektet, shërbimet dhe si ta kontaktoni. Çfarë dëshironi të dini?"
        },
        {
            keys: ['thank', 'faleminderit', 'thanks', 'shumë mirë', 'shume mire', 'great', 'nice', 'perfect', 'shkëlqyeshëm', 'shkelqyshem'],
            en: "You're very welcome! 😊 Feel free to ask anything else about Leart. I'm here to help!",
            al: "Ju lutem! 😊 Mos hezitoni të pyesni çdo gjë tjetër rreth Leart-it. Jam këtu për të ndihmuar!"
        }
    ];

    function getLang() {
        var el = document.querySelector('.current-lang');
        return el ? el.textContent.trim().toLowerCase() : 'en';
    }

    function getResponse(input) {
        var q = input.toLowerCase().trim();
        var lang = getLang();
        for (var i = 0; i < KB.length; i++) {
            for (var j = 0; j < KB[i].keys.length; j++) {
                if (q.includes(KB[i].keys[j])) {
                    return lang === 'al' ? KB[i].al : KB[i].en;
                }
            }
        }
        var t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : null;
        return t && t.aiFallback ? t.aiFallback : "I'm not sure about that. You can reach Leart at leart.demaku2006@gmail.com 😊";
    }

    function formatAnswer(text) {
        return text.replace(/\n/g, '<br>');
    }

    function appendMsg(text, who) {
        var box = document.getElementById('aiChatMessages');
        var icon = who === 'bot' ? '🤖' : '👤';
        var wrapper = document.createElement('div');
        wrapper.className = 'ai-msg ai-' + who;
        wrapper.innerHTML =
            '<div class="ai-msg-avatar">' + icon + '</div>' +
            '<div class="ai-msg-bubble">' + (who === 'bot' ? formatAnswer(text) : text) + '</div>';
        box.appendChild(wrapper);
        box.scrollTop = box.scrollHeight;
    }

    function showTyping() {
        var box = document.getElementById('aiChatMessages');
        var el = document.createElement('div');
        el.className = 'ai-msg ai-bot';
        el.id = 'aiTypingIndicator';
        el.innerHTML =
            '<div class="ai-msg-avatar">🤖</div>' +
            '<div class="ai-typing-bubble"><span class="ai-typing-dot"></span><span class="ai-typing-dot"></span><span class="ai-typing-dot"></span></div>';
        box.appendChild(el);
        box.scrollTop = box.scrollHeight;
    }

    function removeTyping() {
        var el = document.getElementById('aiTypingIndicator');
        if (el) el.remove();
    }

    function respond(question) {
        appendMsg(question, 'user');
        showTyping();
        setTimeout(function () {
            removeTyping();
            appendMsg(getResponse(question), 'bot');
        }, 700);
    }

    window.sendQuick = function (btn) {
        respond(btn.textContent.trim());
    };

    window.handleSend = function () {
        var input = document.getElementById('aiChatInput');
        var text = input.value.trim();
        if (!text) return;
        input.value = '';
        respond(text);
    };

    window.handleChatKey = function (e) {
        if (e.key === 'Enter') window.handleSend();
    };

    var chatOpen = false;
    window.toggleChat = function () {
        chatOpen = !chatOpen;
        var panel = document.getElementById('aiChatPanel');
        var iconOpen = document.getElementById('aiChatIconOpen');
        var iconClose = document.getElementById('aiChatIconClose');
        panel.classList.toggle('ai-panel-open', chatOpen);
        panel.setAttribute('aria-hidden', String(!chatOpen));
        iconOpen.style.display = chatOpen ? 'none' : 'inline';
        iconClose.style.display = chatOpen ? 'inline' : 'none';
        if (chatOpen && document.getElementById('aiChatMessages').childElementCount === 0) {
            setTimeout(function () {
                var lang = getLang();
                var t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : null;
                var msg = t && t.aiWelcome ? t.aiWelcome : "Hi there! 👋 I'm Leart's AI Assistant.";
                appendMsg(msg, 'bot');
            }, 300);
        }
        if (chatOpen) {
            setTimeout(function () {
                document.getElementById('aiChatInput').focus();
            }, 350);
        }
    };
}());