export async function loadHomepage(page) {
    await page.goto('https://www.tinder.com')
  }
  
  export async function assertTitle(page) {
    await page.waitForSelector('h5')
  }
  