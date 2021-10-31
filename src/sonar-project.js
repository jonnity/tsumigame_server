const sonarqubeScanner = require("sonarqube-scanner");

const SONARQUBE_URL = "https://sonarcloud.io/";
const BRANCH = process.argv[2];
const SONARQUBE_TOKEN = process.argv[3];

const PROJECT_NAME = "tsumigame_server" + BRANCH;
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
  () => {
    console.log("scanning " + PROJECT_NAME);
  }
);