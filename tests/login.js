var assert = require('assert');
var LoginPage = require('../pages/login');
var DashboardPage = require('../pages/dashboard');

describe('Login page', function () {
  var loginPage;
  var dashboardPage;

  beforeEach(async () => {
    await browser.closeApp();
    await browser.launchApp();
    await browser.switchContext('WEBVIEW_io.ionic.starter');
    loginPage = await LoginPage();
    dashboardPage = await DashboardPage();
  });

  it('Fails on wrong email', async () => {
    await loginPage.enterLoginCreds('asdasdad', 'aloadoo');

    await loginPage.clickOnSignInButton();

    assert(await loginPage.isSignInMessageDisplayed(), 'Error message is displayed');
  });

  it('Works with correct email', async () => {
    await loginPage.enterLoginCreds('adhar', 'alooo');

    await loginPage.clickOnSignInButton();
    
    await dashboardPage.isDashboardMenuIconDisplayed();

    var dashboardUrl = await dashboardPage.getUrl();

    assert(dashboardUrl.includes('dashboard'), 'url has become dashboard');
  });
});
