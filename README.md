# outsource-my-secret
This is a library for software developers to leverage Azure KeyVault and AWS SecretManager to store your credentials.

## How to use

### Install dependency
```javascript
npm install --save outsource-my-secret
yarn add outsource-my-secret
```

### Obtain Secret from AWS Secret Manager
```javascript
const { Const, KeyMan } = require('outsource-my-secret');

const awsKeyMan = new KeyMan(Const.VENDOR.AWS, {
  region: '',
  accessKeyId: '',
  secretAccessKey: '',
});

const awsSecret = await awsKeyMan.getSecretValue('prod/key-for-aws');
console.log('AWS Secret:', awsSecret);
```

### Obtain Secret from Azure KeyVault
```javascript
const { Const, KeyMan } = require('outsource-my-secret');

const azKeyMan = new KeyMan(Const.VENDOR.AZURE, {
  clientId: '',
  clientSecret: '',
  tenantId: '',
  vaultUri: '',
});

const azSecret = await azKeyMan.getSecretValue('key-for-azure');
console.log('Azure Secret:', azSecret);
```

---

*For more information or to contribute to this project, please contact me via GitHub.*
