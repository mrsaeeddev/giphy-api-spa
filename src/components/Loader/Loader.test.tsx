import { mount } from '@cypress/react';
import Loader from './Loader';

describe('Loader Component', () => {
    it('renders Loading text (for screenreaders) correctly', () => {
        mount(<Loader />);
        cy.get('span').contains("Loading...");
    });
});
