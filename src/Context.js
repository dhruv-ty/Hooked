import {React, createContext, useState} from 'react'

export const Cont =createContext();

const Context = ({children}) => {
  const [Count, setCount] = useState(45);  
  return (
    <Cont.Provider value={{Count, setCount}}>
     {children}
    </Cont.Provider>
  )
}

export default Context