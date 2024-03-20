package core;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory {
    private static WebDriver driver;
    public static WebDriverWait wait;

    public static enum Browser {
        CHROME,
        CHROME_HEADLESS,
        FIREFOX
    }

    public static WebDriver getDriver() {
        if (driver == null)  return getBrownser(Browser.CHROME_HEADLESS);
        return driver;
    }
    public static WebDriver getBrownser(Browser nav){
        ChromeOptions options;


            switch (nav) {

                case CHROME_HEADLESS:
                    System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");

                    WebDriverManager.chromedriver().setup();
                    options = new ChromeOptions();
                    options.addArguments("--lang=pt-BR");
                    options.addArguments("--headless");
                    options.addArguments("--disable-gpu");
                    options.addArguments("--window-size=1920,1080");
                    options.addArguments("--no-sandbox");
                    options.addArguments("--disable-crash-reporter");
                    options.addArguments("--disable-extensions");
                    options.addArguments("--disable-in-process-stack-traces");
                    options.addArguments("--disable-logging");
                    options.addArguments("--disable-dev-shm-usage");
                    options.addArguments("--disable-notifications");
                    options.addArguments("--log-level=3");
                    options.addArguments("--output=/dev/null");
                    driver = new ChromeDriver(options);
                    break;

                case CHROME:

                    WebDriverManager.chromedriver().setup();
                    System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
                    WebDriverManager.chromedriver().setup();
                    options = new ChromeOptions();
                    options.addArguments("--no-sandbox");
                    options.addArguments("--disable-crash-reporter");
                    options.addArguments("--disable-extensions");
                    options.addArguments("--disable-in-process-stack-traces");
                    options.addArguments("--disable-logging");
                    options.addArguments("--disable-dev-shm-usage");
                    options.addArguments("--disable-notifications");
                    options.addArguments("--log-level=3");
                    options.addArguments("--output=/dev/null");
                    driver = new ChromeDriver(options);
                    driver.manage().window().maximize();
                    break;
                case FIREFOX:
                    FirefoxOptions firefoxOptions;
                    WebDriverManager.firefoxdriver().setup();
                    firefoxOptions = new FirefoxOptions();
                    firefoxOptions.addArguments("--lang=pt-BR");
                    firefoxOptions.addArguments("--headless");
                    firefoxOptions.addArguments("--disable-gpu");
                    firefoxOptions.addArguments("--window-size=1920,1080");
                    firefoxOptions.addArguments("--no-sandbox");
                    firefoxOptions.addArguments("--disable-crash-reporter");
                    firefoxOptions.addArguments("--disable-extensions");
                    firefoxOptions.addArguments("--disable-in-process-stack-traces");
                    firefoxOptions.addArguments("--disable-logging");
                    firefoxOptions.addArguments("--disable-dev-shm-usage");
                    firefoxOptions.addArguments("--disable-notifications");
                    firefoxOptions.addArguments("--log-level=3");
                    firefoxOptions.addArguments("--output=/dev/null");
                    driver = new FirefoxDriver(firefoxOptions);
                    break;
                default:
                    driver = null;
                    new Exception("Browser Nao Suportado");
            }


        return driver;
    }

    public static void killDriver(){
        if(driver != null) {
            getDriver().quit();
            driver = null;
        }
    }
}
