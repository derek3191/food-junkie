describe('view recipes', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('displays the title of the application', () => {
        cy.contains('Food Junkie');
    });

    it('displays a list of recipe names', () => {
        cy.get('#recipeList').children().should('have.length.above', 0);
    });

    it('displays a search box', () => {
        cy.get('#searchBox');
    });

    it('filters recipe list when typing in search box', () => {
        cy.get('#recipeList').children().then( recipes => {
            cy.get('#searchBox').type(recipes[recipes.length-1].innerHTML);
            
            cy.log(`recipeList: ${recipes[0].innerHTML}`);

            cy.get('#recipeList').children().should('have.length.lessThan', recipes.length);
        });
    });
});