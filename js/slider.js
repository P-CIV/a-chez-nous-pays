document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderDots = document.getElementById('sliderDots');
    const slides = document.querySelectorAll('.slide');

    if (!slider || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const slideWidth = slides[0]?.offsetWidth || 280;
    const gap = 20;
    const totalScroll = (slideWidth + gap) * slides.length;

    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        sliderDots.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        const scrollAmount = (slideWidth + gap) * index;
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        updateDots();
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            goToSlide(currentIndex);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            goToSlide(currentIndex);
        }
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Auto-slide every 6 seconds
    setInterval(() => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        goToSlide(currentIndex);
    }, 6000);
});
