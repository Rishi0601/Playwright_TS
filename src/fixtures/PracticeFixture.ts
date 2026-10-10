import { test as base, Page } from "@playwright/test";

export const test = base.extend<{
  login: (
    accessLevel: "admin" | "user",
    roleType: "Teacher" | "Consultant" | "Student",
  ) => Promise<void>;
}>({
  login: async ({ page }, use) => {
    const login = async (
      accessLevel: "admin" | "user",
      roleType: "Teacher" | "Consultant" | "Student",
    ) => {
      await page.locator("#username").fill("rahulshettyacademy");
      await page.locator("#password").fill("Learning@830$3mK2");
      await page.locator(`[value='${accessLevel}']`).click();
      if (accessLevel === "user" && await page.locator("#okayBtn").isVisible) {
        await page.locator("#okayBtn").click();
      }
      await page
        .locator("select.form-control")
        .selectOption({ label: roleType });
      await page.locator("#terms").click();
      await page.locator("#signInBtn").click();
      await page.locator("#signInBtn").click();
    };
    await use(login);
  },
});
