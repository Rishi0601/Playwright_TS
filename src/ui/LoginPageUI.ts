import { Page, Locator } from "@playwright/test";

export class LoginPageUI {
  public readonly username: Locator;
  public readonly password: Locator;
  public readonly terms: Locator;
  public readonly signInBtn: Locator;
  public readonly dialogOKBtn: Locator;
  public readonly roleDropdown: Locator;
  public readonly errorMsg: Locator;

  constructor(private readonly page: Page) {
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.terms = page.locator("#terms");
    this.signInBtn = page.locator("#signInBtn");
    this.dialogOKBtn = page.locator("#okayBtn");
    this.roleDropdown = page.locator("select.form-control");
    this.errorMsg = page.locator("[class='alert alert-danger col-md-12']");
  }

  userAccess(accessLevel: string) {
    return this.page.locator(`[value='${accessLevel}']`);
  }

  userRole(roleType: string) {
    return this.roleDropdown.selectOption({ label: roleType });
  }
}