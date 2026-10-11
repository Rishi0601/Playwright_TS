import { expect, Locator, Page } from "@playwright/test";

export class ReusableComponents {
  constructor(private readonly page: Page) {}

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async enterText(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async isDisplayed(locator: Locator): Promise<boolean> {
    await locator.waitFor();
    return locator.isVisible();
  }

  async expectedtUrl(url: string, page: Page): Promise<void> {
    await page.waitForLoadState();
    await expect(page).toHaveURL(url);
  }

  async getText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }

  async validateText(text: string, locator: Locator): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  async switchTab(page: Page, locator: Locator): Promise<Page> {
    const currentPage = page.waitForEvent("popup");
    await this.click(locator);
    const newPage = await currentPage;
    await newPage.waitForLoadState();
    return newPage;
  }
}
