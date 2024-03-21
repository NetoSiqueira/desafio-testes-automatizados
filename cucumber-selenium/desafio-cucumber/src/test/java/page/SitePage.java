package page;

import base.BasePage;

public class SitePage extends BasePage {
    private final String url = "https://seubarriga.wcaquino.me";

    public void navegarSite(){
        getDriver().get(url);
    }
}
