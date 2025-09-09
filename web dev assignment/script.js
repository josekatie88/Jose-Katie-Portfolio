// ====== Mobile Menu Toggle ======
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ====== Smooth Scrolling ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        navLinks.classList.remove('active');
    });
});

// ====== Dynamic Year ======
document.getElementById('year').textContent = new Date().getFullYear();

// ====== GitHub Buttons ======
const githubURL = "https://github.com/josekatie88";

// Top "Visit GitHub" button
const githubBtn = document.getElementById('github-btn');
if (githubBtn) {
    githubBtn.addEventListener('click', () => {
        window.open(githubURL, '_blank');
    });
}

// All "GitHub Repo" buttons in projects
document.querySelectorAll('.btn').forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === 'github repo') {
        btn.addEventListener('click', () => {
            window.open(githubURL, '_blank');
        });
    }
});

// ====== Contact Form Validation ======
const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');

if (submitBtn && emailInput) {
    submitBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (emailPattern.test(email)) {
            alert('✅ Thank you! Your message has been sent.');
            emailInput.value = '';
        } else {
            alert('⚠️ Please enter a valid email address.');
        }
    });
}

// ====== Optional: Animate Project Cards ======
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});