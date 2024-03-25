package page;

import base.BasePage;
import org.openqa.selenium.By;

public class MovimentacaoPage extends BasePage {

    private final By campoDataMov = By.id("data_transacao");
    private final By campoDataPag = By.id("data_pagamento");
    private final By campoDescricao = By.id("descricao");
    private final By campoInteressado = By.id("interessado");
    private final By campoValor = By.id("valor");
    private final By campoConta = By.id("conta");

    private final By alert = By.cssSelector(" div.alert.alert-danger");


    public void escreverDataMov(String data){
        waitElementVisible(campoDataMov,5);
        escreve(campoDataMov, data);
    }
    public void escreverDataPag(String data){
        escreve(campoDataPag, data);
    }

    public void escreverDescricao(String descricao){
        escreve(campoDescricao, descricao);
    }

    public void escreverInteressado(String interessado){
        escreve(campoInteressado, interessado);
    }
    public void escreverValor(String valor){
        escreve(campoValor, valor);
    }

    public void escolherConta(String conta){
        selecionarCombo(campoConta, conta);
    }

    public String msgErroMov(){
        return posicaoTexto(obterValorPorTexto(alert),"\n",0);
    }
    public String msgErroMov2(){
        return posicaoTexto(obterValorPorTexto(alert),"\n",1);
    }
}
