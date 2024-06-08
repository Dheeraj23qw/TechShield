import React from 'react';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import FirForm from '../src/components/FirForm';

export default function Fir(){

 
  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        
        <FirForm />
      </div>
      <Footer />
    </>
  );
}
