// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
});

// Loader
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.add('hidden');
    });
});

// Language Toggle Function
function toggleLanguage() {
    const body = document.body;
    if (body.classList.contains('lang-fr')) {
        body.classList.remove('lang-fr');
        body.classList.add('lang-ar');
        localStorage.setItem('preferred_lang', 'ar');
    } else {
        body.classList.remove('lang-ar');
        body.classList.add('lang-fr');
        localStorage.setItem('preferred_lang', 'fr');
    }
}

// Check saved language preference
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang === 'ar') {
        body = document.body;
        body.classList.remove('lang-fr');
        body.classList.add('lang-ar');
    }
});

// Form Submission handler
function handleSubmit(e) {
    e.preventDefault();
    const isAr = document.body.classList.contains('lang-ar');
    alert(isAr ? 'تم إرسال طلبكم بنجاح! سنتواصل معكم في أقرب وقت.' : 'Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.');
    e.target.reset();
}
