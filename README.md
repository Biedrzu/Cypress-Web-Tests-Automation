# Web Testing
author: Bogusz Biedrzycki

## Requirements
Download or clone the repo from:
https://github.com/Biedrzu/LeapDev-Quality-Engineer-Task

## Task 1 Manual Testing
This task refers to this website: https://demoqa.com/login

Test cases in descriptive language, which test the Book Store Application pages of the above site as thoroughly as possible.
They cover the Login, Book Store and Profile sections of this application.
I decided to skip integration testing as in this case it will be hard to verify any two components without the third one.

## Task 2 Automated Testing using Cypress
### Prepare environment:
note: I use git bash to run all the commands
1) navigate to 
```javascript
/Task2
```
2) install TypeScript latest version (5.1.3):
```javascript
npm install --save-dev typescript
```

3) install Cypress latest version (12.15.0):
```javascript
npm install cypress --save-dev
```

## Running tests:
1) Run tests from command line:
```javascript
npx cypress run
```
The results will be visible in the command line.

2) Use Cypress dashboard:
```javascript
npx cypress open
```
When dashboard opens choose E2E Testing and then Chrome browser.
All tests should be visible in the spec


### Project Structure
cypress/e2e - all executable tests; with .Test.ts file extension

cypress/support/helpers - methods for various components/functions

cypress/support/selectors - selectors for various components

cypress/support/commands.ts - commands that the can be used within the whole project

cypress/support/e2e.ts - executed before each test

cypress/tsconfig.json - config file; contains aliases

cypress.config.ts - config file; contains specpattern, basic url and viewport


## Additional info
1. I decided to write those tests without Classes as I believe using modules can be more transparent
when writing tests in JS/TS.

2. When entering https://demoqa.com/books there is an error visible in the console: 
"Uncaught TypeError: g(...).setup is not a function" which causes Cypress to automatically fail.
For this reason I changed config in support/e2e.js to skip this verification.

3. Blocked googleads by adding blockHosts: "*.googletagservices.com", into cypress.config.ts
Not sure if it is desired solution but I believe if we want to cover adverts tests they should
be covered in different spec/suite.

4. Tests for table sorting by titles fail as I would expect the table to be sorted alphabetically by their title and they are not.
