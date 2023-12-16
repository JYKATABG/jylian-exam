const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
  await page.goto('https://jylian-exam-shopping-list.onrender.com/Shopping-List');
  const list = await page.$('ul');
  expect(list).toBeTruthy();
});
