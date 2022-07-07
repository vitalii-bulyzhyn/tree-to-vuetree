const exec = require('child_process').exec;
const fs = require("fs");

(async () => {
  try {
    exec("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    exec("npm", ["run", "build"]);
    // exec("yarn", ["build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    exec("git", ["--work-tree", folderName, "add", "--all"]);
    exec("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    exec("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    exec("rm", ["-r", folderName]);
    exec("git", ["checkout", "-f", "master"]);
    exec("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();