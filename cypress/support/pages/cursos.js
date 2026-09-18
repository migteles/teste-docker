class CursoPage {

    // Seletores
    campoTextoPesquisa() {return cy.get('.courses-filter__side > .text-field > .field > .field__inner > .field__control > .field__control-container > .field__native > .text-field__control-container > .text-field__input')}
    botaoPrivacidade() {return cy.get('cookie-consent').shadow().find('.actions')}

    // Metodo

    visitarPaginaCursos() {
        cy.visit('/cursos')
    }

    fazerPesquisa(texto) {
        if(texto) this.campoTextoPesquisa().clear().type(texto)
    }
}

export default new CursoPage()