package page;

import base.BasePage;
import org.openqa.selenium.By;


public class CadastroDeUsuarioPage extends BasePage {
    private final By nome = By.id("nome");
    private final By email = By.id("email");
    private final By senha = By.id("senha");
    private final By bntCadastrar = By.xpath("//*[@class=\"btn btn-primary\"]");

    public void clicarNovoUsuario(){
        clicarLink("Novo usuário?");
    }

    public void escreverNome(String cadastro){
        waitElementVisible(nome, 5);
        escreve(nome,cadastro);
    }
    public void escreverEmail(String cadastro){
        escreve(email,cadastro);
    }
    public void escreverSenha(String cadastro){
        escreve(senha,cadastro);
    }
    public void clicarCadastrar(){
        clicar(bntCadastrar);
    }

}
