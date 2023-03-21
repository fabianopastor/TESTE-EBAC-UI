///<reference types="cypress"/>

describe('Fazer login no portal de teste Ebac', () => {
    it('Fazer login com sucesso', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/")
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, ')
       
    });

    it('Fazer login com senha invalido', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/")
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('!@#@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','Erro:')
       
    });

    it('Fazer login com usuario invalido', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/")
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_!@#@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li > :nth-child(1)').should('','Erro')
       
    });


});    
