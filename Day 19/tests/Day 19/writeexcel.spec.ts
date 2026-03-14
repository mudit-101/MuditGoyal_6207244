// import  {test} from '@playwright/test'
// import excel from "exceljs"
// import path from 'path'

// test.only("write excel file",async({page})=>{
//     const book = new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
//     let sheet = await book.getWorksheet("sheet4")

//     if(!sheet){
//         sheet = await book.addWorksheet("sheet4")
//     }
//    const data  = ["python", "Selenium", "Robo"]
//    for(let i = 1;  i < data.length;i++){
//      sheet.getRow(i+1).getCell(1).value = data[i]
//    }
//     sheet.getRow(1).getCell(1).value="playwright";
//     await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
// })

import { test } from '@playwright/test'
import excel from 'exceljs'
import path from 'path'

test("Amazon data to Excel", async ({ page }) => {

    await page.goto("https://www.amazon.in")

    await page.locator('#twotabsearchtextbox').fill("shoes")
    await page.locator('#nav-search-submit-button').click()

    await page.waitForSelector('[data-component-type="s-search-result"]')

    const productNames = await page.locator('h2 span').allTextContents()
    const productPrices = await page.locator('.a-price-whole').allTextContents()

    const book = new excel.Workbook()
    const filePath = path.join(__dirname, "../../testdata/readexcel.xlsx")

    const sheet = book.addWorksheet("sheet5")

    sheet.getRow(1).getCell(1).value = "Product Name"
    sheet.getRow(1).getCell(2).value = "Price"

    for (let i = 0; i < 5; i++) {

        sheet.getRow(i + 2).getCell(1).value = productNames[i]
        sheet.getRow(i + 2).getCell(2).value = productPrices[i]

    }

    await book.xlsx.writeFile(filePath)

})