import { chromium, defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 15000,
  retries: 1,

  reporter: [["html", { open: "always" }]],

  expect: {
    timeout: 25000,
  },

  use: {
    baseURL: "https://rahulshettyacademy.com",
    trace: "on-first-retry",
    browserName: "firefox",
  },

  projects: [
    {
      name: "firefox browser",
      use: {
        headless: false,
        // channel: "msedge",
        viewport: { width: 1900, height: 1080 },
      },
    },
  ],
});
