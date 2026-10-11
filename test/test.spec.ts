import { expect, test } from "@playwright/test";
import { test as fixtureTest1 } from "../src/fixtures/PracticeFixture";
import { test as fixtureTest2 } from "../src/fixtures/FrameworkFixture";
import { LoginPageUI } from "../src/ui/LoginPageUI";

const dataProvider = [
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
  {
    username: "rahulshettyacademy",
    password: "",
    access: "admin",
    role: "Teacher",
    expectedResult: "empty",
  },
];

fixtureTest2.beforeEach("Navigate to website", async ({ page }) => {
  await page.goto("/loginpagePractise/");
});

fixtureTest1.skip("Fixture test", async ({ login }) => {
  await login("user", "Consultant");
});

for (const data of dataProvider) {
  fixtureTest2(
    `Login - ${data.access} - ${data.role} - ${data.expectedResult}`,
    async ({ loginpage, reusableComponent, page }) => {
      const loginUI = new LoginPageUI(page);

      if (data.username) {
        await loginpage.enterUsername(data.username);
      }

      if (data.password) {
        await loginpage.enterPassword(data.password);
      }

      await loginpage.selectAccesLevel(data.access);
      await loginpage.selectRoleType(data.role);
      await loginpage.clickOnTerms();
      await loginpage.signIn();

      switch (data.expectedResult) {
        case "success":
          await reusableComponent.expectedtUrl("/angularpractice/shop", page);
          break;

        case "empty":
          await reusableComponent.validateText("Empty username/password.", loginUI.errorMsg);
          break;

        case "incorrect":
          await reusableComponent.validateText("Incorrect username/password.", loginUI.errorMsg);
          break;
      }
    },
  );
}
