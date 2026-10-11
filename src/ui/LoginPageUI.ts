import { Page, Locator } from "@playwright/test";

export class LoginPageUI {
  public readonly username: Locator;
  public readonly password: Locator;
  public readonly terms: Locator;
  public readonly signInBtn: Locator;
  public readonly dialogOKBtn: Locator;
  public readonly roleDropdown: Locator;
  public readonly errorMsg: Locator;
  public readonly hyperlinks: Locator;

  constructor(private readonly page: Page) {
    this.username = page.getByLabel("Username");
    this.password = page.getByLabel("Password");
    this.terms = page.locator("#terms");
    this.signInBtn = page.getByRole("button", { name: "Sign In" });
    this.dialogOKBtn = page.getByRole("button", { name: "Okay" });
    this.roleDropdown = page.locator("select.form-control");
    this.errorMsg = page.locator("[class='alert alert-danger col-md-12']");
    this.hyperlinks = page.locator("[class='blinkingText']");
  }

  userAccess(accessLevel: string) {
    return this.page.locator(`[value='${accessLevel}']`);
  }

  userRole(roleType: string) {
    return this.roleDropdown.selectOption({ label: roleType });
  }
}
