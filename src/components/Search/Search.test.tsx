import { mount } from '@cypress/react';
import Search from './Search';

describe('Search Component', () => {
    it('renders Search component correctly', () => {
        mount(<Search />);
        cy.get("input").should('have.class', 'form-control')
    });
});
