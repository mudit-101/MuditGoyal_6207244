import {test} from "@playwright/test"

test("web elements",async({page})=>{
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username",{exact:true}).type("student")
    // await page.getByLabel("Username",{exact:true}).type("student1")
    // await page.getByLabel("Password").fill("password123")
    // await page.getByLabel("Password").isVisible()
  
     await page.goto("https://www.amazon.in/")
     await page.locator("input#twotabsearchtextbox").fill("shoes")
     await page.keyboard.press("Enter")
     await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').first().waitFor()
     await page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]/span').all()

})