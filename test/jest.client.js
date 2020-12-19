module.exports = {
  ...require('./jest-common'),
  displayName: 'client', // clearly indicates this is a server test in jest test suite
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // gives us clearer assertions for dom nodes
  snapshotSerializers: ['jest-emotion'],
}
