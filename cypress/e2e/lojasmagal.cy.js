///<reference types="cypress"/>
describe('Teste das Lojas Magal', () => {
    it('Visita a página inicial, seleciona o primeiro produto do dpto brinquedos e adiciona ao carrinho', () => {
      cy.visit('https://www.lojasmagal.com.br/brinquedos/bicicletas-e-triciclos')
    
      // Clica no primeiro produto na página
      cy.get('.list-product > :nth-child(1) > .product').click()

      // Clica no botão "Adicionar ao carrinho"  
      cy.get('#button-buy > .botao-commerce-img').click()

      // Verifica se o carrinho contém o produto adicionado
      cy.get('.sc-1u6d86l-2').contains('1 item')
    })
  })