<script>
// Add Bootstrap and Font Awesome if not already included
if (!document.querySelector('link[href*="bootstrap"]')) {
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);
}

if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
}

if (!document.querySelector('script[src*="bootstrap"]')) {
    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js';
    document.head.appendChild(bootstrapJS);
}

/* JavaScript for running scroll animations */
document.addEventListener('DOMContentLoaded', function() {
    // Page loader
    document.body.insertAdjacentHTML('afterbegin', '<div class="pageloader"><div class="loader"></div></div>');
    
    // Add wave backgrounds
    document.querySelectorAll('section').forEach(section => {
        section.insertAdjacentHTML('beforeend', '<div class="wave-bg"></div>');
    });
    
    // Video container click handler - Direct YouTube redirect
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        container.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
            
            // Open YouTube video in new tab
            window.open(youtubeUrl, '_blank');
        });
    });
    
    // Hide page loader after content loads
    setTimeout(() => {
        const pageloader = document.querySelector('.pageloader');
        if (pageloader) {
            pageloader.style.opacity = '0';
            setTimeout(() => pageloader.remove(), 500);
        }
    }, 1000);
});

// Reveal animations on scroll
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Initialize reveal on load
reveal();

// 3D tilt effect for cards
const tiltElements = document.querySelectorAll('.tilt');
tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const middleX = rect.width / 2;
        const middleY = rect.height / 2;
        
        const offsetX = ((x - middleX) / middleX) * 15;
        const offsetY = ((y - middleY) / middleY) * 15;
        
        element.style.transform = `perspective(1000px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg)`;
        
        const inner = element.querySelector('.tilt-inner');
        if(inner) {
            inner.style.transform = `translateZ(30px)`;
        }
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        const inner = element.querySelector('.tilt-inner');
        if(inner) {
            inner.style.transform = 'translateZ(0)';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
</script>
