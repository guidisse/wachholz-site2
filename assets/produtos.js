// Filtro de categorias de produtos
document.addEventListener('DOMContentLoaded', function() {
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const produtoCards = document.querySelectorAll('.produto-card');
    
    // Função para filtrar produtos por categoria
    function filtrarProdutos(categoria) {
        produtoCards.forEach(card => {
            if (categoria === 'todos') {
                card.style.display = 'block';
            } else if (card.getAttribute('data-categoria') === categoria) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Event listeners para os botões de categoria
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover classe active de todos os botões
            categoriaBtns.forEach(b => b.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar produtos
            const categoria = this.getAttribute('data-categoria');
            filtrarProdutos(categoria);
            
            // Animar a transição
            produtoCards.forEach(card => {
                card.classList.add('fade-transition');
                setTimeout(() => {
                    card.classList.remove('fade-transition');
                }, 500);
            });
        });
    });
    
    // Efeito hover nos cards de produto
    produtoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.produto-overlay').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.produto-overlay').style.opacity = '0';
        });
    });
    
    // Funcionalidade do botão "Ver Mais Produtos"
    const verMaisBtn = document.querySelector('.ver-mais-btn');
    if (verMaisBtn) {
        verMaisBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica para carregar mais produtos
            // Como é um protótipo, apenas simulamos uma mensagem
            
            this.textContent = 'Carregando...';
            
            setTimeout(() => {
                this.textContent = 'Mais produtos em breve';
                this.style.backgroundColor = 'var(--cor-destaque)';
                this.style.color = 'var(--cor-branco)';
                this.style.pointerEvents = 'none';
            }, 1500);
        });
    }
    
    // Funcionalidade dos botões "Adicionar ao Carrinho"
    const addCartBtns = document.querySelectorAll('.produto-btn');
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aqui seria implementada a lógica do carrinho
            // Como é um protótipo, apenas simulamos uma mensagem
            
            const originalText = this.textContent;
            this.textContent = 'Adicionado ✓';
            this.style.backgroundColor = 'var(--cor-verde-oliva)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = 'var(--cor-destaque)';
            }, 2000);
        });
    });
});

// Animação de entrada para os cards de produto
document.addEventListener('DOMContentLoaded', function() {
    const produtoCards = document.querySelectorAll('.produto-card');
    
    function animarCards() {
        produtoCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
                card.classList.add('active');
            }, 100 * index);
        });
    }
    
    // Iniciar animação após um pequeno delay
    setTimeout(animarCards, 300);
});

// Adicionar classe para transição suave
document.addEventListener('DOMContentLoaded', function() {
    const produtoCards = document.querySelectorAll('.produto-card');
    
    produtoCards.forEach(card => {
        card.classList.add('fade-in');
    });
    
    setTimeout(() => {
        produtoCards.forEach(card => {
            card.classList.add('active');
        });
    }, 100);
});
