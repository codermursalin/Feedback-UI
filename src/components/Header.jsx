import React from 'react'

const Header = () => {
    const headerStyles = {
        backgroundColor: "rgba(0,0,0,0.4)",
        color: "#ff6a95"
      }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>FeedBack UI</h2>
        </div>


    </header>
  )
}

export default Header