const sonarqubeScanner = require("sonarqube-scanner");
// const SONARQUBE_URL = process.argv[2]; // NOSONAR
// const SONARQUBE_TOKEN = process.argv[3]; // NOSONAR
// const CI_BUILD_REF_NAME = process.argv[4]; // NOSONAR
const SONARQUBE_URL = "https://sonarcloud.io/"; // NOSONAR
const SONARQUBE_TOKEN = "55ff2404dd166558ef900e1c11d30061270b73fc"; // NOSONAR
const PROJECT_NAME = "tsumigame_server";
sonarqubeScanner(
  {
    serverUrl: SONARQUBE_URL,
    options: {
      "sonar.sourceEncoding": "UTF-8",
      "sonar.organization": "jonnity",
      "sonar.projectKey": PROJECT_NAME,
      "sonar.sources": ".",
      "sonar.login": SONARQUBE_TOKEN,
      "sonar.projectName": PROJECT_NAME,
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.tests": "tests/",
      "sonar.exclusions": "./tests/**, sonar-project.js, .prettierrc.js",
      "sonar.test.inclusions": "./tests/**.test.ts",
    },
  },
  () => {}
);
