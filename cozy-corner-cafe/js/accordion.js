document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const content = header.nextElementSibling;
            
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                content.style.maxHeight = null;
                content.classList.remove('active');
                header.setAttribute('aria-expanded', 'false');
                
                header.querySelector('.icon').textContent = '+'; 
            } else {
                document.querySelectorAll('.accordion-content.active').forEach(activeContent => {
                    activeContent.style.maxHeight = null;
                    activeContent.classList.remove('active');
                    activeContent.previousElementSibling.setAttribute('aria-expanded', 'false');
                    activeContent.previousElementSibling.querySelector('.icon').textContent = '+'; 
                });

                content.style.maxHeight = content.scrollHeight + "px"; 
                content.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                header.querySelector('.icon').textContent = '−'; 
            }
        });
    });
});