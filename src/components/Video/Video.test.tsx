import { mount } from '@cypress/react';
import Video from './Video';

describe('Video Component', () => {
    it('renders Video component correctly', () => {
        mount(<Video />);
        cy.get("video").should('have.attr', 'width')
    });
});
