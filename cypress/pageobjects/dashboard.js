class Dashboard{
    get loggedinuser()
    {return cy.get('.navbar-brand');}

    get heading()
    {return cy.get('h2');}
}

export default Dashboard