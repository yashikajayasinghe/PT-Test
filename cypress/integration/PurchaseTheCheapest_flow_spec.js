// PurchaseTheCheapest_flow_spec.js created with Cypress
//Steps To Follow 
// Navigate to http://automationpractice.com/ 
// Search for ‘Printed Summer Dress’
// Select the cheapest dress
// Change the Quantity from 1 to 2
// Change the Size from S to M
// Change the colour from Yellow to Green
// Select “Add to cart”
// Select “Proceed to Checkout” 
// Assert that the price equals $34.80
// Take a screenshot of the cart and attach it along with your code

describe('Purchase the cheapest item', () => {
   
    it('Step 1', () => {
        cy.visit('http://automationpractice.com/')
        cy.get('#search_query_top').type('Printed Summer Dress')
        cy.get('#searchbox').submit()
      
    })

    it('step 2', () =>{
        cy.get('#selectProductSort').select('Price: Lowest first')
        cy.wait(3000)
        cy.get('ul.product_list li:first a.lnk_view').click()
    })

    it('step 3', ()=>{
        cy.url().should('include', 'id_product')
        cy.get('#quantity_wanted').clear().type('2').should("contain.value", '2');       
    })
    it('step 4', ()=>{
        cy.get('#group_1').select('M').should("contain.text", 'M')      
    })
    it('step 5', ()=>{
        // cy.window().document().then(function (doc) {
        //     doc.addEventListener('click', () => {
        //       setTimeout(function () { doc.location.reload() }, 3000)
        //     })
        //     cy.get('#color_15').click()
        // })
       // cy.get('#color_15').click()
       //cy.get('li').first()
       cy.get('ul#color_to_pick_list li:first').click();
       cy.wait(1000)
        cy.get('#color_15').should("have.class", "selected")
    })       
     it('step 6', ()=>{
    // cy.get("#add_to_cart").click() 
    // // cy.get('button.exclusive > span').click()
    // cy.get('button.exclusive').should("have.class", "added")

    cy.get("button.exclusive > span")
    .eq(0)  // finding 0th element
    .click()
cy.wait(5000)
    cy.get("#layer_cart").should('be.visible')
     })  
       
       
  })


