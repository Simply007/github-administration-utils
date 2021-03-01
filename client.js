const { Octokit } = require("@octokit/core");
const { name, version } = require("./package.json");
const {
  paginateRest,
} = require("@octokit/plugin-paginate-rest");
require('dotenv').config();

const MyOctokit = Octokit.plugin(
  paginateRest,
).defaults({
  auth: process.env.GITHUB_API_KEY,
  userAgent: `${name}/${version}`
});

module.exports = new MyOctokit();