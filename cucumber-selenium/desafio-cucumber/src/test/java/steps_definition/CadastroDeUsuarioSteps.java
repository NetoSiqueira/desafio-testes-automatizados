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
    @Quando("o usuario clicar no link  {string}")
    public void oUsuarioClicarNoLinkNovoUsuario(String link) {
        screenshot();
        page.clicarLink(link);
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
    @Então("o sistema exibe  uma mensagem de sucesso: {string}")
    public void oSistemaExibeUmaMensagemDeSucessoUsuárioInseridoComSucesso(String msg) {
        Assert.assertEquals(msg, alert.retornarMsgSucesso());
        screenshot();
    }

    @Quando("o usuario nao preencher o campo nome")
    public void oUsuarioNaoPreencherOCampoNome() {
       page.escreverNome("");
    }
    @Então("o sistema exibe  uma mensagem de erro: {string}")
    public void oSistemaExibeUmaMensagemDeErro(String msg) {
       screenshot();
       Assert.assertEquals(msg, alert.retornarMsgErro());
    }

    @Quando("o usuario preencher o campo nome com um caracter")
    public void oUsuarioPreencherOCampoNomeComUmCaracter() {
       page.escreverNome("@");
    }
    @Quando("o usuario nao preencher o campo email")
    public void oUsuarioNaoPreencherOCampoEmail() {
        page.escreverEmail("");
    }

    @Quando("o usuario preencher o campo email ja cadastrado")
    public void oUsuarioPreencherOCampoEmailJaCadastrado() {
       page.escreverEmail("neto@neto.com");
    }

    @Quando("o usuario nao preencher o campo senha")
    public void oUsuarioNaoPreencherOCampoSenha() {
        page.escreverSenha("");
    }
    @Quando("o usuario preencher o campo senha com caracter")
    public void oUsuarioPreencherOCampoSenhaComCaracter() {
        page.escreverSenha("1");
    }
}
