package steps_definition;

import base.BaseSteps;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;
import page.AlertPage;
import page.LoginPage;

public class LoginSteps extends BaseSteps {
    private LoginPage page = new LoginPage();
    private AlertPage alert = new AlertPage();

    @Quando("o usuario clicar no botao “Entrar”")
    public void oUsuarioClicarNoBotaoEntrar() {
       screenshot();
       page.clicarEntrar();
    }

    @Quando("o usuario preencher o campo email do login")
    public void oUsuarioPreencherOCampoEmailDoLogin() {
       page.escreverEmail("teste@desafio.com");
    }
    @Quando("o usuario preencher o campo senha do login")
    public void oUsuarioPreencherOCampoSenhaDoLogin() {
       page.escreverSenha("1234");
    }

    @Quando("o usuario preencher o campo senha invalido")
    public void oUsuarioPreencherOCampoSenhaInvalido() {
      page.escreverSenha("123");
    }
    @Quando("o usuario preencher o campo email invalido")
    public void oUsuarioPreencherOCampoEmailInvalido() {
        page.escreverEmail("testedesafio@teste.com");
    }

    @Então("o sistema exibe  duas mensagem de erros: {string} {string}")
    public void oSistemaExibeDuasMensagemDeErros(String msg, String msg2) {
        screenshot();
        Assert.assertEquals(msg,alert.retornarMsgErro());
        Assert.assertEquals(msg2, alert.retornarMsgErro2());
    }

}
