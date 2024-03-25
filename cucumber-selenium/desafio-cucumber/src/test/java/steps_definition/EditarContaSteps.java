package steps_definition;

import base.BaseSteps;
import io.cucumber.java.pt.Quando;
import page.CadastroDeUsuarioPage;
import page.ContaPage;

public class EditarContaSteps extends BaseSteps {

    private ContaPage page = new ContaPage();
    CadastroDeUsuarioPage conta = new CadastroDeUsuarioPage();

    @Quando("o usuario selecionar a opção editar conta")
    public void oUsuarioSelecionarAOpçãoEditarConta() {
       page.clicarEditar();
    }
    @Quando("o usuario preencher o campo nome com nome diferente")
    public void oUsuarioPreencherOCampoNomeComNomeDiferente() {
        conta.escreverNome("testando");
    }

    @Quando("o usuario preencher o campo nome  com mesmo nome")
    public void oUsuarioPreencherOCampoNomeComMesmoNome() {
       conta.escreverNome("Conta para alterar");
    }
}
