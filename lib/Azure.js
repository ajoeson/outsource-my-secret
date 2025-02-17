const axios = require('axios').default;

module.exports = {
  getSecretValue: async (path, config = {}) => {
    const { data: { access_token } } = await axios.post(`https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`, new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      grant_type: 'client_credentials',
      scope: 'https://vault.azure.net/.default'
    }).toString());

    const { data: secret } = await axios.get(`${config.vaultUri}/secrets/${path}/?api-version=7.4`, {
      headers: {
        Authorization: 'Bearer ' + access_token,
      },
    });
    
    return secret.value;
  },
};