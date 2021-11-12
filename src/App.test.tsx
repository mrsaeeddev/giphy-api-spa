import { mount } from '@cypress/react';
import App from './App';

describe('App Component', () => {
  it('renders heading correctly', () => {
    mount(<App />);
    cy.get('h1').contains('Giphy SPA');
  });

  it('renders className correctly', () => {
    mount(<App />);
    cy.get('div').should('have.class', 'App')
  });
});
