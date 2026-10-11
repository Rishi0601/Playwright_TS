import { expect, test } from "@playwright/test";
import { test as fixtureTest } from "../src/fixtures/FrameworkFixture";
import { LoginPageUI } from "../src/ui/LoginPageUI";

const userDataProvider = [
  {
    username: "rahulshettyacademy",
    password: "Learning@830$3mK2",
    access: "user",
    role: "Consultant",
    expectedResult: "success",
  },
  {
    username: "",
    password: "",
    access: "admin",
    role: "Student",
    expectedResult: "empty",
  },
  {
    username: "wronguser",
    password: "wrongpassword",
    access: "admin",
    role: "Consultant",
    expectedResult: "incorrect",
  },
];

const hyperlinkDataProvider = [
  "https://rahulshettyacademy.com/documents-request",
  "https://rahulshettyacademy.com/qa-career-accelerator-job-ready",
];

fixtureTest.beforeEach("Navigate to website", async ({ page }) => {
  await page.goto("/loginpagePractise/");
});

for (const data of userDataProvider) {
  fixtureTest(
    `Login page functionality - ${data.access} - ${data.role} - ${data.expectedResult}`,
    async ({ loginpage, reusableComponent, loginUI, page }) => {
      await loginpage.enterUsername(data.username);
      await loginpage.enterPassword(data.password);
      await loginpage.selectAccesLevel(data.access);
      await loginpage.selectRoleType(data.role);
      await loginpage.clickOnTerms();
      await loginpage.signIn();
      switch (data.expectedResult) {
        case "success":
          await reusableComponent.expectedtUrl("/angularpractice/shop", page);
          break;

        case "empty":
          await reusableComponent.validateText(
            "Empty username/password.",
            loginUI.errorMsg,
          );
          break;

        case "incorrect":
          await reusableComponent.validateText(
            "Incorrect username/password.",
            loginUI.errorMsg,
          );
          break;
      }
    },
  );
}

for (const [index, hyperlink] of hyperlinkDataProvider.entries()) {
  fixtureTest(
    `Login page hyperlink functionality - ${hyperlink}`,
    async ({ loginpage, reusableComponent, loginUI, page }) => {
      const newTab = await reusableComponent.switchTab(
        page,
        loginUI.hyperlinks.nth(index),
      );
      await reusableComponent.expectedtUrl(`${hyperlink}`, newTab);
    },
  );
}
