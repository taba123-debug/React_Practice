import React from 'react'
// import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const layout = (children) => {
  return (
    
      <div>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default layout
