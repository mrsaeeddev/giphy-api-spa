import { mount } from '@cypress/react';
import Search from './Search';

describe('Search Component', () => {
    it('renders Search component correctly', () => {
        mount(<Search />);
        cy.get("input").should('have.class', 'form-control')
    });

    it('takes onClick prop and calls it correctly', () => {
        const onClick = cy.stub();
        mount(<Search onClick={onClick} />);
        cy.get('#search-bar').click()
    });

    it('render search input field with correct attribute', () => {
        mount(<Search />);
        cy.get('input').should('have.attr', 'placeholder')
    });

    it('render search input field with correct placeholder value', () => {
        mount(<Search />);
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search GIPHY GIFs here')
    });

    it('trigger search input field correctly when onChange gets called', () => {
        const onChange = cy.stub();
        mount(<Search onChange={onChange} />);
        cy.get('#search-bar').trigger('input')
    });
});
