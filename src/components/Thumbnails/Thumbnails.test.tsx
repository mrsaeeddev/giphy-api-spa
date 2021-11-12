import { mount } from '@cypress/react';
import Thumbnails from './Thumbnails';

describe('Thumbnails Component', () => {
    it('renders Thumbnails component correctly', () => {
        let data: any[] = [{
            images: {
                fixed_height: {
                    url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
                },
            },
            url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
        }];
        mount(<Thumbnails data={data} />);
        cy.get('div').should('have.class', 'row')
    });

    it('renders images correctly', () => {
        let data: any[] = [{
            images: {
                fixed_height: {
                    url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
                },
            },
            url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
        }];
        mount(<Thumbnails data={data} />);
        cy.get('img').should('have.attr', 'src');
    });

    it('add relevant CSS class correctly', () => {
        let data: any[] = [{
            images: {
                fixed_height: {
                    url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
                },
            },
            url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
        }];
        mount(<Thumbnails data={data} />);
        cy.get('div').should('have.class', 'gif-wrap');
    });

    it('renders the grid correctly', () => {
        let data: any[] = [{
            images: {
                fixed_height: {
                    url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
                },
            },
            url: "https://giphy.com/gifs/mlb-los-angeles-angels-laa-fHsweg1kp5uzU3G1D4"
        }];
        mount(<Thumbnails data={data} />);
        cy.get('div').should('have.class', 'col-lg-4 col-md-4 col-12');
    });
});
