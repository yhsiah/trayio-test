# trayio-test

My tray.io qa automation test exercise.

## Requirements

- [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)

- [Node.js](https://nodejs.org/en/download/)

- [Google Chrome](https://www.google.com/chrome/)

## Installation

clone the repository:

    git clone https://github.com/yhsiah/trayio-test.git

install all dependencies:

    npm Install

And you should be good to go!

## Running Tests

To run all tests:

    npm test


## Notes

Potential improvements in general:
- Use of custom commands for commonly used actions e.g. login, logout
- Create extra config files to run tests with different configurations, e.g browser, environment, data sets
- Make use of html reports that look pretty
- Use tags to run specific types of tests only e.g. a tag for tests suitable for smoke test_settings
- Use directories for tests and page objects for organisational purposes if the test suite grows too large

Potential improvements (specific to tray.io):
- Revisit the page object for dashboard view, as the modals use the same selectors. Perhaps there is opportunity for simplifying this here.
- Test for the success notification on deletion of a workflow
- Write something custom to use a random string for a workflow name each time. This would allow for assertions and actions on the specific created workflow.
- Take into account both the upwards menu and downwards menu which show on the dashboard view for workflows. Looks like this behaviour is linked with having >1 workflow in the table.
