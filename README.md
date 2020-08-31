## Setup
* Clone the repo
* Install dependencies `npm install`
* Add your username and apiKey to environment variables - BROWSERSTACKUSER, BROWSERSTACKACCESSKEY

## Running your tests
- Upload your Native App (.apk file) to BrowserStack servers using upload API:

  ```
  curl -u "username:accesskey" -X POST "https://api.browserstack.com/app-automate/upload" -F "file=@/path/to/app/file/Application-debug.apk"
  ```

- If you do not have an .apk file and looking to simply try App Automate, [you can download our sample app and upload](https://www.browserstack.com/app-automate/sample-apps/android/WikipediaSample.apk)

- App I have connected inside wdio.conf.js - https://github.com/Julias0/AshePasheApp


to the BrowserStack servers using the above API.

To run the tests - 

#### npm test

## Notes
* You can view your test results on the [BrowserStack App Automate dashboard](https://www.browserstack.com/app-automate)
* Refer [Get Started](https://www.browserstack.com/app-automate/appium-webdriverio) document to configure the capabilities
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
## Additional Resources
* [Getting Started with App Automate](https://www.browserstack.com/app-automate/appium-webdriverio)
