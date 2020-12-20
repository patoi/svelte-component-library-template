describe('component1', () => {
  it('Hello John! is visible', async browser => {
    await browser.url('http://localhost:5000/#/')
    await browser.waitForElementVisible('h1')
    browser.assert.containsText('h1', 'Hello John!')
  })
})
