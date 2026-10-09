import { test, expect, Page } from "@playwright/test";

test("First test with ts", async ({ page }) => {
  await page.goto("/loginpagePractise/");
  await expect(page).toHaveTitle("Google");
});

test("Second test with ts", async ({ page }) => {
  await page.goto("https://www.google.com");
  await expect(page).toHaveTitle("Google");
});
