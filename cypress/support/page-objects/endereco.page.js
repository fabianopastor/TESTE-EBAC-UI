class EnderecoPage{
    editarEnderecoFaturamento(nome, sobrenome, empresa,pais,endereco,numero,estado,cidade,cep,telefone,email){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit > .fa').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click()
       // cy.get('#select2-billing_country-container').type(pais).get('[aria-selected="true"]').click()
        cy.get('#select2-billing_country-container').click().type(pais+'{enter}') //simulando clicar no ENTER do teclado 
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().click().type(cidade+'{enter}')
        //cy.get('#select2-billing_state-container').type('Rio de Janeiro').get('[aria-selected="true"]').click()
        cy.get('#select2-billing_state-container').click().type(estado+'{enter}') //simulando clicar no ENTER do teclado 
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()
               
    }

    editarEnderecoEntrega(){
        //elementos + acoes
    }

}
export default new EnderecoPage()
