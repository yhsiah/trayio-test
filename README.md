# trayio-test

My tray.io qa automation test exercise.

## Requirements

- [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)

- [Node.js](https://nodejs.org/en/download/)

- [Google Chrome](https://www.google.com/chrome/)

## Installation

clone the repository:

    git clone https://github.com/yhsiah/trayio-test.git && cd trayio-test

install all dependencies:

    npm install

And you should be good to go!

## Running Tests

To run all tests:

    npm test


## Notes

Potential improvements in general:
- Use of custom commands for commonly used actions e.g. login, logout
- Create extra config files to run tests with different configurations, e.g browser, environment, data sets
- Make use of html reports that look pretty
- Use tags to run specific types of tests only e.g. a tag for tests suitable for smoke tests
- Use sub-directories for tests and page objects for organisational purposes if the test suite grows too large
- Use Cucumber / Gherkin for BDD style scenarios and tests with feature files and step definitions, if so inclined
- Update nightwatch to latest version. Currently using 0.9.21 due to [this issue encountered on 1.0.6](https://groups.google.com/forum/#!topic/nightwatchjs/QSAY1j23prA) (latest version)

Potential improvements (specific to this tray.io exercise):
- Revisit the page object for dashboard view, as the modals use the same selectors. Perhaps there is opportunity for simplifying this here.
- Test for the success notification on deletion of a workflow
- Support for testing on different resolutions. This is currently forced to 1920x1080 in config due to overlapping elements on dashboard view at some lower resolutions.
- Got a 'workflow name is invalid' error message on one test run, haven't been able to reproduce yet. Should investigate this and make sure the generated name is always valid.

Improvements implemented:
- Use of a random string for workflow name each time, updated assertions on create and delete to account for the specific workflow
- Took into account both upwards and downwards workflow menu on the dashboard view, which previously caused problems when there was >1 workflow in the view
- Test works when the user has multiple workflows now
