import test, { expect } from "@playwright/test";

test.describe('Pagina Inicial', () => {
    test('Deve visitar a pagina inicial', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Jornada Milhas');

        // const tituloPassagens = page.getByRole('heading', { name: 'Passagens' });
        //await expect(tituloPassagens).toBeVisible();
        const tituloPassagens = page.getByTestId('titulo-passagens');
        await expect(tituloPassagens).toBeVisible();
    });

});