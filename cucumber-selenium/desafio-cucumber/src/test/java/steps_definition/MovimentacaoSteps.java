package steps_definition;

import base.BaseSteps;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;
import page.MovimentacaoPage;

public class MovimentacaoSteps extends BaseSteps {
    private MovimentacaoPage mov = new MovimentacaoPage();
    @Quando("o usuario preencher o campo Data de Movimentação")
    public void oUsuarioPreencherOCampoDataDeMovimentação() {
        mov.escreverDataMov("25/03/2024");
    }
    @Quando("o usuario preencher o campo Data de Pagamento")
    public void oUsuarioPreencherOCampoDataDePagamento() {
       mov.escreverDataPag("25/03/2024");
    }
    @Quando("o usuario preencher o campo Descrição")
    public void oUsuarioPreencherOCampoDescrição() {
       mov.escreverDescricao("teste");
    }
    @Quando("o usuario preencher o campo Interessado")
    public void oUsuarioPreencherOCampoInteressado() {
       mov.escreverInteressado("teste");
    }
    @Quando("o usuario preencher o campo Valor")
    public void oUsuarioPreencherOCampoValor() {
       mov.escreverValor("123");
    }
    @Quando("o usuario preencher o campo Conta")
    public void oUsuarioPreencherOCampoConta() {
       mov.escolherConta("Conta para movimentacoes");
    }
    @Quando("o usuario nao preencher o campo Data de Movimentação")
    public void oUsuarioNaoPreencherOCampoDataDeMovimentação() {
        mov.escreverDataMov("");
    }

    @Quando("o usuario nao preencher o campo Data de Pagamento")
    public void oUsuarioNaoPreencherOCampoDataDePagamento() {
       mov.escreverDataPag("");
    }
    @Quando("o usuario nao preencher o campo Descrição")
    public void oUsuarioNaoPreencherOCampoDescrição() {
        mov.escreverDescricao("");
    }
    @Quando("o usuario nao preencher o campo Interessado")
    public void oUsuarioNaoPreencherOCampoInteressado() {
       mov.escreverInteressado("");
    }
    @Quando("o usuario nao preencher o campo Valor")
    public void oUsuarioNaoPreencherOCampoValor() {
        mov.escreverValor("");
    }
    @Então("o sistema exibe  duas mensagem de erros:  {string} {string}")
    public void oSistemaExibeDuasMensagemDeErros(String msg, String msg2) {
        System.out.println(mov.msgErroMov());
        Assert.assertEquals(msg, mov.msgErroMov());
        Assert.assertEquals(msg2, mov.msgErroMov2());
    }
    @Quando("o usuario preencher o campo Data de Movimentação sem barra")
    public void oUsuarioPreencherOCampoDataDeMovimentaçãoSemBarra() {
        mov.escreverDataMov("25032024");
    }
    @Quando("o usuario preencher o campo Data de Pagamento sem barra")
    public void oUsuarioPreencherOCampoDataDePagamentoSemBarra() {
        mov.escreverDataPag("25032024");
    }
    @Quando("o usuario preencher o campo Valor com caracteres")
    public void oUsuarioPreencherOCampoValorComCaracteres() {
       mov.escreverValor("#");
    }
}
