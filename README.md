# PT-Test
Example site to perform Automation testing task:

- http://automationpractice.com/index.php


## How to Run Tests

**Step 1:**
- Clone the Project

**Step 2:**
- In a terminal, run the following command from the project root (PT-TEST)
```
npm install
```

**Step 3:**

- Test Run In Cypress Test Runner : 

1. Run the following command from the project root (PT-TEST/)
```
.\node_modules\.bin\cypress open
```
2. Click to run integration test spec

 
- Alternatively test can be run in commandline on headless mode as well: 

1. Run the command 
```
npm test
```


**Test Outcome:**

```
     Spec                                    |     Tests  | Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
    ✔ buying-process.feature          00:33  |     1        1        -        -       -            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
  |  All specs passed!              00:33     |     1        1        -        -        - 
  ```


* Screenshot can be found in the location: PT-Test/cypress/screenshots/buying-process.feature/buying-process-e2e-test-finalCartImage.png

## Future Enhancements
- Test Reprting can be improved by integrating with a third party test reporting libraries.

## Reference
1. http://automationpractice.com/index.php
2. https://docs.cypress.io/guides/getting-started/installing-cypress
3. https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/blob/master/README.md
4. code Editor: https://code.visualstudio.com/

