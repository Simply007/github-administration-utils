# GitHub API Boilerplate

This boilerplate helps you start with [Octokit NPM package](https://github.com/octokit/core.js) to work with [GitHub API](https://docs.github.com/en).

## Get started

Copy `.env.template` file and name it `.env` and set you your [GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

Install dependencies and run `start` script:

```sh
npm install
npm start
```

You can see the result, which is a json file showinf content of the all [CODEOWNERS](https://help.github.com/articles/about-code-owners/) file in the [Kentico GitHub Organization](https://github.com/Kentico) repositories.

## Adjust

To adjust the main logic, alter `main` method in `./index.js` file.