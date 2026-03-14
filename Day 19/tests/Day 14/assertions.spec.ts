// import { test, expect } from "@playwright/test";

// test.only("assertions", async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
//   let uname = page.getByRole("textbox", { name: "username" });
//   await uname.fill("Prince");
//   await expect(uname).toHaveValue("Prince");
//   await expect(uname).toHaveScreenshot();
// });

import { test, expect } from "@playwright/test";

// test("auto-assertions", async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
//   let uname = page.getByRole("textbox", { name: "username" });
//   let pass = page.getByRole("textbox", { name: "password" });
//   await uname.fill("roshan");
//   await expect(uname).toHaveValue("roshan");
//   await expect(uname).toHaveScreenshot();
// });
test("non-assertions", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  let uname = page.getByRole("textbox", { name: "username" });
  let pass = page.getByRole("textbox", { name: "password" });
  await uname.fill("roshan");
  await expect("roshan").toContain("ros");
  await expect([1, 23, 45, 4, 3, 13, 4]).toContain(23);
  await expect("roshan").not.toContain("rohs");
  await expect(await uname.inputValue()).toContain("ros");
});