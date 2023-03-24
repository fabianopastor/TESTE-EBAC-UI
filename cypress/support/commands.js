//const cypress = require("cypress")

// -- This is a parent command --

// cypress.Commands.add('adicionarProdutos', (produto)=> { 
//   cy.contains(produto).click()
//   cy.get('.btn_primary').click()
//   cy.get('[data-test="back-to-products"]').click()
//  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('titanic', (usuario, senha) => {
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.woocommerce-form > .button').click()
})

/*
Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
  cy.get('#reg_email').type(email)
  cy.get('#reg_password').type(senha)
  cy.get(':nth-child(4) > .button').click()

  cy.get('#account_first_name').type(nome)
  cy.get('#account_last_name').type(sobrenome)
  cy.get('.woocommerce-Button').click()

})  
*/

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, qtde) => {
  cy.get('[class="product-block grid"]').contains(produto).click()
  cy.get('.button-variable-item-'+tamanho).click()
  cy.get('.button-variable-item-'+cor).click()
  cy.get('.input-text').clear().type(qtde)
  cy.get('.single_add_to_cart_button').click()
  
})

