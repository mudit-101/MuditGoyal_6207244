import { test } from "@playwright/test";
import { url } from "node:inspector";

test("frames", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/");

//   const frames = page.frames();
//   console.log(frames.length);
//   console.log(frames);
  
  

//   for (const frame of frames) {
//     console.log("Frame Name:", await frame.title());
//     console.log("Frame URL:", frame.url());
//     console.log("------------------");
//   }
//   await page.title();

  //!---------a1----------
//   let frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
//   await frame3?.frameLocator('//*[@id="i9"]/div[3]/div').locator
// await frame1?.locator('//*[@id="id1"]/div/input').fill("mudit")
//  let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]')
//  await frame2?.locator('//input[@name="mytext2"]').fill("Goyal")
//  await page.locator('//frame[@src="frame_2.html"]').contentFrame();

 const frame3 = page.frameLocator('frame[src="frame_3.html"]');

  const googleForm = frame3.frameLocator('iframe');

  await googleForm.getByText("I am a human").click();

  await page.waitForTimeout(2000);
});