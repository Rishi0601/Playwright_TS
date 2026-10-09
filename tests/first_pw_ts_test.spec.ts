import {
  test,
  expect,
  Page,
  Browser,
  BrowserContext,
  BrowserType,
  chromium,
} from "@playwright/test";

test("First test with ts", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});
