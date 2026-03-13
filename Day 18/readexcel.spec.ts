import {test} from '@playwright/test'
import excel from 'exceljs'
import path from 'path'

test("Reading test data", async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    let data = await sheet?.getRow(1).getCell(1).value
    console.log(data);

    let sheet2 = book.getWorksheet("Sheet2")

    // for (let i = 1; i <= sheet2?.actualRowCount; i++) {          
    //     for (let j = 1; j <= sheet2?.actualColumnCount; j++) {     

    //         let value = sheet2?.getRow(i).getCell(j).value

    //         console.log(value)

    //     }
    // }

    const sheet3 = book.getWorksheet("Sheet3")
    const name = sheet3?.getRow(2).getCell(2).value?.toString()
    const email = sheet3?.getRow(2).getCell(3).value?.toString()
    const password = sheet3?.getRow(2).getCell(4).value?.toString()
    const url = sheet3?.getRow(2).getCell(1).value?.toString()

    await page.goto("url")

    await page.locator("#name").fill(String(name))
    await page.locator("#email").fill(String(email))
    await page.locator("#password").fill(String(password))
    await page.keyboard.press("Enter")
    
})