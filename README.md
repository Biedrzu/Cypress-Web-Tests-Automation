# LeapDev-Quality-Engineer-Technical-Test
author: Bogusz Biedrzycki

# Requirements
Download or clone the repo from:
https://github.com/Biedrzu/LeapDev-Quality-Engineer-Task

Task 1 is for manual testing

Task 2 is for Web UI Automation:
run console in the main for folder (LeapDev-Quality-Engineer-Task) and install type script latest version (5.1.3):
npm install --save-dev typescript

install cypress latest version (12.14.0):
npm install cypress --save-dev

# Project Structure

# Additional info
1. When entering https://demoqa.com/books there is an error visible in the console: 
"Uncaught TypeError: g(...).setup is not a function" which causes Cypress to automatically fail
For purpose of this test I changed config in support/e2e.js to skip this verification

2. Blocked googleads by adding blockHosts: "*.googletagservices.com", into cypress.config.ts
Not sure if it is desired solution but I believe if we want to cover adverts tests on this page
we should cover it in different test suite


