const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
  await page.goto('https://jylian-exam-shopping-list.onrender.com/Add-Product');
  const form = await page.$('input');
  expect(form).toBeTruthy();
});
