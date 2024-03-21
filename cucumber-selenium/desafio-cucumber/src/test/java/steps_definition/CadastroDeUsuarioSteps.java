package steps_definition;

import base.BaseSteps;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;
import page.AlertPage;
import page.CadastroDeUsuarioPage;
import page.SitePage;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CadastroDeUsuarioSteps extends BaseSteps {
    private AlertPage alert = new AlertPage();
    private SitePage site = new SitePage();
    private CadastroDeUsuarioPage page = new CadastroDeUsuarioPage();
    private String aleatorio = (new SimpleDateFormat("dd-MMM-yyyy-HH-mm-ss")).format(new Date());

    @Dado("que o usuario esteja no site seu barriga")
    public void queOUsuarioEstejaNoSiteSeuBarriga() {
       site.navegarSite();
    }
    @Quando("o usuario clicar no link  “Novo usuario”")
    public void oUsuarioClicarNoLinkNovoUsuario() {
        screenshot();
        page.clicarNovoUsuario();
    }
    @Quando("o usuario preencher o campo nome")
    public void oUsuarioPreencherOCampoNome() {
       page.escreverNome("teste");
    }
    @Quando("o usuario preencher o campo email")
    public void oUsuarioPreencherOCampoEmail() {
       page.escreverEmail("test"+aleatorio+"@teste.com");
    }
    @Quando("o usuario preencher o campo senha")
    public void oUsuarioPreencherOCampoSenha() {
        page.escreverSenha("1234");
    }
    @Quando("o usuario clicar no botao “Cadastrar”")
    public void oUsuarioClicarNoBotaoCadastrar() {
        screenshot();
        page.clicarCadastrar();
    }
    @Então("o sistema exibe  uma mensagem de sucesso: ”Usuário inserido com sucesso ”")
    public void oSistemaExibeUmaMensagemDeSucessoUsuárioInseridoComSucesso() {
        Assert.assertEquals("Usuário inserido com sucesso", alert.retornarMsgSucesso());
        screenshot();
    }
}
