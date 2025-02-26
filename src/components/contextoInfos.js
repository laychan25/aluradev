import { createContext, useContext, useState } from "react";


export const ContextoInfos = createContext()


 export function PublicacaoProvider ({children}){
    
    const [publicacao , setPublicacao] = useState({
        titulo: '',
        desc: '',
        cor: '',
        linguagemEscolhida: '',
        codigo: ''
        
    })


    function atualizaPublicacao(novaPublicacao) {
        setPublicacao((prev) => ({
            ...prev,  
            ...novaPublicacao 
        }));
    }
    
    
    return(
        <ContextoInfos.Provider value={{publicacao , atualizaPublicacao}}>
            {children}
        </ContextoInfos.Provider>
    )

 }

 export function useInfos(){
    const context  = useContext(ContextoInfos)
    if (!context) {
        throw new Error('useUsuario deve ser usado dentro de um UsuarioProvider');
      }
      return context;
    
 }
    
