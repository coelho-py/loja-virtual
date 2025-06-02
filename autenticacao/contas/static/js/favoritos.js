const listaItensDiv = document.getElementById('lista-itens');
const totalItensSpan = document.getElementById('total-itens');
const totalGeralSpan = document.getElementById('total-geral');
const limparCarrinhoBtn = document.getElementById('limpar-carrinho');
const finalizarCompraBtn = document.getElementById('finalizar-compra');
const produtosExemploDiv = document.getElementById('produtos-exemplo');
const carrinhoVazioMensagem = document.querySelector('.carrinho-vazio-mensagem');


let carrinho = [];

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = "JSON".parse(carrinhoSalvo);
    }
    renderizarCarrinho();
}


function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function renderizarCarrinho() {
    listaItensDiv.innerHTML = ''; 
    let totalItens = 0;
    let totalGeral = 0;

    if (carrinho.length === 0) {
        carrinhoVazioMensagem.style.display = 'block'; 
    } else {
        carrinhoVazioMensagem.style.display = 'none'; 
        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');
            itemDiv.innerHTML = `
                <h4>${item.nome}</h4>
                <span>Quant: ${item.quantidade}</span>
                <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                <button data-id="${item.id}">Remover</button>
            `;
            listaItensDiv.appendChild(itemDiv);

            totalItens += item.quantidade;
            totalGeral += item.preco * item.quantidade;
        });
    }

    totalItensSpan.textContent = totalItens;
    totalGeralSpan.textContent = totalGeral.toFixed(2);
    salvarCarrinho(); 
}


function adicionarAoCarrinho(id, nome, preco) {
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }
    renderizarCarrinho();
}


function removerDoCarrinho(id) {
    const itemIndex = carrinho.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        if (carrinho[itemIndex].quantidade > 1) {
            carrinho[itemIndex].quantidade--;
        } else {
            carrinho.splice(itemIndex, 1); 
        }
    }
    renderizarCarrinho();
}


if (produtosExemploDiv) {
    produtosExemploDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('adicionar-ao-carrinho')) {
            const button = event.target;
            const id = parseInt(button.dataset.id);
            const nome = button.dataset.nome;
            const preco = parseFloat(button.dataset.preco);
            adicionarAoCarrinho(id, nome, preco);
        }
    });
}


listaItensDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Remover') {
        const id = parseInt(event.target.dataset.id);
        removerDoCarrinho(id);
    }
});

if (limparCarrinhoBtn) {
    limparCarrinhoBtn.addEventListener('click', () => {
        carrinho = []; 
        renderizarCarrinho();
        alert('Carrinho limpo!');
    });
}


if (finalizarCompraBtn) {
    finalizarCompraBtn.addEventListener('click', () => {
        if (carrinho.length === 0) {
            alert('Seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
            return;
        }
        alert('Compra finalizada! (Lógica de processamento de pagamento viria aqui)');
        carrinho = []; 
        renderizarCarrinho();
    });
}

document.addEventListener('DOMContentLoaded', carregarCarrinho);