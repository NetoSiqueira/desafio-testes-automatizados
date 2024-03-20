package base;

import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.text.SimpleDateFormat;
import java.util.Date;

import static core.DriverFactory.*;

public class BaseSteps {
    public static Scenario scenario;
    public static boolean FECHAR_BROWSER = true;

    public static void OpenBrowser() {
        if (getDriver() != null)return;

    }

    public static void CloseBrowser() {
        if (getDriver() == null) return;
        killDriver();
    }

    public static void screenshot() {
        try {
            String dataHora = (new SimpleDateFormat("yyyy-MM-dd_-_HH-mm-ss-SSS")).format(new Date());
            byte[] screenshot = ((TakesScreenshot) getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot, "image/png", dataHora + "_screenshot.png");
        } catch (ClassCastException cce) {
            cce.printStackTrace();
        }
    }
}
