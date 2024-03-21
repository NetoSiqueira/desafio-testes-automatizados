package steps_definition;

import base.BaseSteps;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.support.ui.WebDriverWait;

import static base.BaseSteps.screenshot;
import static core.DriverFactory.*;


public class Hooks {


    @Before
    public void iniciar(Scenario _scenario){
        BaseSteps.scenario = _scenario;
        wait = new WebDriverWait(getDriver(), 60);
    }


    @After
    public void fechar(Scenario scenario)  {
        if (BaseSteps.scenario.isFailed()) {
            screenshot();
        }
        if (BaseSteps.FECHAR_BROWSER)
            killDriver();
    }
}