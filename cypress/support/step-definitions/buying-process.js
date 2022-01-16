

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("the user is in Home page", () => {
    cy.visit('http://automationpractice.com/');
})
When("the user searches for a Printed Summer Dress", () => {
    cy.get('#search_query_top').type('Printed Summer Dress');
    cy.get('#searchbox').submit();
})
And("sorts the search results by the price ASC", () => {
    cy.get('#selectProductSort').select('Price: Lowest first');

})
And("chooses the cheapest item", () => {
    cy.get('ul.product_list li:first a.lnk_view').click();
})
And("increases the quantity to 2", () => {
    cy.url().should('include', 'id_product');
    cy.get('#quantity_wanted').clear().type('2').should("contain.value", '2');
})
And("chooses the size to M", () => {
    cy.get('#group_1').select('M').should("contain.text", 'M')
})
And("chooses the colour to Green", () => {
    cy.get('ul#color_to_pick_list li:first').click();
    cy.wait(1000);
    cy.get('#color_15').should("have.class", "selected");
})
And("adds to the cart", () => {
    cy.get('button.exclusive > span').click();
})
And("proceeds to Checkout", () => {
    cy.get(".layer_cart_product").should("be.visible");
    cy.get(".layer_cart_product > h2").should(
        "contain.text",
        "Product successfully added to your shopping cart"
    );
    cy.get(".layer_cart_cart").should("be.visible");
    cy.get(".button-medium > span").click();
})
Then("the user finds the total price to pay as $34.80", () => {
    cy.url().should("include", "?controller=order");
    cy.get('span#total_price').should('contain.text', '$34.80');
    cy.screenshot('buying-process-e2e-test-finalCartImage');
})
