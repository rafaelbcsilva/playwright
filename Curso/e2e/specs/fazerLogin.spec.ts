import { test } from '../pages/Login/loginJornada'
import LoginPage from "../pages/Login/loginJornada";
import loginFixture from "../fixture/user.fixture.json" assert {type: "json"};
import loginData from "../data/login.data.json" assert {type: "json"};

test.describe('Página de Login', () => {

    test('Deve Conseguir fazer login com email e senha válidos', async ({ loginPage }) => {
        //await page.goto('/');

        await loginPage.fazerLogin(loginFixture.userLogin.email, loginFixture.userLogin.senha);
        await loginPage.loginFeitoComSucesso();


    });

    test('Não deve conseguir fazer login com email inválido', async ({ loginPage }) => {

        await loginPage.fazerLogin(loginFixture.userInvalidLogin.email, loginFixture.userInvalidLogin.senha);
        await loginPage.estaMostrandoMensagemDeErro(loginData.mensagemInvalidUser);
    })
})