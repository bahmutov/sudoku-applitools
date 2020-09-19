# sudoku-applitools [![ci status][ci image]][ci url]

> Visual [component testing for React](https://github.com/bahmutov/cypress-react-unit-test) using [Cypress](https://www.cypress.io/) and [Applitools](https://applitools.com/)

## Running locally

In [cypress/plugins/index.js](cypress/plugins/index.js) we check if `APPLITOOLS_API_KEY` is set. If not we set an environment variable to be read in the [cypress/support/index.js](cypress/support/index.js) file. If the variable is NOT set, we overwrite the `cy.eyesCheckWindow` command with an empty `log` statement (and skip `cy.eyesOpen` and `cy.eyesClose`)

If you really want to run Cypress tests locally against Applitools, create a file `.as-a.ini` or `~/.as-a/.as-a.ini` and place the Applitools there.

```ini
; diff visual tests inside Cypress against Applitools API
[applitools]
APPLITOOLS_API_KEY=...
```

You can then run Cypress with the environment variables set using [as-a](http://github.com/bahmutov/as-a)

```shell
$ as-a applitools npm run dev
```

[ci image]: https://github.com/bahmutov/sudoku-applitools/workflows/main/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/sudoku-applitools/actions
