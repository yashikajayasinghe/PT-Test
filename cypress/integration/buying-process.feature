Feature: Buying Process E2E Customer Journey.
    Description: This is a basic happy path scenario of a customer journey in purchasing a chepest item from a list of items

    Scenario: User search and select an Item to Purchase
        Given the user is in Home page
        When the user searches for a Printed Summer Dress
        And sorts the search results by the price ASC
        And chooses the cheapest item
        And increases the quantity to 2
        And chooses the size to M
        And chooses the colour to Green
        And adds to the cart
        And proceeds to Checkout
        Then the user finds the total price to pay as $34.80
