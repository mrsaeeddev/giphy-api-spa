import { mount } from '@cypress/react';
import Loader from './Loader';

describe('Loader Component', () => {
    it('renders Loading text (for screenreaders) correctly', () => {
        mount(<Loader />);
        cy.get('span').contains("Loading...");
    });

    it('renders relevant CSS class correctly', () => {
        mount(<Loader />);
        cy.get('div').should('have.class', 'spinner-border');
    });

    it('is visible to the users correctly', () => {
        mount(<Loader />);
        cy.get('div').should('be.visible');
    });
});
