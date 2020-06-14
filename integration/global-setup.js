require('dotenv').config()

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { setup as setupPuppeteer } from 'jest-environment-puppeteer'

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)
  // Your global setup
}
