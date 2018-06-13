module.exports = {
  url: function() {return this.api.launchUrl},

  elements: {
    mainView: {selector: '.Dashboard___hN1j8o'},
    createWorkflowButton:{selector: '.Page-navigation-button___2nr8D6'},
    loginButton: {selector: '[type="submit"]'},
    workflowOptionsButton: {selector: '.Options-menu___2xCHNh'},
    emptyWorkflow: {selector: '.My-flows-empty___3_hU3V > h2'},
    profileAvatar: {selector: '.Profile-avatar___3Ezd7K'}
  },

  sections: {
    createWorkflowModal: {
      selector: '.modal-holder___2cAE7h',
      elements: {
        header: {selector: '.header___1iolq4'},
        nameInput: {selector: '[name="name"]'},
        createButton: {selector: '[title="Create"]'}
      }
    },

    upwardOptionsMenu: {
      selector: '.UppwardMenu___JkA7Kl',
      elements: {
        deleteButton: {selector: '.UppwardMenu___JkA7Kl > li:nth-child(5) > a' }
      }
    },

    deleteModal: {
      selector: '.modal-holder___2cAE7h',
      elements: {
        header: {selector: '.header___1iolq4'},
        yesButton: {selector: 'div.button___20IrAn:nth-child(2)'}
      }
    },

    profileDropdown: {
      selector: '.Profile-DropDown___1PGHos',
      elements: {
        logoutButton: {selector: 'li.Profile-DropDown-item___21Tis5:nth-child(2)'}
      }
    }
  }
}
