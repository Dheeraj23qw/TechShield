import React from 'react';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import styles from './page_module_css/help.module.css'; 

export default function Help() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 120px)', padding: '20px' }}>
        <div className={styles.container}>
          <h2>Helpline Numbers</h2>
          <ul className={styles.list}>
            <li><strong>National Commission for Women Helpline:</strong> 7827170170</li>
            <li><strong>Central Social Welfare Board - Police Helpline:</strong> 1091 / 1291, (011) 23317004</li>
            <li><strong>Shakti Shalini:</strong> 10920</li>
            <li><strong>Shakti Shalini - women's shelter:</strong> (011) 24373736 / 24373737</li>
            <li><strong>SAARTHAK:</strong> (011) 26853846 / 26524061</li>
            <li><strong>All India Women's Conference:</strong> 10921 / (011) 23389680</li>
            <li><strong>JAGORI:</strong> (011) 26692700</li>
            <li><strong>Joint Women's Programme:</strong> (011) 24619821</li>
            <li><strong>Sakshi - violence intervention center:</strong> (0124) 2562336 / 5018873</li>
            <li><strong>Saheli - a womens organization:</strong> (011) 24616485 (Saturdays)</li>
            <li><strong>Nirmal Niketan:</strong> (011) 27859158</li>
            <li><strong>Nari Raksha Samiti:</strong> (011) 23973949</li>
            <li><strong>RAHI Recovering and Healing from Incest:</strong> (011) 26238466 / 26224042, 26227647</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
