import { mount } from '@cypress/react';
import Main from './Main';

describe('Main Component', () => {
    it('renders tagline correctly', () => {
        mount(<Main />);
        cy.get('div').contains('A single page app that leverages data from the Giphy API');
    });
});
