import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { ReusableComponents } from "../utils/ReusableComponents";

export const test = base.extend<{
  loginpage: LoginPage;
  reusableComponent: ReusableComponents;
}>({
  loginpage: async ({ page }, use) => {
    var obj = new LoginPage(page);
    await use(obj);
  },
  reusableComponent: async ({ page }, use) => {
    var obj = new ReusableComponents(page);
    await use(obj);
  },
});
