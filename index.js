const { version } = require("./repoC");
module.exports = {
  version: () => `0.1.${version().split(".")[1]}`
};
