import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders app component text', () => {
  mount(<App />);
  cy.get('p').contains('App component');
});
