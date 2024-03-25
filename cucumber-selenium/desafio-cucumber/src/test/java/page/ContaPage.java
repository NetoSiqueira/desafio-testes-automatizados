package page;

import base.BasePage;
import org.openqa.selenium.By;

public class ContaPage extends BasePage {
    private final By bnt_editar = By.xpath("//td[1]/../td/a");

    public void clicarEditar(){
        clicar(bnt_editar);
    }
}
