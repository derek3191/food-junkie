
beforeEach('setup a new message', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="messageText"]')
        .type('New message');
    
    cy.get('[data-testid="sendButton"]')
        .click();

    cy.get('[data-testid="messageText"]')
        .should('have.value', '');

});

describe('creating a message', () => {
    it('displays a message in the list', () => {        
        cy.contains('New message');
    });

    it('alerts the user', () => {
        cy.contains('Message Added!');
    })
});

describe('deleting a message', () => {
    it('removes a message from the list', () => {
        cy.get("#messageList").children().contains('New message')

        

    })
})