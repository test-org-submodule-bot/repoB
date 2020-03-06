const { version } = require("./repoC");
module.exports = {
  version: () => `0.2.${version().split(".")[1]}`
};
