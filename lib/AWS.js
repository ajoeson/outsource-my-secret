const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

module.exports = {
  getSecretValue: async (path, config = {}) => {

    const secretsClient = new SecretsManagerClient({
      region: config.region,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });

    const response = await secretsClient.send(new GetSecretValueCommand({
      SecretId: path,
      VersionStage: "AWSCURRENT",
    }));

    let resp = response.SecretString;

    try {
      resp = JSON.parse(resp);
    } catch (exception) { }

    return resp;
  },
};
