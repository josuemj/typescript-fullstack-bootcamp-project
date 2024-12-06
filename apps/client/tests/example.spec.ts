import { test, expect } from '@playwright/test';

test.describe('E2E Test for Product Search and Details Page', () => {
  test('should navigate, filter, select, and view product details', async ({ page }) => {
    // Navigate to the application
    await page.goto('http://localhost:5173/');

    // Assert the page loaded
    await expect(page).toHaveURL('http://localhost:5173/');
    await expect(page.locator('text=Loading...')).not.toBeVisible();

    // Enter a search query
    const searchBox = page.locator('input[placeholder="Search..."]'); // Adjust the selector to match your NavBar input
    await searchBox.fill('Sample Product');
    await searchBox.press('Enter'); // Simulate pressing "Enter" key

    // Wait for product results to load
    const productList = page.locator('.product-list'); // Adjust selector for your product list
    await expect(productList).toBeVisible();

    // Select a filter
    const filterButton = page.locator('button[data-filter="filter-name"]'); // Adjust selector for your filter button
    await filterButton.click();

    // Click a product to navigate to the details page
    const productLink = productList.locator('a').first(); // Adjust selector for your product links
    await productLink.click();

    await expect(page).toHaveURL(/\/product\/\d+/); // Match URL to product details route



    const productDescription = page.locator('p.product-description'); // Adjust selector for your product description
    await expect(productDescription).toBeVisible();
  });
});
