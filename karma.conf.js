/* eslint-disable @typescript-eslint/no-require-imports */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    browsers: ["ChromeHeadless"],
    client: {
      clearContext: false,
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      }, // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/angular-resume"),
      reporters: [{ type: "html" }, { type: "text-summary" }],
      subdir: ".",
    },
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-spec-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    reporters: ["progress", "kjhtml", "spec"],
    restartOnFileChange: true,
    specReporter: {
      // print the time elapsed for each spec
      failFast: false,

      maxLogLines: 10,

      // test would finish with error when a first fail occurs
      prefixes: {
        // override prefix for passed tests, default is '✓ '
        failure: "FAILED: ",
        // override prefix for failed tests, default is '✗ '
        skipped: "SKIPPED: ",
        success: "    OK: ", // override prefix for skipped tests, default is '- '
      },

      // do not print information about skipped tests
      showBrowser: false,

      // print the browser for each spec
      showSpecTiming: false,

      // do not print summary
      suppressErrorSummary: true,

      // do not print error summary
      suppressFailed: false,

      // do not print information about failed tests
      suppressPassed: false,

      // do not print information about passed tests
      suppressSkipped: true,

      // limit number of lines logged per test
      suppressSummary: false,
    },
  });
};
