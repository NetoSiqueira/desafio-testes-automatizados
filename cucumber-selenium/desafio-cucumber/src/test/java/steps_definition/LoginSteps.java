package steps_definition;

import base.BaseSteps;
import io.cucumber.java.pt.Quando;
import page.LoginPage;

public class LoginSteps extends BaseSteps {
    private LoginPage page = new LoginPage();

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

}
