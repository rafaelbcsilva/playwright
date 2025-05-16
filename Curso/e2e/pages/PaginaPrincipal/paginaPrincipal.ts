import { Page, expect } from "@playwright/test";
import { ELEMENTS } from './Locators/elements'
import { format } from 'date-fns';


class PaginaPrincipal {

    private readonly page: Page;
    private readonly el: typeof ELEMENTS

    constructor(page: Page) {


        this.page = page;
        this.el = ELEMENTS;
    }


    async visitar() {
        await this.page.goto('/');
    }
    async definirSomentIda() {
        await this.page.getByTestId(this.el.botaoSomenteIda).click();
    }
    async abrirModalPassageiros() {
        await this.page.getByTestId(this.el.botaoAbrirModalPassageiros).click();
    }
    async definirPassageirosAdultos(qtd: number) {
        for (let i = 1; i < qtd; i++) {
            await this.page.getByTestId(this.el.botaoIncrementarAdultos).getByRole('button', { name: 'adição' }).click();
        }
    }
    async definirPassageirosCriancas(qtd: number) {
        for (let i = 0; i < qtd; i++) {
            await this.page.getByTestId(this.el.botaoIncrementarCriancas).getByRole('button', { name: 'adição' }).click();
        }
    }
    async definirPassageirosBebes(qtd: number) {
        for (let i = 0; i < qtd; i++) {
            await this.page.getByTestId(this.el.botaoIncrementarBebes).getByRole('button', { name: 'adição' }).click();
        }
    }
    async fecharModalPassageiros() {
        await this.page.getByTestId(this.el.botaoFecharModalPassageiros).click();
    }
    async definirOrigem(origem: string) {
        await this.page.getByTestId(this.el.campoDropDownOrigem).getByLabel('Origem').fill(origem);
        await this.page.getByTestId(this.el.campoDropDownOrigem).getByLabel('Origem').press('Enter');
    }
    async definirDestino(destino: string) {
        await this.page.getByTestId(this.el.campoDropdownDestino).getByLabel('Destino').fill(destino);
        await this.page.getByTestId(this.el.campoDropdownDestino).getByLabel('Destino').press('Enter');
    }
    async definirDataIda(data: Date) {
        const dataFormatada = data.toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        //const dataFormatada = data.toLocaleString('en-US', { dateStyle: 'short' }); // Desse jeito só vai mostrar a data com o mês sem o zero exemplo: 15/05/2025 ia retornar 5/15/2025
        /* Outra forma de formatar a data é: instalar o pacote date-fns com o comando npm install date-fns
        importar  o pacote -> import { format } from 'date-fns';
        depois definir a data assim:
        const dataFormatada = format(new Date(data), 'MM/dd/yyyy'); 
        */
        // const dataFormatada = format(new Date(data), 'MM/dd/yyyy');
        console.log('Data formatada é: ', dataFormatada);
        await this.page.getByTestId(this.el.campoDataIda).fill(dataFormatada);

    }
    async buscarPasssagens() {
        await this.page.getByTestId(this.el.botaoBuscarPassagens).click();

    }
    async estaMostrandoPassagem(tipoTrajeto: 'Somente ida' | 'Ida e volta', origem: string, destino: string) {
        await expect(this.page.getByTestId(this.el.textoIdaVolta)).toHaveText(tipoTrajeto);
        await expect(this.page.getByTestId(this.el.containerOrigem)).toContainText(origem);
        await expect(this.page.getByTestId(this.el.containerDestino)).toContainText(destino);
        await expect(this.page.getByTestId(this.el.botaoComprar)).toBeVisible();


    }

} export default PaginaPrincipal;