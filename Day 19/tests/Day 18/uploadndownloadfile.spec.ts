// import {test} from '@playwright/test'
// import path from 'path';
// test.only("upload file",async({page})=>{
    // console.log(__dirname);
    // console.log(__filename);
    // //!---------case 1----------
    // await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/HP/OneDrive/Desktop/p1/tests/uploadfile/demo.txt","C:/Users/HP/OneDrive/Desktop/P1/tests/uploadfile/demo1.txt"])
    // await page.getByRole("button",{name:"Upload multiple File"}).click()
    // await page.waitForTimeout(3000);

    //!-----case 2---------
//     await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../uploadfile/demo1.txt"))
//     await page.getByRole("button",{name:"Upload single File"}).click()
//     await page.waitForTimeout(3000);
// })

import {test,expect} from "@playwright/test";
import path from 'path';

test("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    // await page.pause();
    
    let downloadfolder = "C:/Users/HP/OneDrive/Desktop/P1/tests/download"
    let filename = await downloadfile.suggestedFilename()
    //path.join(downloadfolder,filename);
    await downloadfile.saveAs(path.join(downloadfolder,filename))
})