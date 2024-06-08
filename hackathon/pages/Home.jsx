import React from 'react';
import styled from 'styled-components';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import HomeCarousel from '../src/components/homeCarousel';
import styles from "./page_module_css/Home.module.css"


export default function Home() {
  return (
    <>
      <Navbar />
   
        <HomeCarousel/>
       <img src="home.jpeg" style={{width:"100%"}}/>
   
      <Footer />
    </>
  );
}
