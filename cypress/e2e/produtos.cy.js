///<reference types="cypress"/>

describe('Teste de ponta a ponta em SauceLabs', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        //pegar o primeiro da lista
        //cy.get('[class="product-block grid"]').first().click() 
        
        //pegar o ultimo
        //cy.get('[class="product-block grid"]').last().click()
        
        //pegar o 4* da lista 
        cy.get('[class="product-block grid"]').eq(3).click()
        
    });

    it('Deve selecionar um produto ao carrinho', () => {
        var qtde = 3

        cy.get('[class="product-block grid"]').eq(8).click() 
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtde)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',qtde)
        cy.get('.woocommerce-message').should('contain', qtde + ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')

    });

    it.only('Deve selecionar um produto ao carrinho pelo command', () => {
               
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','M','Black', 3)

    });


}); 