describe('Compra de Um produto', () => {
  it('Acesso ao Site', () => {
    cy.visit('https://www.amazon.com.br')
    cy.get('#twotabsearchtextbox').click()   
    cy.get('#twotabsearchtextbox').type('alexa')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B084DWCZY6"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').should('have.text', 'Echo Dot (4ª Geração): Smart Speaker com Alexa | Música, informação e Casa Inteligente - Cor Preta').click()
    cy.get('#buy-now-button').click()   
    cy.get('#ap_email').click()
    cy.get('#ap_email').type('test.valtech2023@gmail.com')
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').click()
    cy.get('#ap_password').type('valtech9753')
    cy.get('#signInSubmit').click()    
  
    
  })
})