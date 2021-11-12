import { mount } from '@cypress/react';
import Main from './Main';

describe('Main Component', () => {
    it('renders tagline correctly', () => {
        mount(<Main />);
        cy.get('div').contains('A single page app that leverages data from the Giphy API');
    });

    it('adds CSS padding class correctly to the tagline', () => {
        mount(<Main />);
        cy.get('div').should('have.class', 'p-3');
    });

    it('renders grid for tagline and search bar correctly', () => {
        mount(<Main />);
        cy.get('div').should('have.class', 'col-sm-8').should('have.class', 'col-sm-4')
    });

    it('renders search input field correctly', () => {
        mount(<Main />);
        cy.get('div').should('have.class', 'mb-3 input-group')
    });

    it('renders loading state on mounting', () => {
        mount(<Main />);
        cy.get('span').contains('Loading...')
    });

    it('renders data after api call correctly', () => {
        mount(<Main />);
        cy.wait(10000).get('img').should('have.attr', 'src')
    });

    it('renders grid after api call for images correctly', () => {
        mount(<Main />);
        cy.wait(10000).get('div').should('have.class', 'col-lg-4 col-md-4 col-12')
    });
});
