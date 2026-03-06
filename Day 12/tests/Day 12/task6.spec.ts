import { test } from '@playwright/test';

test('Question 1', async ({ page }) => {

  await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020/athletes');

  await page.locator('//button[@id="onetrust-accept-btn-handler"]').click();

  const athletes = page.locator(
    '(//div[@class="sc-d8cd2c5-2 dPlqCj"]/child::h3[contains(text(),"Emma MCKEON")]/ancestor::div[@data-row-id="athlete-row-2"]/following-sibling::div[@data-row-id="medals-row-2"]/descendant::span[@data-cy="ocs-text-module"])'
  ).nth(1);

  const medals = await athletes.textContent();

  console.log(medals);

});