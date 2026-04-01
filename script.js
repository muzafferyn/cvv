document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    // Initial reveal elements
    const revealElements = document.querySelectorAll('.reveal-element');
    revealElements.forEach(el => {
        el.classList.add('reveal'); // Ensure base class is applied
        observer.observe(el);
    });

    // 3. Copy Email Functionality
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailToCopy = 'caglarcakmak0@icloud.com';

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailToCopy);
                const originalHtml = copyEmailBtn.innerHTML;

                // Show exact "Copied!" state from reference
                copyEmailBtn.innerHTML = '<span class="flex items-center gap-2 capitalize"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy size-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Copied!</span>';

                // Reset exactly after 3 seconds (3000ms) as requested
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalHtml;
                }, 3000);
            } catch (err) {
                console.error('Email kopyalanamadı:', err);
            }
        });
    }
});
