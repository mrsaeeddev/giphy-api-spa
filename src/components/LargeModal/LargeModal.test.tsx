import { mount } from '@cypress/react';
import LargeModal from './LargeModal';

describe('LargeModal Component', () => {
    it('shows correctly when value of lgShow prop is true', () => {
        const images = {
            downsized: {
                height: "200",
                size: "2136073",
                url: "https://media3.giphy.com/media/sQaiDja8BI01IfJrrT/480w_s.jpg",
                width: "480",
            }
        }
        mount(<LargeModal images={images} lgShow={true} />);
        cy.get('div').wait(500).should('have.class', 'show')
    });

    it('shows correctly when value of lgShow prop is false', () => {
        const images = {
            downsized: {
                height: "200",
                size: "2136073",
                url: "https://media3.giphy.com/media/sQaiDja8BI01IfJrrT/480w_s.jpg",
                width: "480",
            }
        }
        mount(<LargeModal images={images} lgShow={false} />);
        cy.get('div').wait(500).should('not.have.class', 'show')
    });

    it('Takes images prop and renders them correctly', () => {
        const images = {
            downsized: {
                height: "200",
                size: "2136073",
                url: "https://media3.giphy.com/media/sQaiDja8BI01IfJrrT/480w_s.jpg",
                width: "480",
            }
        }
        mount(<LargeModal images={images} lgShow={true} />);
        cy.get('img').wait(500).should('have.a.property', 'width')
    });
});
