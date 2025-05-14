import test, { expect } from "@playwright/test";

test.describe('Pagina Inicial', () => {
    test('Deve visitar a pagina inicial', async ({ page }) => {
        await page.goto('http://localhost:4200/');
        await expect(page).toHaveTitle('Jornada Milhas');
    });

});