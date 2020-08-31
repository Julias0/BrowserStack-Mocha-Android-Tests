var element = require('../classes/element');

module.exports = async () => {
    var emailElement = await element('#sign-in-email > input');
    var passwordElement = await element('#sign-in-password > input');
    var signInButton = await element('.sign-in--cta');
    var signInMessage = await element('#sign-in-message');
    return {
        emailElement,
        passwordElement,
        signInButton,
        signInMessage,
        async enterLoginCreds(email, password) {
            await emailElement.sendInput(email);
            await passwordElement.sendInput(password);
        },
        async clickOnSignInButton() {
            await signInButton.click();
        },
        async isSignInMessageDisplayed() {
            return (await signInMessage.waitForDisplayed()) === true;
        }
    };
};