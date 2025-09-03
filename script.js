// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Close menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
        });
    });

    // Smooth scrolling for navigation links
    navLinkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Check if it's an external link (not starting with #)
            if (!targetId.startsWith('#')) {
                // Allow normal navigation for external links
                return;
            }
            
            // Prevent default for anchor links only
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ items are now always expanded - no toggle functionality needed
    // FAQ styling and interactions are handled via CSS hover effects

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.backdropFilter = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .benefit, .faq-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hero button click handler
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            // Focus on the iframe to start the game
            const iframe = document.querySelector('.iframe-wrapper iframe');
            if (iframe) {
                iframe.focus();
                // Scroll to the iframe if not in view
                iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Add loading animation for iframe
    const iframe = document.querySelector('.iframe-wrapper iframe');
    if (iframe) {
        const wrapper = iframe.parentElement;
        
        // Create loading indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'iframe-loading';
        loadingDiv.innerHTML = `
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255,255,255,0.9);
                padding: 2rem;
                border-radius: 10px;
                text-align: center;
                font-size: 1.2rem;
                color: #667eea;
                z-index: 10;
            ">
                <div style="
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                "></div>
                Loading Game...
            </div>
        `;
        
        // Add CSS for loading animation
        const style = document.createElement('style');
        style.textContent = `
            .iframe-loading {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.1);
                border-radius: 15px;
                z-index: 5;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        wrapper.style.position = 'relative';
        wrapper.appendChild(loadingDiv);
        
        iframe.addEventListener('load', function() {
            setTimeout(() => {
                loadingDiv.remove();
            }, 1000);
        });
    }
});
