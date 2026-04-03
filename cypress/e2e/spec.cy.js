import {SelectablePage} from '../pageObjects/selectablePage';

describe('demo qa MD', () => {
    context('Selectable tests', () => {
    beforeEach(() => {
      cy.visit('/selectable')
    });


    it('Scenario', () => {
      SelectablePage.gridButton.click();
      SelectablePage.itemByName('Two').click();
      SelectablePage.itemByName('Four').click();
      SelectablePage.itemByName('Six').click();
      SelectablePage.itemByName('Eight').click();
      
      SelectablePage.itemByName('Two').should('class', 'active');
      SelectablePage.itemByName('Four').should('class', 'active');
      SelectablePage.itemByName('Six').should('class', 'active');
      SelectablePage.itemByName('Eight').should('class', 'active');

      SelectablePage.itemByName('One').should('not.have.class', 'active');
      SelectablePage.itemByName('Three').should('not.have.class', 'active');
      SelectablePage.itemByName('Five').should('not.have.class', 'active');
      SelectablePage.itemByName('Seven').should('not.have.class', 'active');
      SelectablePage.itemByName('Nine').should('not.have.class', 'active');
    })

  })
})