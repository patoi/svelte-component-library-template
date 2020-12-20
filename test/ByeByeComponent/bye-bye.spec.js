describe('component2', () => {
  it('Bye-bye John! is visible', async browser => {
    await browser.url('http://localhost:5000/#/')
    await browser.waitForElementVisible('h2')
    browser.assert.containsText('h2', 'Bye-bye John!')
  })
})
