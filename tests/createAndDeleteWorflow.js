var config = require('../nightwatch.conf.js');

module.exports = {

  'Log in to Tray.io': function(browser) {

    browser
    .url('https://app.tray.io/login')
    .waitForElementVisible('body')
    .assert.title('tray.io | Login')
    .end();
  }
};
