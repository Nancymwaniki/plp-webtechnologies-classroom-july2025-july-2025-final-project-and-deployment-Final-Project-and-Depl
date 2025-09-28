document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const modalImage = document.getElementById('modal-image-view');
    const closeBtn = document.querySelector('.lightbox-modal .close-btn');

    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            const fullSrc = img.getAttribute('data-full-src');
            
            modalImage.src = fullSrc;
            modalImage.alt = img.alt;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    });

    const closeModal = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; 
    };

    closeBtn.addEventListener('click', closeModal);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('active')) {
            closeModal();
        }
    });
});