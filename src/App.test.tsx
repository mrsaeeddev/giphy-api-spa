import { mount } from '@cypress/react';
import App from './App';

describe('App Component', () => {
  it('renders heading correctly', () => {
    mount(<App />);
    cy.get('h1').contains('Giphy SPA');
  });

  it('adds relevant CSS class to the container correctly', () => {
    mount(<App />);
    cy.get('div').should('have.class', 'container')
  });

  it('adds relevant CSS class to the heading correctly', () => {
    mount(<App />);
    cy.get('h1').should('have.class', 'p-3')
  });
});
