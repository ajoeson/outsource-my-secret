const { Const, KeyMan } = require('./');

(async () => {
  const awsKeyMan = new KeyMan(Const.VENDOR.AWS, {
    region: '',
    accessKeyId: '',
    secretAccessKey: '',
  });

  const awsSecret = await awsKeyMan.getSecretValue('prod/key-for-aws');
  console.log('AWS Secret:', awsSecret);

  const azKeyMan = new KeyMan(Const.VENDOR.AZURE, {
    clientId: '',
    clientSecret: '',
    tenantId: '',
    vaultUri: 'https://veservekeystore.vault.azure.net',
  });

  const azSecret = await azKeyMan.getSecretValue('key-for-azure');
  console.log('Azure Secret:', azSecret);
})();
