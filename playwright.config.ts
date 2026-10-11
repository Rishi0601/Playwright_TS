import { chromium, defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  timeout: 30000,
  retries: 1,
  fullyParallel: true,
  workers: 3,

  reporter: [["html", { open: "always" }]],

  expect: {
    timeout: 30000,
  },

  use: {
    baseURL: "https://rahulshettyacademy.com",
    trace: "on-first-retry",
    browserName: "firefox",
  },

  projects: [
    {
      name: "Chrome browser",
      use: {
        ...devices["Desktop Chrome"],
        headless: true,
        viewport: { width: 1900, height: 1080 },
      },
    },
  ],
});
