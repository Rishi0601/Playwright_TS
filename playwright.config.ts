import { chromium, defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./test",
  timeout: 30000,
  // retries: 1,
  fullyParallel: false,
  workers: 1,

  reporter: [["html", { open: "always" }]],

  expect: {
    timeout: 30000,
  },

  use: {
    baseURL: "https://rahulshettyacademy.com",
    browserName: "firefox",
    trace: "retain-on-failure",
    screenshot: "on",
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
