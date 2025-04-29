// Syntax for CSS ---> tagName[attribute="Value"]  ==> input[id="user-name"]
// Syntax for Xpath - --> //tagName[@attribute="Value"] ==> //input[@id="user-name"]

//Syntax for ID Attribute in CSS ---> #value ==> #user-name
//Syntax for Class Attribute in CSS -->.value ==>.user-name

import {test, expect } from '@playwright/test';

test('Locator Strategy', async ({page}) =>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('//input[@data-test="login-button"]').click();
    await page.pause();
});