package page;

import base.BasePage;
import org.openqa.selenium.By;

public class AlertPage extends BasePage {
    private final By msgSucesso = By.cssSelector("div.alert.alert-success");
    private final By msgErro = By.cssSelector("div.alert.alert-danger");

    public String retornarMsgSucesso(){
        return obterValorPorTexto(msgSucesso);
    }
    public String retornarMsgErro(){
        return obterValorPorTexto(msgErro);
    }
}
