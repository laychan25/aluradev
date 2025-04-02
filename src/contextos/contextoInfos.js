import { createContext, useContext, useState } from "react";

export const ContextoInfos = createContext();

export function PublicacaoProvider({ children }) {
  const [publicacao, setPublicacao] = useState([
    {
      titulo: "Funçao formata Data",
      desc: "Essa funçao formata a data de duas maneiras distintas",
      cor: "#0E3343",
      linguagemEscolhida: "Javascript",
      codigo:  `export function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    } else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
}`
    },
    
    {
      titulo: "Funçao imc",
      desc: "Funçao que calcula o imc",
      cor: "#3d1d3f",
      linguagemEscolhida: "Javascript",
      codigo:
        "function calcularIMC (peso, altura) { if (typeof peso !== 'number' || typeof altura !== 'number') {console.error('Por favor, insira valores numéricos válidos para peso e altura.'); return;}",
    },
    {
      titulo:"adiciona",
      desc: "metodo de que adiciona uma negociaçao",
      cor: "#992f62",
      linguagemEscolhida:'Javascript',
      codigo: `  adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Só são permitidas negociações em dias uteis");
            return;
        }
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
           
      `

    },
   

]);


  function atualizaPublicacao(novaPublicacao) {
    setPublicacao((prev) => [...prev, ...novaPublicacao])
     
  }

  return (
    <ContextoInfos.Provider value={{ publicacao, atualizaPublicacao }}>
      {children}
    </ContextoInfos.Provider>
  );
}

export function useInfos() {
  const context = useContext(ContextoInfos);
  if (!context) {
    throw new Error("useUsuario deve ser usado dentro de um UsuarioProvider");
  }
  return context;
}
