import React, { useState } from 'react'
import MyContext from '..'

function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
