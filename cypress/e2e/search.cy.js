/// <reference types="cypress"/>
import CursoPage from '../support/pages/cursos'

describe('Funcionalidade: Pesquisa', () => {

    beforeEach(() => {
        CursoPage.visitarPaginaCursos()
    })

    afterEach(() => {
        cy.screenshot()
    })

    it.skip('Pesquisa feita com sucesso', () => {
        CursoPage.fazerPesquisa('Qualidade')
        /// Resultado
        cy.get('.course-card__title').should('contain', 'Engenheiro de Qualidade de Software')
    });

    it.skip('Falha na pesquisa - Curso não existe', () => {
        CursoPage.fazerPesquisa('Engenharia')
        /// Resultado
        cy.get('.top-sale-cursos__empty-text').should('contain', 'Hmm... parece que você não encontrou o que precisava, mas dê uma olhada nos nossos cursos mais populares:')
    });
})