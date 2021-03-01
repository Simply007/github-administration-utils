const client = require("./client");

const main = async () => {
  // await whatever
  const repoNames = (await client.paginate("/orgs/Kentico/repos"))
    .map(item => item.name);

  const result = {};
  for (const repoName of repoNames) {
    try {
      const { data } = await client.request(`/repos/Kentico/${repoName}/contents/.github/CODEOWNERS`);
      let buff = Buffer.from(data.content, 'base64');
      let codeOwners = buff.toString('utf-8');
      result[repoName] = {
        codeOwners
      };
    } catch (error) {
      if (error.status === 404) {
        result[repoName] = {
          codeOwners: null
        };
      } else {
        result[repoName] = {
          error: error
        };
      }
    }
  }

  console.log(JSON.stringify(result, undefined, 2));
};

// Self-invocation async function
(async () => {
  await main();
})().catch((err) => {
  console.error(err);
  throw err;
});