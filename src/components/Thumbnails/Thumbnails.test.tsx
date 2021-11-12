import { mount } from '@cypress/react';
import Thumbnails from './Thumbnails';

describe('Thumbnails Component', () => {
    it('renders Thumbnails component correctly', () => {
        let data: any[] = [{ url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4" }, {
            url: "https://giphy.com/gifs/tongue-goodnight-sJWNLTclcvVmw"
        }];
        mount(<Thumbnails data={data} />);
        cy.get('div').should('have.class', 'row')
    });
});
