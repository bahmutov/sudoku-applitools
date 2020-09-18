module.exports = (on, config) => {
  require('cypress-react-unit-test/plugins/react-scripts')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  if (process.env.APPLITOOLS_API_KEY) {
    config.env.APPLITOOLS_SETUP = '1'
  }

  return config
}

require('@applitools/eyes-cypress')(module)
