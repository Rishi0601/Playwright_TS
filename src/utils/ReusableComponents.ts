import { expect, Locator, Page } from "@playwright/test";

export class ReusableComponents {
  constructor(private readonly page: Page) {}

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  }

  async click(locator: Locator, timeout = 15000): Promise<void> {
    await locator.waitFor({ state: "visible", timeout });
    await locator.click();
  }

  async enterText(
    locator: Locator,
    text: string,
    timeout = 15000,
  ): Promise<void> {
    await locator.waitFor({ state: "visible", timeout });
    await locator.fill(text);
  }

  async isDisplayed(locator: Locator, timeout = 15000): Promise<boolean> {
    await locator.waitFor({ state: "visible", timeout });
    return locator.isVisible();
  }

  async expectedtUrl(url: string, page: Page): Promise<void> {
    await page.waitForLoadState();
    await expect(page).toHaveURL(url);
  }

  async getText(locator: Locator, timeout = 15000): Promise<string | null> {
    await locator.waitFor({ state: "visible", timeout });
    return await locator.textContent();
  }

  async validateText(text: string, locator: Locator): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  async switchTab(locator: Locator): Promise<Page> {
    const currentPage = this.page.waitForEvent("popup");
    await this.click(locator);
    const newPage = await currentPage;
    await newPage.waitForLoadState();
    return newPage;
  }
}
