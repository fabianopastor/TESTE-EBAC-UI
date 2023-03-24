///<reference types="cypress"/>
import faker from "faker";
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')  

        //login usando o suport > commands se torna um comando do cypress
        //cy.Titanic('aluno_ebac@teste.com','teste@teste.com')

        //login usando o fixture > dados no pefil.json
        cy.fixture('perfil').then(dadosUsuario => {
            cy.titanic(dadosUsuario.usuario, dadosUsuario.senha)
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        //usando o page-objects ... //elementos + acoes
        enderecoPage.editarEnderecoFaturamento( 'faker.name.firstName', 'Duartex','google','faker.address.county','faker.address.streetName', 'faker.address.streetAddress', 'faker.address.cityName', 'faker.address.city', 'faker.address.zipCode', '21970009142', 'faker.internet.email')
        cy.get('.woocommerce-message').should('contain','com sucesso.') 
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arq. de dados', () => {
        //usando o page-objects ... //elementos + acoes
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome, 
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].estado,
            dadosEndereco[1].cidade,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain','com sucesso.') 
    });

    //it.only('Deve fazer cadastro de faturamento com sucesso - usando arq. de dados', () => {
    //    //usando o page-objects ... //elementos + acoes
    //    enderecoPage.editarEnderecoFaturamento( faker.name.firstName, 'Duartex','google',faker.address.county,faker.address.streetName, faker.address.streetAddress, faker.address.cityName, faker.address.city, faker.address.zipCode, '21970009142', faker.internet.email)
    //    cy.get('.woocommerce-message').should('contain','com sucesso.') 
    //});


});