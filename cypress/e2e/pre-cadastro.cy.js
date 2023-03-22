///<reference types="cypress"/>
var faker = require('faker');


describe('Funcionalidade Pre cadastro', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    }); 

    afterEach(() => {
        cy.screenshot()
    });


    it('Tentar Fazer um Pre cadastro com conta ja registrada', () => {
        cy.get('#reg_email').type('teste30@teste.com')
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-error > li').should('contain','Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
       
    });
    
    it.only('Tentar Fazer um Pre cadastro com conta nao registrada', () => {

        //funciona como uma VAR
        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Sempre o Msm')
        cy.get('#account_last_name').type('Naomudar')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.') 


       
    });
}); 