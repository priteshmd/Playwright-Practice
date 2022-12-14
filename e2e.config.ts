import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 10 * 50000,
  retries: 0,
  testDir: 'tests/e2e/',
  use: {
    headless: true,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
    {
      use: {headless: true}
    }
  ],
};
export default config
export const credentials = {
  username: '<your username>',
  password: '<your password>'
}
