import React from 'react'
import Navbar from '../src/components/navbar'
import Footer from '../src/components/footer'
import Rightsinfo from '../src/components/Rightinfo'
export default function Rights() {
  return (
    <>
    <Navbar/>
    <div style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        
        <Rightsinfo/>
      </div>
    <Footer/>
    </>
  )
}
