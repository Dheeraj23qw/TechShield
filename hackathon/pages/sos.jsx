import React from 'react'
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'
export default function Sos() {
  return (
  <>
 <Navbar/>
 <div style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        
        <h1>About Page</h1>
        <p>This is the about page content.</p>
      </div>
 <Footer/>
  </>
  )
}
