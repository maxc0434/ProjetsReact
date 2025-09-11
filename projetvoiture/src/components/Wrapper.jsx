import React from 'react'

export default function Wrapper({children}) {

  return (
    <div style={{
          backgroundColor: "red",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}>

      {children}
      
    </div>
  )
}
