import test from "@playwright/test";
import PaginaPrincipal from "../pages/PaginaPrincipal/paginaPrincipal";

test.describe('Buscar Passagens', () => {

    test('Deve Buscar Passagem de somente ida', async ({ page }) => {

        const paginaPrincpal = new PaginaPrincipal(page);

        await paginaPrincpal.visitar();
        await paginaPrincpal.definirSomentIda();
        await paginaPrincpal.abrirModalPassageiros();
        await paginaPrincpal.definirPassageirosAdultos(2);
        await paginaPrincpal.definirPassageirosCriancas(1);
        await paginaPrincpal.definirPassageirosBebes(1);
        await paginaPrincpal.fecharModalPassageiros();
        await paginaPrincpal.definirOrigem('Minas Gerais');
        await paginaPrincpal.definirDestino('Rio de Janeiro');
        //await paginaPrincpal.definirDataIda(new Date(2025, 4, 15)); // mês é zero-based → 4 = maio
        await paginaPrincpal.definirDataIda(new Date('2025-05-16T15:00:00Z'));
        await paginaPrincpal.buscarPasssagens();
        await paginaPrincpal.estaMostrandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro');


    })


})