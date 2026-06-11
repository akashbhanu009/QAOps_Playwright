
import{test, expect} from '@playwright/test';

test('web page list', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');


// [1] to check the product name and price in the list, you can use the following code:
    const webPageList = page.locator('//div[@data-list="product-layout product-list col-12"]');
    const webPageListItems = webPageList.locator('.product-layout');

    const itemCount = await webPageListItems.count();
    console.log(`Number of items in the list: ${itemCount}`);

    for (let i = 0; i < itemCount; i++) {
        const itemText = await webPageListItems.nth(i).innerText();
        console.log(`Item ${i + 1}: ${itemText}`);
    }   







// [2] to check the product name and price in the list, you can use the following code:

    // const webPageList = page.locator('//div[@data-list="product-layout product-list col-12"]');
    // await expect(webPageList).toBeVisible();
    // await expect(webPageList.filter({ hasText: 'Palm Treo Pro' })).toBeVisible();

    // await expect(webPageList).toContainText('Palm Treo Pro');

    // await expect(webPageList).toContainText('$337.99');
});