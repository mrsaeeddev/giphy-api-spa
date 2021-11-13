import { mount } from '@cypress/react';
import Paginate from './Paginate';

describe('Paginate Component', () => {
    it('renders Paginate component correctly', () => {
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("ul").should('have.class', 'pagination')
    });

    it('takes pageClicked prop and makes the page link clickable', () => {
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("a").click({ multiple: true });
    });

    it('renders correct number of active links for pagination', () => {
        let totalPages = 9;
        const pageClicked = cy.stub();
        mount(<Paginate totPages={totalPages} currentPage={1} pageClicked={pageClicked} />);
        cy.get("li").should('have.length', totalPages + 4)
    });

    it('renders correct link as current one when passed a currentPage prop', () => {
        let currentPage = 1;
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("li").contains(`${currentPage}(current)`)
    });

    it('renders first link correctly', () => {
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("li").contains(`«First`)
    });

    it('renders previous link correctly', () => {
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("li").contains(`‹Previous`)
    });

    it('renders next link correctly', () => {
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("li").contains(`›Next`)
    });

    it('renders last link correctly', () => {
        const pageClicked = cy.stub();
        mount(<Paginate totPages={9} currentPage={1} pageClicked={pageClicked} />);
        cy.get("li").contains(`»Last`)
    });
});
