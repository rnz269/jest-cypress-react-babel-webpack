module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['kentcdodds', 'kentcdodds/import', 'plugin:cypress/recommended'], // auto-apply the recommended ruleset
  env: {'cypress/globals': true}, // globals are coming from the eslint-plugin-cypress we installed (describe & it)
}
