const path = require('path')

module.exports = {
  ...require('./jest-common'), // grab common config as starting point, then we'll override certain things
  displayName: 'server', // clearly indicates this is a server test in jest test suite
  coverageDirectory: path.join(__dirname, '../coverage/server'), // don't want coverage reports writing over each other!
  testEnvironment: 'jest-environment-node', // specifies these tests should run in server env
  testMatch: ['**/__server_tests__/**/*.js'], // specifies which tests to run
}
