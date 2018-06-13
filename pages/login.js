module.exports = {
  url: function() {return this.api.launchUrl + '/login'},

  elements: {
    usernameInput: {selector: '[name="username"]'},
    passwordInput:{selector: '[name="password"]'},
    loginButton: {selector: '[type="submit"]'}
  }
}
