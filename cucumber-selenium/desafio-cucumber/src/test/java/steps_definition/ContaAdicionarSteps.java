package steps_definition;

import base.BaseSteps;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Quando;
import page.CadastroDeUsuarioPage;
import page.LoginPage;
import page.SitePage;

public class ContaAdicionarSteps extends BaseSteps {

    private LoginPage page = new LoginPage();
    private SitePage site = new SitePage();
    private CadastroDeUsuarioPage conta = new CadastroDeUsuarioPage();
    @Dado("que o usuario esteja logado")
    public void queOUsuarioEstejaLogado() {
        site.navegarSite();
      page.escreverEmail("teste@desafio.com");
      page.escreverSenha("1234");
      page.clicarEntrar();
      page.clicarLink("reset");
    }
    @Quando("o usuario clicar no botao “Salvar”")
    public void oUsuarioClicarNoBotaoSalvar() {
        screenshot();
        page.clicarEntrar();
    }
    @Quando("o usuario preencher o campo nome com caracteres especiais")
    public void oUsuarioPreencherOCampoNomeComCaracteresEspeciais() {
        conta.escreverNome("#");
    }

    @Quando("o usuario preencher o campo nome ja existente")
    public void oUsuarioPreencherOCampoNomeJaExistente() {
       conta.escreverNome("Conta mesmo nome");
    }
    @Quando("o usuario preencher o campo nome com nome existente")
    public void oUsuarioPreencherOCampoNomeComNomeExistente() {
        conta.escreverNome("Conta mesmo nome");
    }

}
