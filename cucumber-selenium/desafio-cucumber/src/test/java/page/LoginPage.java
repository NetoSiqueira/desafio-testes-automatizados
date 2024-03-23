package page;

import base.BasePage;
import org.openqa.selenium.By;

public class LoginPage extends BasePage {

    private final By botaoEntrar = By.cssSelector("button");
    private final By email = By.id("email");
    private final By senha = By.id("senha");
    public void clicarEntrar(){
        clicar(botaoEntrar);
    }

    public void escreverEmail(String cadastro){
        waitElementVisible(email, 5);
        escreve(email,cadastro);
    }
    public void escreverSenha(String cadastro){
        escreve(senha,cadastro);
    }
}
