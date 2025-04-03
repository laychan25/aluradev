import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";


export const ContextoInfos = createContext();

export function PublicacaoProvider({ children }) {
  const [publicacao, setPublicacao] = useState([
    {
      id: nanoid(),
      titulo: "Funçao formata Data",
      desc: "Essa funçao formata a data de duas maneiras distintas",
      cor: "#0E3343",
      linguagemEscolhida: "Javascript",
      curtido: false,
      codigo: `export function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
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
}`,
    },

    {
      id: nanoid(),
      titulo: "Funçao imc",
      desc: "Funçao que calcula o imc",
      cor: "#3d1d3f",
      linguagemEscolhida: "Javascript",
      curtido: false,
      codigo:
        "function calcularIMC (peso, altura) { if (typeof peso !== 'number' || typeof altura !== 'number') {console.error('Por favor, insira valores numéricos válidos para peso e altura.'); return;}",
    },
    {
      id: nanoid(),
      titulo: "adiciona",
      desc: "metodo de que adiciona uma negociaçao",
      cor: "#992f62",
      linguagemEscolhida: "Javascript",
      curtido: false,
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
           
      `,
    },
  ]);

  const toglleCurtidas = (id) => {
    setPublicacao((prev) =>
      prev.map((pub) =>
        pub.id === id ? { ...pub, curtido: !pub.curtido } : pub
      )
    );
  };

  function atualizaPublicacao(novaPublicacao) {
    const novaPublicacaoComId = {
      id: nanoid(),
      ...novaPublicacao
    }
    setPublicacao((prev) => [...prev, ...novaPublicacaoComId]);
  }

  return (
    <ContextoInfos.Provider
      value={{ publicacao, atualizaPublicacao, toglleCurtidas }}
    >
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

export const usePublicacoes = () => useContext(PublicacaoProvider);
