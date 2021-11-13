# Giphy API SPA

A single-page web application that leverages data from the Giphy API

## Running the project locally
- Clone the project
- Make sure you've Node and NPM installed
- Run `npm install` in the main dir of the project 
- Run `npm start` to start server
- View the project in your browser

## Running the tests locally
- Setup [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- After finishing setup, run `npx cypress open-ct` to see the tests running in Chrome
- If you want to see tests in the headless mode, run `npx cypress run-ct`

### Notes
- There's a problem with GIPHY API in which it gives wrong total_count and count values in some initial offset calls (sometimes) due to which pagination component shows extra pages. I've handled the error but since total count of pages depends on API response so to fix this, values from API need to be consistent.
- 