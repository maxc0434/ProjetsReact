import React from 'react'

export default function Wrapper({children}) {

  return (
    <div style={{
          backgroundColor: "#ffffff",
          width: "400px",
          padding: "10px",
          margin: "10px auto",
          borderRadius: "45px",
          
          
        }}>

      {children}
      
    </div>
  )
}
