import { test } from "@playwright/test";

test("Amazon", async ({ page }) => {

  await page.goto("https://www.amazon.in/");

  await page.getByPlaceholder("Search Amazon.in").fill("phones");
  await page.keyboard.press("Enter");

  await page.locator('//span[text()="Android 14"]').waitFor();

  await page.locator('//span[text()="Android 14"]/ancestor::label').click();

});