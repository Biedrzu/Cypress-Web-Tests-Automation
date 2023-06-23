# LeapDev-Quality-Engineer-Technical-Test
author: Bogusz Biedrzycki

# Requirements
Download or clone the repo from:
https://github.com/Biedrzu/LeapDev-Quality-Engineer-Task

# Task 1 is for manual testing
I was not sure how to approach this task to do it in a efficient way but
I decided to split test scenarios into component testing (Login, Book Store and Profile) and system testing.
Component testing does not  require other components to work or may require only some basic mocks from other components.

I decided to skip integration testing as in this case it will be hard to verify any two components without the third one.
Also skipped acceptance testing. All main functionalities are covered in system testing. To create some reliable acceptance tests I would need more details
about what is expected from this application.

# Task 2 is for Web UI Automation:
## Prepare environment:
note: I use git bash to run all the commands
1) navigate to 
```javascript
/Task2
```
2) install type script latest version (5.1.3):
```javascript
npm install --save-dev typescript
```

3) install cypress latest version (12.15.0):
```javascript
npm install cypress --save-dev
```

## Running tests:
1) Run tests from command line:
All the results will be visible in the command line.
```javascript
npx cypress run
```

2) Use Cypress dashboard:
```javascript
npx cypress open
```
When dashboard opens choose E2E Testing and then Chrome browser.
All tests should be visible in the spec.


## Project Structure
cypress/e2e - all executable tests

cypress/support/helper - method for various components

cypress/support/selectors - selectors for various components

cypress/support/commands.ts - commands that the can be used for the whole project

cypress/support/e2e.js - executed before each test

cypress/tsconfig.json - config file

cypress.config.ts - config file


# Additional info
1. I decided to write those tests without Classes as I believe it is not beneficial in such cases.

2. When entering https://demoqa.com/books there is an error visible in the console: 
"Uncaught TypeError: g(...).setup is not a function" which causes Cypress to automatically fail.
For this reason I changed config in support/e2e.js to skip this verification.

3. Blocked googleads by adding blockHosts: "*.googletagservices.com", into cypress.config.ts
Not sure if it is desired solution but I believe if we want to cover adverts tests they should
be covered in different spec/suite.

4. Tests for table sorting by titles fail as I would expect the table to be sorted alphabetically by their title and they are not.