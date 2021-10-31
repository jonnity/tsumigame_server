const sonarqubeScanner = require("sonarqube-scanner");

const SONARQUBE_URL = "https://sonarcloud.io/";
const SONARQUBE_TOKEN = process.argv[2];
const BRANCH = process.argv[3];

const PROJECT_NAME = "tsumigame_server";
sonarqubeScanner(
  {
    serverUrl: SONARQUBE_URL,
    options: {
      "sonar.sourceEncoding": "UTF-8",
      "sonar.organization": "jonnity",
      "sonar.branch.target": BRANCH,
      "sonar.branch.name": branchName(BRANCH),
      "sonar.projectKey": PROJECT_NAME,
      "sonar.sources": "./",
      "sonar.login": SONARQUBE_TOKEN,
      "sonar.projectName": PROJECT_NAME,
      "sonar.typescript.lcov.reportPaths": "src/coverage/lcov.info",
      "sonar.tests": "tests/",
      "sonar.exclusions": "tests/**, sonar-project.js, .prettierrc.js",
      "sonar.test.inclusions": "tests/**.test.ts",
    },
  },
  () => {
    console.log("scanning " + PROJECT_NAME);
  }
);

const branchName = function (ref) {
  const refList = ref.split("/");
  return refList[refList.length - 1];
};
