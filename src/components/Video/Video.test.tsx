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

    it('renders Video component correctly with correct value of width', () => {
        mount(<Video width="100%" />);
        cy.get("video").invoke('attr', 'width').should('contain', '100%')
    });

    it('renders Video component correctly with correct value of height', () => {
        mount(<Video height="300px" />);
        cy.get("video").invoke('attr', 'height').should('contain', '300px')
    });

    it('renders Video component correctly with correct value of src', () => {
        let src = "https://media2.giphy.com/media/fHsweg1kp5uzU3G1D4/giphy-downsized-small.mp4"
        mount(<Video src={src} />);
        cy.get("video").invoke('attr', 'src').should('contain', 'https://media2.giphy.com/media/fHsweg1kp5uzU3G1D4/giphy-downsized-small.mp4')
    });
});
