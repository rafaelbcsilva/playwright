

import { expect, Locator, Page } from "@playwright/test";
import { test as base } from '@playwright/test'


export const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const paginaLogin = new LoginPage(page);
        await paginaLogin.visitar();
        await use(paginaLogin);

    }
});

class LoginPage {

    private readonly page: Page;
    private readonly buttonLogin: Locator;
    private readonly fieldEmail: Locator;
    private readonly fieldSenha: Locator;
    private readonly buttonAcessarConta: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonLogin = page.getByTestId('botao-login');
        this.fieldEmail = page.getByTestId('input-email');
        this.fieldSenha = page.getByTestId('input-senha');
        this.buttonAcessarConta = page.getByTestId('botao-acessar-conta');

    }
    async visitar() {
        await this.page.goto('/');
        await this.buttonLogin.click();
        await expect(this.page).toHaveURL('/auth/login');
    }
    async fazerLogin(email: string, senha: string) {
        await this.buttonLogin.click();
        await this.fieldEmail.fill(email);
        await this.fieldSenha.fill(senha);
        await this.buttonAcessarConta.click();
    }
    async loginFeitoComSucesso() {
        await expect(this.page).toHaveURL('/home');
    }
    async estaMostrandoMensagemDeErro(mensagem: string) {
        const elementoErro = this.page.getByText(mensagem);
        await expect(elementoErro).toBeVisible();
    }

} export default LoginPage;