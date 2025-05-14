

import test, { expect, Locator, Page } from "@playwright/test";
import { ELEMENTS } from './Locators/elements'

class LoginPage {

    private readonly page: Page;
    private readonly el: typeof ELEMENTS

    constructor(page: Page) {
        this.page = page;
        this.el = ELEMENTS;

    }
    async visitar() {
        await this.page.goto('/');
        await this.page.getByTestId(this.el.buttonLogin).click();
        await expect(this.page).toHaveURL('/auth/login');
    }
    async fazerLogin(email: string, senha: string) {
        await this.page.getByTestId(this.el.buttonLogin).click();
        await this.page.getByTestId(this.el.fieldEmail).fill(email);
        await this.page.getByTestId(this.el.fieldSenha).fill(senha);
        await this.page.getByTestId(this.el.buttonAcessarConta).click();
    }
    async loginFeitoComSucesso() {
        await expect(this.page).toHaveURL('/home');
    }
    async estaMostrandoMensagemDeErro(mensagem: string) {
        const elementoErro = this.page.getByText(mensagem);
        await expect(elementoErro).toBeVisible();
    }

} export default LoginPage;