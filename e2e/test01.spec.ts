import { test, expect } from '@playwright/test'
import { credentials } from '../e2e.config'

import { loadHomepage, assertTitle } from '../helpers'

test('Test home page', async ({ page }) => {
    await page.goto('https://www.tinder.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Start something epic.')

    await page.click('text=Log in')
    try {
        await page.click('text=More Options')
    } catch (error) {
        
    }    
    // await page.waitForEvent('popup')
    // await page.context()
    // context.on('page', async page => {
    //     await page.waitForLoadState();
        console.log(await page.title());
    //   })
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await page.click('text=Log in with Facebook')
    ])
    await page.waitForTimeout(2000)
    await newPage.type('input#email', credentials.username)
    await page.waitForTimeout(2000)
    await newPage.type('input#pass', credentials.password)
    await page.waitForTimeout(2000)
    await newPage.click('label#loginbutton')
    await page.waitForTimeout(2000)
    await page.waitForLoadState()
        await page.waitForTimeout(40000)
        try{
        await page.click('//button/span[contains(text(),"Close")]/..')
        } catch (error) {        
        }  
    for(let i = 0; i <100; i++) {       
        try{
        await page.getByRole('button', { name: 'Like' }).click();
        await page.waitForTimeout(2000)
    
        await page.isVisible('//button/span[contains(text(),"Open Profile")]/..')
        } catch (error) {
            try{
                await page.click('//button/span[contains(text(),"Close")]/..')
                } catch (error) {        
                } 
        }
        
        await page.waitForLoadState();
        
    }

  })
