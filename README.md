# LeapDev-Quality-Engineer-Technical-Test
author: Bogusz Biedrzycki

# Requirements
Download or clone the repo from:
https://github.com/Biedrzu/LeapDev-Quality-Engineer-Task

Task 1 is for manual testing

Task 2 is for Web UI Automation:
To easiest way to run this tests is to:
1) navigate to /LeapDev-Quality-Engineer-Task/Task 2
2) install type script latest version (5.1.3):
npm install --save-dev typescript

3) install cypress latest version (12.14.0):
npm install cypress --save-dev

4) from the same location open cypress dashboard:
npx cypress open

# Project Structure
cypress/e2e - all executable tests
cypress/support/helper - method for various components
cypress/support/selectors - selectors for various components
cypress/support/commands.ts - commands that the can be used for the whole project
cypress/support/e2e.js - executed before each test
cypress/tsconfig.json - config file
cypress.config.ts - config file


# Additional info
1. When entering https://demoqa.com/books there is an error visible in the console: 
"Uncaught TypeError: g(...).setup is not a function" which causes Cypress to automatically fail
For purpose of this test I changed config in support/e2e.js to skip this verification

2. Blocked googleads by adding blockHosts: "*.googletagservices.com", into cypress.config.ts
Not sure if it is desired solution but I believe if we want to cover adverts tests on this page
we should cover it in different test suite


