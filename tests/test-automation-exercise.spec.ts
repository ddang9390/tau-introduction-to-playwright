import { test, expect } from '@playwright/test';

var username = "danieldang"
var email = "daniel@daniel.com"
var pw = "123456"

test('test failed to login', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password').fill('654321');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator("text=Your email or password is incorrect!")).toBeVisible();
});

test('test able to login', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('Tab');
  await page.getByPlaceholder('Password').fill(pw);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator("text=Logged in as " + username)).toBeVisible();
});