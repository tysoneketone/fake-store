import { mount } from '@cypress/react';
import React from 'react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});
