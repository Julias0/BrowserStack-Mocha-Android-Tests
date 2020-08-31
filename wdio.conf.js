exports.config = {
    user: process.env.BROWSERSTACKUSER,
    key: process.env.BROWSERSTACKACCESSKEY,
  
    updateJob: false,
    specs: [
      './tests/**/*.js'
    ],
    exclude: [],
  
    capabilities: [{
      name: 'single_appium_test',
      build: 'webdriver-browserstack',
      device: 'Samsung Galaxy S7',
      browserName: 'android',
      app: 'bs://e2bd91eee552911a984f2c863ae72c3abca6b06c',
      'browserstack.debug': true,
      'browserstack.appium_version': '1.17.0'
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };
  