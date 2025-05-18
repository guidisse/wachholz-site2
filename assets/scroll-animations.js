// Script para animações baseadas em scroll

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que devem ser animados
    const animateElements = document.querySelectorAll('.animate-on-scroll, .fade-in-text, .reveal-text, .title-highlight, .stagger-lines, .stagger-grid, .zoom-in-image, .animate-button');
    
    // Adiciona classes de animação aos elementos principais do site
    addAnimationClasses();
    
    // Verifica quais elementos estão visíveis na inicialização
    checkVisibility();
    
    // Adiciona o evento de scroll para verificar a visibilidade durante a navegação
    window.addEventListener('scroll', checkVisibility);
    
    // Função para verificar quais elementos estão visíveis na viewport
    function checkVisibility() {
        animateElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Função para verificar se um elemento está na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && 
            rect.bottom >= 0
        );
    }
    
    // Função para adicionar classes de animação aos elementos do site
    function addAnimationClasses() {
        // Animação para o título principal
        const mainTitle = document.querySelector('.hero h1');
        if (mainTitle) {
            mainTitle.classList.add('reveal-text');
        }
        
        // Animação para o manifesto na hero
        const manifesto = document.querySelector('.hero .manifesto');
        if (manifesto) {
            manifesto.classList.add('fade-in-text');
            manifesto.classList.add('delay-300');
        }
        
        // Animação para o botão CTA
        const ctaButton = document.querySelector('.hero .cta-button');
        if (ctaButton) {
            ctaButton.classList.add('animate-button');
            ctaButton.classList.add('delay-500');
        }
        
        // Animação para títulos de seção
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.classList.add('title-highlight');
            title.classList.add('animate-on-scroll');
        });
        
        // Animação para textos introdutórios
        const introTexts = document.querySelectorAll('.intro-text');
        introTexts.forEach(text => {
            text.classList.add('fade-in-text');
            text.classList.add('animate-on-scroll');
        });
        
        // Animação para grids
        const grids = document.querySelectorAll('.sobre-grid, .perfil-grid, .servicos-grid, .produtos-grid, .instagram-grid');
        grids.forEach(grid => {
            grid.classList.add('stagger-grid');
        });
        
        // Animação para cards de serviço
        const servicoCards = document.querySelectorAll('.servico-card');
        servicoCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.classList.add(`delay-${(index % 3) * 100 + 100}`);
        });
        
        // Animação para cards de produto
        const produtoCards = document.querySelectorAll('.produto-card');
        produtoCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.classList.add(`delay-${(index % 3) * 100 + 100}`);
        });
        
        // Animação para depoimentos
        const depoimentos = document.querySelectorAll('.depoimento-destaque');
        depoimentos.forEach(depo => {
            depo.classList.add('fade-in-text');
            depo.classList.add('animate-on-scroll');
        });
        
        // Animação para parágrafos
        const paragraphs = document.querySelectorAll('section p:not(.intro-text):not(.manifesto)');
        paragraphs.forEach(p => {
            p.classList.add('fade-in-text');
            p.classList.add('animate-on-scroll');
        });
        
        // Animação para imagens
        const images = document.querySelectorAll('.hero-image img, .instagram-image');
        images.forEach(img => {
            img.classList.add('zoom-in-image');
        });
        
        // Animação para formulário de contato
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.classList.add('animate-on-scroll');
            group.classList.add('from-bottom');
            group.classList.add(`delay-${index * 100 + 100}`);
        });
        
        // Animação para botão de envio do formulário
        const submitButton = document.querySelector('.submit-button');
        if (submitButton) {
            submitButton.classList.add('animate-button');
            submitButton.classList.add('delay-500');
        }
        
        // Animação para itens de contato
        const contatoItems = document.querySelectorAll('.contato-item');
        contatoItems.forEach((item, index) => {
            item.classList.add('animate-on-scroll');
            item.classList.add('from-right');
            item.classList.add(`delay-${index * 100 + 200}`);
        });
        
        // Animação para categorias de produtos
        const categorias = document.querySelectorAll('.categoria-btn');
        categorias.forEach((cat, index) => {
            cat.classList.add('animate-on-scroll');
            cat.classList.add(`delay-${index * 50 + 100}`);
        });
    }
});
