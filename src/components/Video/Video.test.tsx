import { mount } from '@cypress/react';
import Video from './Video';

describe('Video Component', () => {
    it('renders Video component correctly', () => {
        mount(<Video />);
        cy.get("video").should('have.attr', 'width')
    });


    it('renders Video component with height attribute', () => {
        mount(<Video height={'300px'} />);
        cy.get("video").should('have.attr', 'height')
    });


    it('renders Video component with src attribute', () => {
        let src = "https://media2.giphy.com/media/fHsweg1kp5uzU3G1D4/giphy-downsized-small.mp4"
        mount(<Video src={src} />);
        cy.get("video").should('have.attr', 'src')
    });
});
