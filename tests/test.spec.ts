import { expect, test } from "@playwright/test";
import { test as fixtureTest1 } from "../src/fixtures/PracticeFixture";
import { test as fixtureTest2 } from "../src/fixtures/FrameworkFixture";

test.beforeEach("Navigate to website", async ({ page }) => {
  await page.goto("/loginpagePractise/");
});

fixtureTest1.skip("Fixture test", async ({ login }) => {
  await login("user", "Consultant");
});

fixtureTest2(
  "Login functionality",  async ({ loginpage, reusableComponent, page }) => {
    await loginpage.enterUsername("rahulshettyacademy");
    await loginpage.enterPassword("Learning@830$3mK2");
    await loginpage.selectAccesLevel("user");
    await loginpage.selectRoleType("Consultant");
    await loginpage.clickOnTerms();
    await loginpage.signIn();
    await reusableComponent.expectedtUrl("/angularpractice/shop", page);
  },
);
