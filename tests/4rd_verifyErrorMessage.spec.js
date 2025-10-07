const { test, expect } = require('@playwright/test');


    test('Invalid Login Attempt', async ({ page }) => {
        // Navigate to the login page
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Fill in credentials and log in
        await page.getByPlaceholder("Username").fill("Admin", { delay: 100 });
        await page.getByPlaceholder("Password").fill("admin343123", { delay: 100 });
        await page.getByRole("button", { name: "Login" }).click();
        // Assert that the error message is visible
        const errorMessage = await expect(page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).toContainText();
        console.log("Error message is visible:", +errorMessage);

    })
