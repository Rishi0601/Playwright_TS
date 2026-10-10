import { test as base, Page } from "@playwright/test";
import { loginpage } from "../pages/LoginPage";
import { reusableComponents } from "../utils/ReusableComponents";

export const test = base.extend<{
  loginpage: loginpage;
  reusableComponent: reusableComponents;
}>({
  loginpage: async ({ page }, use) => {
    var obj = new loginpage(page);
    await use(obj);
  },
  reusableComponent: async ({ page }, use) => {
    var obj = new reusableComponents(page);
    await use(obj);
  },
});
