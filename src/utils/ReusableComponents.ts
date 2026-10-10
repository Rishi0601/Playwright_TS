import { expect, Locator, Page } from "@playwright/test";

export class ReusableComponents {

  constructor(private readonly page: Page) {}

  async navigateTo(url: string) {
    return await this.page.goto(url);
  }

  async click(locator: Locator) {
    return await locator.click();
  }

  async enterText(locator: Locator, text: string) {
    return await locator.fill(text);
  }

  async isDisplayed(locator: Locator){
    return locator.isVisible;
  }

  async expectedtUrl(url: string, page: Page){
    await expect(page).toHaveURL(url);
  }
}