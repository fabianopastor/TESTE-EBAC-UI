///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

describe('Fazer login no portal de teste Ebac', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/")
    }); 

   // afterEach(() => {
   //    cy.screenshot()
   //});
    

    it('Deve fazer login com sucesso', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, ')
       
    });


    it('Deve fazer login com sucesso - Usando arq. de dados', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        
    });


    it('Deve fazer login com sucesso - Usando fixture', () => {
       cy.fixture('perfil').then(dados => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
       })
        
    });


    it('Fazer login com senha invalido', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('!@#@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','Erro:')
       
    });

    it('Fazer login com usuario invalido', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type('aluno_!@#@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro')
       
    });


});    
