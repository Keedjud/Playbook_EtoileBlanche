// ========== PLAYBOOK ÉTOILE BLANCHE 2026 ==========
// Script de modernisation inspiré du site web et de la nouvelle DA

// ========== SMOOTH SCROLL NAVIGATION ==========
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.main-nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active link
            updateActiveNavLink(this);
        }
    });
});

// ========== ACTIVE NAVIGATION HIGHLIGHTING ==========
function updateActiveNavLink(clickedLink) {
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
    });
    clickedLink.classList.add('active');
}

// Highlight nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section[id]');
    const navHeight = document.querySelector('.main-nav').offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.main-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate cards on scroll
document.querySelectorAll('.principle, .vision-card, .day-card, .strategy-block').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========== STICKY NAV SHADOW ON SCROLL ==========
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.12)';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});

// ========== HERO VIDEO AUTOPLAY FIX ==========
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.play().catch(() => {
            // Autoplay prevented by browser
        });
    }
});

// ========== CARDS STAGGER ANIMATION ==========
// Add stagger effect to card grids
document.querySelectorAll('.key-principles, .vision-points, .calendar').forEach(grid => {
    const cards = grid.querySelectorAll('.principle, .vision-card, .day-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ========== CONSOLE LOG STYLÉ ==========
console.log(
    '%c✨ PLAYBOOK ÉTOILE BLANCHE 2026 ✨',
    'background: #B22234; color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; letter-spacing: 2px;'
);
console.log(
    '%cStratégie de Marque & Guide Opérationnel',
    'color: #B22234; font-size: 12px; letter-spacing: 1px;'
);
