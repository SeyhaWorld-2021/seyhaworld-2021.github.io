/* ==========================================
   SOEURM SEYHA - MAIN JAVASCRIPT
   Cold, Calm, Anime-Inspired Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCursor();
    initNavigation();
    initScrollReveal();
    initSkillBlocks();
    initPortfolioFilter();
    initContactForm();
    initCounters();
    initSmoothScroll();
    initVideoModal();
});

/* ==========================================
   VIDEO MODAL
   ========================================== */
function initVideoModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.getElementById('modal-close');
    const overlay = document.querySelector('.modal-overlay');
    const workCards = document.querySelectorAll('.work-card');

    if (!modal || !modalVideo) return;

    workCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoSource = card.querySelector('video source');

            if (videoSource) {
                // Set source and open modal
                modalVideo.src = videoSource.src;
                modal.classList.add('active');
                modalVideo.play();
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = "";
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ==========================================
   PRELOADER
   ========================================== */
function initPreloader() {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 3000);
    });

    // Fallback - hide preloader after max wait time
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 5000);
}

/* ==========================================
   CUSTOM CURSOR
   ========================================== */
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    if (!dot || !ring) return;

    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        dot.style.display = 'none';
        ring.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth animation
    function animateCursor() {
        // Dot follows closely
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;

        // Ring follows with more delay (anime-style)
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;

        dot.style.left = dotX + 'px';
        dot.style.top = dotY + 'px';
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .skill-block, .tool-card, .work-card');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('hover');
            ring.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            dot.classList.remove('hover');
            ring.classList.remove('hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
        ring.style.opacity = '0.5';
    });
}

/* ==========================================
   NAVIGATION
   ========================================== */
function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll effect - calm, subtle
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 80) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }

                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================
   SCROLL REVEAL
   ========================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-text');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Anime-style delayed reveal
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            }
        });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));

    // Parallax effect (subtle, calm)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        const decorCircle = document.querySelector('.decor-circle');
        if (decorCircle) {
            decorCircle.style.transform = `translateY(-50%) rotate(${scrolled * 0.02}deg)`;
        }
    });
}

/* ==========================================
   SKILL BLOCKS (Accordion)
   ========================================== */
function initSkillBlocks() {
    const blocks = document.querySelectorAll('.skill-block');

    blocks.forEach(block => {
        const header = block.querySelector('.skill-header');

        header.addEventListener('click', () => {
            // Close others
            blocks.forEach(b => {
                if (b !== block) {
                    b.classList.remove('active');
                }
            });

            // Toggle current
            block.classList.toggle('active');
        });
    });

    // Open first by default
    if (blocks.length > 0) {
        blocks[0].classList.add('active');
    }
}

/* ==========================================
   PORTFOLIO FILTER
   ========================================== */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter items with staggered animation
            workItems.forEach((item, index) => {
                const category = item.dataset.category;

                setTimeout(() => {
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        item.style.animation = 'fadeUp 0.6s var(--ease-out-expo) forwards';
                    } else {
                        item.classList.add('hidden');
                        item.style.animation = 'none';
                    }
                }, index * 80);
            });
        });
    });
}

/* ==========================================
   CONTACT FORM
   ========================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('.btn-submit');
        const originalLabel = btn.querySelector('.btn-label').textContent;

        // Loading state
        btn.disabled = true;
        btn.querySelector('.btn-label').textContent = 'Sending...';
        btn.style.opacity = '0.7';

        // Real submission using Fetch API
        const data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Success State
                btn.querySelector('.btn-label').textContent = 'Sent!';
                btn.querySelector('.btn-arrow').textContent = '✓';
                btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';

                setTimeout(() => {
                    form.reset();
                    btn.querySelector('.btn-label').textContent = originalLabel;
                    btn.querySelector('.btn-arrow').textContent = '→';
                    btn.style.background = '';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            } else {
                // Error State
                throw new Error('Network response was not ok.');
            }
        }).catch(error => {
            console.error('Error:', error);
            btn.querySelector('.btn-label').textContent = 'Error. Try Again.';
            btn.style.background = '#ef4444';

            setTimeout(() => {
                btn.querySelector('.btn-label').textContent = originalLabel;
                btn.style.background = '';
                btn.style.opacity = '1';
                btn.disabled = false;
            }, 3000);
        });
    });
}

/* ==========================================
   COUNTER ANIMATION
   ========================================== */
function initCounters() {
    const counters = document.querySelectorAll('.meta-num[data-count]');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                animateCounter(target, count);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);

        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, stepTime);
}

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================
   MICRO-INTERACTIONS
   ========================================== */

// Subtle jiggle on tool cards
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.animation = 'jiggle 0.4s ease';
    });

    card.addEventListener('animationend', function () {
        this.style.animation = '';
    });
});

// Add jiggle animation
const jiggleStyle = document.createElement('style');
jiggleStyle.textContent = `
    @keyframes jiggle {
        0%, 100% { transform: translateY(-4px) rotate(0deg); }
        25% { transform: translateY(-4px) rotate(1deg); }
        75% { transform: translateY(-4px) rotate(-1deg); }
    }
`;
document.head.appendChild(jiggleStyle);

// Magnetic button effect (subtle)
document.querySelectorAll('.btn-primary, .btn-submit').forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

// Console branding
console.log('%c SOEURM SEYHA ', 'background: linear-gradient(135deg, #0a4f76, #246bce); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;');
console.log('%c Creative Technologist ', 'color: #246bce; font-size: 12px;');
