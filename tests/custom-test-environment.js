const { TestEnvironment } = require('jest-environment-node');

module.exports = class CustomTestEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === undefined) {
      const { TextEncoder } = require('util');
      this.global.TextEncoder = TextEncoder;
    }
  }
};
