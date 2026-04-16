import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90_000,
  fullyParallel: false,
  retries: 0,
  workers: 2,
  reporter: [['list']],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  use: {
    baseURL: process.env.LOCAL_URL ?? 'http://localhost:4321',
    trace: 'retain-on-failure',
  },
});
