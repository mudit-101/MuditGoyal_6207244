import {test} from '@playwright/test'

test("",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async(d)=>{
        await page.waitForTimeout(2000)
        // await d.accept("bbjhb")
        if(d.type()=="alert"){
            await d.accept("qwertyuiop")
        }
        else if(d.type()=="confirm"){
            await d.dismiss()
            console.log(d.message())
        
    }
        else if(d.type()=="prompt"){
            // await d.accept("Hello")
            // console.log(d.defaultValue())
            if(d.defaultValue()=="Harry Potter"){
            console.log(await d.defaultValue());
            await d.accept();
            
        }
        else{
            await d.accept("tom")

        }
        }

        
    })
    await page.locator('//button[@id="alertBtn"]').click();
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.getByRole("button",{name:"Prompt Alert"}).click();
})