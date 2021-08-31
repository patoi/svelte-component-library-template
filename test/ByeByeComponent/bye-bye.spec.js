const { test, expect } = require('@playwright/test')

test('component1', async ({ page }) => {
  await page.goto('http://localhost:5000/#/')
  const welcome = page.locator('h2')
  await expect(welcome).toHaveText('Bye-bye John!')
})
