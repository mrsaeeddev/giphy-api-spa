import { mount } from '@cypress/react';
import AlertBox from './AlertBox';

describe('AlertBox Component', () => {
    it('renders warning message correctly', () => {
        const text = "Some warning message"
        mount(<AlertBox text={text} />);
        cy.get('div').contains(text);
    });

    it('takes variant prop and renders relevant classes correctly', () => {
        const variant = "warning"
        mount(<AlertBox variant={variant} />);
        cy.get('div').should('have.class', 'alert-' + variant)
    });
});
