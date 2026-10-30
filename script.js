/**
 * EUROPA IMOBILIÁRIA — JAVASCRIPT PRINCIPAL
 * Interatividade, scroll dinâmico, validação de busca e integração com WhatsApp
 */

document.addEventListener('DOMContentLoaded', function () {
    
    // 1. HEADER DINÂMICO AO ROLAR A PÁGINA
    const navbar = document.getElementById('navbar-main');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. BOTÃO VOLTAR AO TOPO
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('d-none');
            backToTopBtn.classList.add('d-flex');
        } else {
            backToTopBtn.classList.remove('d-flex');
            backToTopBtn.classList.add('d-none');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. FORMULÁRIO DE BUSCA DE IMÓVEIS COM REDIRECIONAMENTO PARA WHATSAPP
    const formBusca = document.getElementById('formBusca');
    const telefoneWhatsApp = "5521999999999"; // Variável facilmente editável com o número real posteriormente

    formBusca.addEventListener('submit', function (e) {
        e.preventDefault();

        const tipoNegociacao = document.getElementById('tipoNegociacao').value;
        const tipoImovel = document.getElementById('tipoImovel').value;
        const qtdQuartos = document.getElementById('qtdQuartos').value;
        const localizacao = document.getElementById('localizacaoBusca').value.trim();

        // Montagem da mensagem personalizada para o WhatsApp
        let mensagem = `Olá! Gostaria de buscar um imóvel:\n`;
        mensagem += `• Negociação: *${tipoNegociacao}*\n`;
        mensagem += `• Tipo: *${tipoImovel}*\n`;
        mensagem += `• Quartos: *${qtdQuartos}*\n`;
        if (localizacao) {
            mensagem += `• Localização: *${localizacao}*\n`;
        }
        mensagem += `Poderia me enviar as opções disponíveis?`;

        const urlWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        
        // Abre o WhatsApp com a pesquisa formatada
        window.open(urlWhatsApp, '_blank');
    });

});

/**
 * Função global para clique em "Tenho interesse" nos cards de imóveis
 * @param {string} nomeImovel 
 */
function interesseImovel(nomeImovel) {
    const telefoneWhatsApp = "5521999999999";
    const mensagem = `Olá! Tenho interesse no imóvel *${nomeImovel}* apresentado no site da Europa Imobiliária. Poderia me passar mais detalhes?`;
    const urlWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(urlWhatsApp, '_blank');
}