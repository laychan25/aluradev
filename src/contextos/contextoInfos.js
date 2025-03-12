import { createContext, useContext, useState } from "react";

export const ContextoInfos = createContext();

export function PublicacaoProvider({ children }) {
  const [publicacao, setPublicacao] = useState([
    {
      titulo: "Css centralizado",
      desc: "css de como centralizar um item ",
      cor: "#105C7E",
      linguagemEscolhida: "Css",
      codigo:
        " .centered  display: flex; justify-content: center; align-items:center; height: 100vh;",
    },
    
    {
      titulo: "Funçao imc",
      desc: "Funçao que calcula o imc",
      cor: "#3d1d3f",
      linguagemEscolhida: "Javascript",
      codigo:
        "function calcularIMC (peso, altura) { if (typeof peso !== 'number' || typeof altura !== 'number') {console.error('Por favor, insira valores numéricos válidos para peso e altura.'); return;}",
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
