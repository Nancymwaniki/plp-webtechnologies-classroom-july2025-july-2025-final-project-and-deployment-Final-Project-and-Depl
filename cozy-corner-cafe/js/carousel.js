document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('image-carousel');
    const images = carouselContainer.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    const intervalTime = 4000; // Change image every 4 seconds

    function updateCarousel() {
        images.forEach(img => img.classList.remove('active'));

        currentIndex = (currentIndex + 1) % images.length;
        
        images[currentIndex].classList.add('active');
    }

    images.forEach((img, index) => {
        if (index === 0) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
    
    setInterval(updateCarousel, intervalTime);
});