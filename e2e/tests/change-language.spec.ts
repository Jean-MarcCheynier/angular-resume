import { test, expect } from '@playwright/test';

test('Change language', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.goto('http://localhost:4200/about');
  await page.getByRole('tab', { name: 'Experience' }).click();
  await expect(page.locator('app-experience')).toContainText('Experience');
  await page.getByRole('button', { name: 'en' }).click();
  await expect(page.locator('app-experience')).toContainText('Expérience');
});
