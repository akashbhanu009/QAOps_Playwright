import { test, expect } from '@playwright/test';

import {LoginPage } from '../pages/loginPOM.js';

test('@Login Login POM test', async ({ page }) => {

    const login = new LoginPage(page);
    
    await login.navigateToLoginPage();
    await login.loginToApplication('tomsmith', 'SuperSecretPassword!');
});

// use the context to share the browser instance across multiple tests
test('context test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const login = new LoginPage(page);
    await login.navigateToLoginPage();
    await login.loginToApplication('tomsmith', 'SuperSecretPassword!');
});