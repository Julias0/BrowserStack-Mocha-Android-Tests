module.exports = async (selector) => {
    let element = await $(selector);

    return {
        element,
        async click () {
            return await element.click();
        },
        async clearInput() {
            var currentValue = await emailInput.getValue();
            var backspacesRequired = currentValue.split('').map(() => '\uE003');
            return await element.addValue(backspacesRequired);
        },
        async sendInput(text) {
            return await element.addValue([text]);
        },
        async isDisplayed() {
            return await element.isDisplayed();
        },
        async waitForDisplayed() {
            return await element.waitForDisplayed({
                timeout: 3000
            });
        }
    };
};