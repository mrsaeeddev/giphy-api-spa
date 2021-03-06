import { mount } from '@cypress/react';
import { ImageInterface } from '../Thumbnails/Thumbnails.interface';
import LargeModal from './LargeModal';

describe('LargeModal Component', () => {
    it('shows correctly when value of lgShow prop is true', () => {
        const setLgShow = cy.stub();
        const images: ImageInterface = {
            downsized: {
                height: "200",
                size: "2136073",
                url: "https://media3.giphy.com/media/sQaiDja8BI01IfJrrT/480w_s.jpg",
                width: "480",
            }
        }
        mount(<LargeModal images={images} lgShow={true} setLgShow={setLgShow} />);
        cy.get('div').wait(500).should('have.class', 'show')
    });

    it('shows correctly when value of lgShow prop is false', () => {
        const setLgShow = cy.stub();
        const images = {
            downsized: {
                height: "200",
                size: "2136073",
                url: "https://media3.giphy.com/media/sQaiDja8BI01IfJrrT/480w_s.jpg",
                width: "480",
            }
        }
        mount(<LargeModal images={images} lgShow={false} setLgShow={setLgShow} />);
        cy.get('div').wait(500).should('not.have.class', 'show')
    });

    it('Takes images prop and renders them correctly', () => {
        const setLgShow = cy.stub();
        const images = {
            downsized: {
                height: "200",
                size: "2136073",
                url: "https://media3.giphy.com/media/sQaiDja8BI01IfJrrT/480w_s.jpg",
                width: "480",
            }
        }
        mount(<LargeModal images={images} lgShow={true} setLgShow={setLgShow} />);
        cy.get('img').wait(500).should('have.a.property', 'width')
    });
});
