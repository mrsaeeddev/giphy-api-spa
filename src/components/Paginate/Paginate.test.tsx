import { mount } from '@cypress/react';
import Paginate from './Paginate';

describe('Paginate Component', () => {
    it('renders Paginate component correctly', () => {
        mount(<Paginate totalPages={20} currentPage={1} />);
        cy.get("ul").should('have.class', 'pagination')
    });

});
