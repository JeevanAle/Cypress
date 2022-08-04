class mainPage
{
    username()
    {
      cy.get('input[name="username"]').type('automation')
    } 
    password()
    {
      cy.get('input[name="password"]').type('jeevan@6060')
    }
    button()
    {
        cy.get('button[type="submit"]').contains('Log in').click;
    }
}

export default mainPage