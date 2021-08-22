# Fake Store App

Website Link: https://fakestoreapp.netlify.app/

## Description

This app simulates the actions of a generic shopping cart, from selecting, adding/removing items from a shopping cart to the checkout process.

### API

- The Fake Store API is used as the apps data source and can be found at:

Link: https://fakestoreapi.com/

## Development

### 1. Install Prerequisites

- Yarn

  ```bash
  $ brew install yarn
  ```

### 2. Configuration

#### Testing

- Javascript tests use Cypress.

  ```bash
  $ yarn test
  ```

### 3. Run

  ```bash
  $ yarn start
  ```


### 4. Deployment

- This app is deployed with netlify and is deployed automatically when changes are merged to the Master branch.

- Command

  ```bash
  $ yarn build
  ```
