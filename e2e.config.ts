import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 10 * 100000,
  retries: 0,
  testDir: 'tests/e2e/',
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
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
  username: 'xxx@gmail.com',
  password: 'xxx123'
}
