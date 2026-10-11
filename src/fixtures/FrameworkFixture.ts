import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LoginPageUI } from "../ui/LoginPageUI";
import { ReusableComponents } from "../utils/ReusableComponents";

export const test = base.extend<{
  loginpage: LoginPage;
  reusableComponent: ReusableComponents;
  loginUI: LoginPageUI;
}>({
  loginpage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  reusableComponent: async ({ page }, use) => {
    await use(new ReusableComponents(page));
  },
  loginUI: async ({ page }, use) => {
    await use(new LoginPageUI(page));
  },
});
