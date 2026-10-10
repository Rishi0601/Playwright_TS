import { Page } from "@playwright/test";
import { ReusableComponents } from "../utils/ReusableComponents";
import { LoginPageUI } from "../ui/LoginPageUI";

export class LoginPage {
  private readonly reusableComponents: ReusableComponents;
  private readonly loginpageui: LoginPageUI;

  constructor(private readonly page: Page) {
    this.reusableComponents = new ReusableComponents(page);
    this.loginpageui = new LoginPageUI(page);
  }

  async enterUsername(username: string) {
    await this.reusableComponents.enterText(
      this.loginpageui.username,
      username,
    );
  }

  async enterPassword(password: string) {
    await this.reusableComponents.enterText(
      this.loginpageui.password,
      password,
    );
  }

  async selectAccesLevel(accessLevel: string) {
    await this.reusableComponents.click(
      this.loginpageui.userAccess(accessLevel),
    );
    if (
      accessLevel === "user" &&
      (await this.reusableComponents.isDisplayed(this.loginpageui.dialogOKBtn))
    ) {
      await this.reusableComponents.click(this.loginpageui.dialogOKBtn);
    }
  }

  async selectRoleType(role: string) {
    await this.loginpageui.userRole(role);
  }

  async clickOnTerms() {
    await this.reusableComponents.click(this.loginpageui.terms);
  }

  async signIn() {
    await this.reusableComponents.click(this.loginpageui.signInBtn);
  }
}