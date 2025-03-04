import { createContext, useContext, useState } from "react";

const corContext = createContext()


export function useCor(){
    return useContext(corContext)
}

export function CorProvider({children}){
    const [cor , setCor] = useState("#6bd1ff")

    return (
       <corContext.Provider value={{cor, setCor}}>
           {children}
       </corContext.Provider>
      );
}