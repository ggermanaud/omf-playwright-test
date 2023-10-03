import { test, expect, type Page } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/#/transaction-runner');
  await page.getByRole('textbox').fill('ZM00002RG');
  await page.getByRole('button', { name: 'Run' }).click();
});