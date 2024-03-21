package page;

import base.BasePage;
import org.openqa.selenium.By;

public class AlertPage extends BasePage {
    private final By msgSucesso = By.cssSelector("div.alert.alert-success");

    public String retornarMsgSucesso(){
        return obterValorPorTexto(msgSucesso);
    }
}
