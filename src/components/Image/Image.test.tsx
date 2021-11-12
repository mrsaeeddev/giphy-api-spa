import { mount } from '@cypress/react';
import Image from './Image';

describe('Image Component', () => {
    it('renders src attribute correctly', () => {
        const src = "./logo.png"
        mount(<Image src={src} />);
        cy.get('img').should('have.attr', 'src');
    });

    it('takes onClick prop and calls it correctly', () => {
        const onClick = cy.stub();
        mount(<Image onClick={onClick} />);
        cy.get('img').click()
    });
});
