import test from "@playwright/test";
import LoginPage from "../pages/Login/loginJornada";
import loginFixture from "../fixture/user.fixture.json" assert {type: "json"};
import loginData from "../data/login.data.json" assert {type: "json"};

test.describe('Página de Login', () => {

    test('Deve Conseguir fazer login com email e senha válidos', async ({ page }) => {
        //await page.goto('/');
        const loginPage = new LoginPage(page);

        await loginPage.visitar();
        await loginPage.fazerLogin(loginFixture.userLogin.email, loginFixture.userLogin.senha);
        await loginPage.loginFeitoComSucesso();


    });

    test('Não deve conseguir fazer login com email inválido', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.visitar();
        await loginPage.fazerLogin(loginFixture.userInvalidLogin.email, loginFixture.userInvalidLogin.senha);
        await loginPage.estaMostrandoMensagemDeErro(loginData.mensagemInvalidUser);
    })
})