var config = require('../nightwatch.conf.js');
var workflowName = Math.random().toString(36).substring(2, 12);

module.exports = {

  'Log in to Tray.io': browser => {
    var loginPage = browser.page.login();
    var dashboard = browser.page.dashboard();
    var data = browser.globals;

    loginPage
      .navigate()
      .waitForElementVisible('@usernameInput')
      .waitForElementVisible('@passwordInput')
      .setValue('@usernameInput', data.login.username)
      .setValue('@passwordInput', data.login.password)
      .click('@loginButton')

    dashboard
      .waitForElementVisible('@mainView', 10000)
  },

  'Wait for Dashboard and open Create Workflow Modal': browser => {
    var dashboard = browser.page.dashboard();
    var modal = dashboard.section.createWorkflowModal;

    dashboard
      .waitForElementVisible('@createWorkflowButton')
      .click('@createWorkflowButton')

    modal
      .expect.element('@header').text.to.equal('Create Workflow').before(10000)
  },

  'Submit New Workflow': browser => {
    var modal = browser.page.dashboard().section.createWorkflowModal;

    modal
      .waitForElementVisible('@nameInput')
      .waitForElementVisible('@createButton')
      .setValue('@nameInput', workflowName)
      .click('@createButton')
  },

  'Wait for Edit Page and close': browser => {
    var editPage = browser.page.editWorkflow();

    editPage
      .expect.element('@header').text.to.equal('ADD A TRIGGER').before(10000);

    editPage
      .waitForElementVisible('@closeButton')
      .click('@closeButton')
  },

  'Check Workflow created correctly': browser => {
    var dashboard = browser.page.dashboard();
    var workflow = dashboard.section.workflowItem;

    dashboard
      .waitForElementVisible('@mainView')

    workflow
      .expect.element('@title').text.to.equal(workflowName).before(5000);

  },

  'Delete the workflow': browser => {
    var dashboard = browser.page.dashboard();
    var upwardOptionsMenu = dashboard.section.upwardOptionsMenu;
    var downwardOptionsMenu = dashboard.section.downwardOptionsMenu;
    var deleteModal = dashboard.section.deleteModal;

    dashboard
      .waitForElementVisible('@workflowOptionsButton')
      .moveToElement('@workflowOptionsButton', 20, 20)

    upwardOptionsMenu.isVisible('@deleteButton', result => {
      if (result.value === true) {
        upwardOptionsMenu
          .waitForElementVisible('@deleteButton')
          .click('@deleteButton')
      }
      else {
        downwardOptionsMenu
          .waitForElementVisible('@deleteButton')
          .click('@deleteButton')
      }
    })

    deleteModal
      .expect.element('@header').text.to.equal('Delete Workflow?').before(10000);

    deleteModal
      .waitForElementVisible('@yesButton')
      .click('@yesButton')

    },

    'Check worflow is deleted': browser => {
    var dashboard = browser.page.dashboard();

    dashboard
      .expect.element('@workflowDashboard').text.to.not.contain(workflowName).before(5000)
    },

    'Log out of Tray.io': browser => {
    var dashboard = browser.page.dashboard();
    var profileDropdown = dashboard.section.profileDropdown;
    var loginPage = browser.page.login();

    dashboard
      .waitForElementVisible('@profileAvatar')
      .click('@profileAvatar')

    profileDropdown
      .waitForElementVisible('@logoutButton')
      .click('@logoutButton')

    loginPage
      .expect.element('.header___2dUqdY').text.to.equal('ACCOUNT LOGIN').before(10000);

    browser.end();

  }
};
