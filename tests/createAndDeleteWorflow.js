var config = require('../nightwatch.conf.js');

module.exports = {

  'Log in to Tray.io': browser => {

    browser
      .url('https://app.tray.io/login')
      .waitForElementVisible('[name="username"]')
      .waitForElementVisible('[name="password"]')
      .setValue('[name="username"]', 'yhsiah90@gmail.com')
      .setValue('[name="password"]', 'Password1')
      .click('[type="submit"]')
      .waitForElementVisible('.Dashboard___hN1j8o', 10000)
  },

  'Wait for Dashboard and open Create Workflow Modal': browser => {

    browser
      .waitForElementVisible('.Page-navigation-button___2nr8D6')
      .click('.Page-navigation-button___2nr8D6')
      .expect.element('.header___1iolq4').text.to.equal('Create Workflow').before(10000)
  },

  'Submit New Workflow': browser => {

    browser
      .waitForElementVisible('[name="name"]')
      .waitForElementVisible('[title="Create"]')
      .setValue('[name="name"]', 'Test Workflow')
      .click('[title="Create"]')
  },

  'Wait for Edit Page and close': browser => {

    browser
      .expect.element('.Main-Content___1J0rCC > h1').text.to.equal('ADD A TRIGGER').before(10000);

    browser
      .waitForElementVisible('.TriggerSelector___veF1W- > div:nth-child(1) > div:nth-child(1) > a')
      .click('.TriggerSelector___veF1W- > div:nth-child(1) > div:nth-child(1) > a')
  },

  'Wait for Dashboard and delete workflow': browser => {

    browser
      .waitForElementVisible('.Page-navigation-button___2nr8D6')
      .waitForElementVisible('.Options-menu___2xCHNh')
      .moveToElement('.Options-menu___2xCHNh', 20, 20)
      .waitForElementVisible('.UppwardMenu___JkA7Kl > li:nth-child(5) > a')
      .click('.UppwardMenu___JkA7Kl > li:nth-child(5) > a')
      .expect.element('.header___1iolq4').text.to.equal('Delete Workflow?').before(10000);

    browser
      .waitForElementVisible('div.button___20IrAn:nth-child(2)')
      .click('div.button___20IrAn:nth-child(2)')

    },

    'Check worflow is deleted': browser => {

    browser
      .expect.element('.My-flows-empty___3_hU3V > h2').text.to.equal("YOU DON'T HAVE ANY WORKFLOWS").before(10000);
    },

    'Log out of Tray.io': browser => {

    browser
      .waitForElementVisible('.Profile-avatar___3Ezd7K')
      .click('.Profile-avatar___3Ezd7K')
      .waitForElementVisible('li.Profile-DropDown-item___21Tis5:nth-child(2)')
      .click('li.Profile-DropDown-item___21Tis5:nth-child(2)')
      .expect.element('.header___2dUqdY').text.to.equal('ACCOUNT LOGIN').before(10000);

    browser.end();

  }
};
