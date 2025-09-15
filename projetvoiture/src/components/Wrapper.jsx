import React from 'react'

export default function Wrapper({children}) {

  return (
    <div style={{
          backgroundColor: "#5bb85eff",
          width: "400px",
          padding: "10px",
          margin: "10px auto",
          borderRadius: "45px",
          
          
        }}>

      {children}
      
    </div>
  )
}
