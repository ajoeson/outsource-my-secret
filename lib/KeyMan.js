const { VENDOR } = require('./const.js');
const AWS = require('./AWS.js');
const Azure = require('./Azure.js');

class KeyMan {
  constructor(vendor, config) {
    this.vendor = vendor;
    this.config = config;
  }

  async getSecretValue(keyPath) {
    if (this.vendor === VENDOR.AWS) {
      return await AWS.getSecretValue(keyPath, this.config);
    } else if (this.vendor === VENDOR.AZURE) {
      return await Azure.getSecretValue(keyPath, this.config);
    } else {
      throw new Error('This vendor should be either AWS, or Azure.');
    }
  }
}

module.exports = KeyMan;
