import test, { expect } from "@playwright/test";

test.describe("group of tests 1", () => {
    test.describe.configure({ mode: 'serial' });
test("Interaction with inputs",async ({page}) => {
    await page.goto("https://demoqa.com/text-box");
    await (await page.waitForSelector("#userName")).isVisible();
    const msgPlaceholder = page.locator("#userName");
    console.log(await msgPlaceholder.getAttribute('placeholder'));
    expect(msgPlaceholder).toHaveAttribute('placeholder', "Full Name");

    console.log('Before : ' + await msgPlaceholder.inputValue());
    await msgPlaceholder.type('Pritesh');
    console.log('After : ' + await msgPlaceholder.inputValue());
    
});

test("Sum",async ({page}) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    const firstName = 'Pritesh';
    const lastName = 'Dhakate';
    await page.type('#firstName', firstName);
    await page.fill('#firstName', firstName);
    await page.type('#lastName', lastName);
    await page.locator('//label[contains(text(),"Male")]').click();
    await page.type('#userNumber', '8976617032');
    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.locator('#submit').click();
    const fullName = await page.locator('//table/tbody/tr[1]/td[2]').innerText();
    expect(fullName).toBe(firstName + ' ' + lastName);
    console.log('fullname : ' + fullName);
    
});

test("checkbox",async ({page}) => {
    await page.goto("https://demoqa.com/checkbox");
    await page.locator('//button[@title="Toggle"]').click();
    const checkbox =  page.locator('//label/input[@id="tree-node-desktop"]/../span[1]');
    expect(checkbox).not.toBeChecked();
    await checkbox.check();
    expect(checkbox).toBeChecked();
    await checkbox.uncheck();
    expect(checkbox).not.toBeChecked();
});
});

test("alerts",async ({page}) => {
    test.slow();
    await page.goto("https://demoqa.com/alerts");
    
    // await page.locator('#alertButton').click();
    // page.on('dialog',async dialog1 => {
    //     const text = dialog1.defaultValue();
    //     console.log('alert msg 1: ' + text);
    //     await dialog1.accept();
    // });
    await page.locator('#timerAlertButton').click();
    page.on("dialog", async (alert2) => {
    
        page.waitForTimeout(8500);
        const text = alert2.defaultValue();
        console.log('alert msg 2: ' + text);
        alert2.accept();
    });

    // await page.locator('#promtButton').click();
    // page.on("dialog", async (alert3) => {
       
    //     await alert3.accept("Hello world!");
    // });
});

test("frames", async ({page}) => {
    await page.goto("https://demoqa.com/frames");
    const frame1 =  page.frame('frame2');
    console.log('frame 1 text : '+ await frame1?.locator('#sampleHeading').innerText());
    const frame2 = page.frame('frame1');
    console.log('frame 2 text : '+ await frame2?.locator('#sampleHeading').innerText());
    
});

test("Nested frames", async ({page}) => {
    await page.goto("https://demoqa.com/nestedframes");
    const frame1 =  page.frame('frame1');
    console.log('frame 1 text : '+ await frame1?.locator('//body').innerText());
    const frame2 = frame1?.childFrames();
    console.log('frame 2 text : '+ await frame2?.at(0)?.locator('//body/p').innerText());
    
});



