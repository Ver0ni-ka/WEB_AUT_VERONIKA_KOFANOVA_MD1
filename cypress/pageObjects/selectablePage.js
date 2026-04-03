export class SelectablePage{

    static get gridButton() {
        return cy.get('#demo-tab-grid'); 
    }

    static itemByName(name) {
        return cy.contains('.list-group-item', name);
    }


}