// Gallery scroll animation 
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const gallery = document.querySelector('.gallery');
    
    if (galleryItems.length === 0 || !gallery) return;

    const firstTwoItems = Array.from(galleryItems).slice(0, 2);
    firstTwoItems.forEach((item, idx) => {
        const index = parseInt(item.getAttribute('data-index'));
        const delay = index * 0.2;
        item.style.setProperty('--animation-delay', `${delay}s`);
        item.classList.add('animate-in');
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-index'));
                
                if (index >= 2) {
                    
                    const delay = (index - 2) * 0.15;
                    
                    entry.target.style.setProperty('--animation-delay', `${delay}s`);
                    
                    
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, 50);
                    
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    Array.from(galleryItems).slice(2).forEach(item => {
        observer.observe(item);
    });

    document.addEventListener('mousemove', (e) => {
        if (!gallery.matches(':hover')) return;
        
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        gallery.style.setProperty('--mouse-x', `${x}%`);
        gallery.style.setProperty('--mouse-y', `${y}%`);
    });
});


