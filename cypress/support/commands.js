//const cypress = require("cypress")

// -- This is a parent command --
// Cypress.Commands.add('login', (usuario, senha) => {
//    cy.get('[data-test="username"]').type(usuario)
//    cy.get('[data-test="password"]').type(senha)
//    cy.get('[data-test="login-button"]').click()
//  })

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