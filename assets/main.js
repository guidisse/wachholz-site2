// Cursor personalizado
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Efeito hover em links e botões
    const links = document.querySelectorAll('a, button, .servico-card, .social-link, .slider-prev, .slider-next, .dot');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.borderColor = 'var(--cor-destaque)';
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = 'var(--cor-destaque)';
        });
    });
    
    // Esconder cursor em dispositivos móveis
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
    }
});

// Header scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        if (menuToggle.classList.contains('active')) {
            menuToggle.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
            menuToggle.querySelector('span:nth-child(2)').style.opacity = '0';
            menuToggle.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            menuToggle.querySelector('span:nth-child(1)').style.transform = 'none';
            menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
            menuToggle.querySelector('span:nth-child(3)').style.transform = 'none';
        }
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.querySelector('span:nth-child(1)').style.transform = 'none';
            menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
            menuToggle.querySelector('span:nth-child(3)').style.transform = 'none';
        });
    });
});

// Animações de entrada
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('active');
            }
        });
    }
    
    // Verificar elementos visíveis no carregamento inicial
    checkFade();
    
    // Verificar elementos visíveis durante o scroll
    window.addEventListener('scroll', checkFade);
});

// Slider de depoimentos
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.depoimento-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    // Esconder todos os slides exceto o primeiro
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // Função para mostrar um slide específico
    function showSlide(n) {
        // Esconder todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            dots[i].classList.remove('active');
        }
        
        // Mostrar o slide atual
        slides[n].style.display = 'block';
        dots[n].classList.add('active');
        currentSlide = n;
    }
    
    // Event listeners para os botões de navegação
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Autoplay do slider
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
});

// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui seria implementada a lógica de envio do formulário
        // Como é um protótipo, apenas simulamos o envio
        
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Mensagem enviada com sucesso!';
        submitButton.style.backgroundColor = 'var(--cor-verde-oliva)';
        
        setTimeout(function() {
            submitButton.textContent = originalText;
            submitButton.style.backgroundColor = 'var(--cor-destaque)';
            form.reset();
        }, 3000);
    });
});

// Efeito parallax suave
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    // Parallax na seção hero
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
    
    // Parallax nas imagens das seções
    const sectionImages = document.querySelectorAll('.section-image');
    sectionImages.forEach(image => {
        const sectionTop = image.parentElement.offsetTop;
        const sectionHeight = image.parentElement.offsetHeight;
        const distanceFromTop = scrollPosition - sectionTop;
        
        if (distanceFromTop > -sectionHeight && distanceFromTop < window.innerHeight) {
            image.style.transform = `translateY(${distanceFromTop * 0.05}px)`;
        }
    });
});

// Efeito de revelação de texto
document.addEventListener('DOMContentLoaded', function() {
    const textElements = document.querySelectorAll('.intro-text, .manifesto, .final-question');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let i = 0;
                    const interval = setInterval(() => {
                        if (i < text.length) {
                            element.textContent += text.charAt(i);
                            i++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 20);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
});

// Smooth scroll para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajuste para o header fixo
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Placeholder para Google Analytics
function initGoogleAnalytics() {
    // Código do Google Analytics seria inserido aqui
    console.log('Google Analytics inicializado');
}

// Placeholder para Meta Pixel
function initMetaPixel() {
    // Código do Meta Pixel seria inserido aqui
    console.log('Meta Pixel inicializado');
}

// Inicializar rastreamento quando o site estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar rastreamento apenas em produção
    if (window.location.hostname !== 'localhost') {
        initGoogleAnalytics();
        initMetaPixel();
    }
});
