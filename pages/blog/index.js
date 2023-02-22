import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
const blog = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>blog</title>
        <link rel="icon" href="/rewards11favconic.ico" />
      </Head>

      <Header />

      <main className={styles.main_1}>
        <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <h1 style={{color:'#000'}}>blog1</h1>
          <h1 style={{color:'#000'}}>blog2</h1>
          <h1 style={{color:'#000'}}>blog3</h1>
          <h1 style={{color:'#000'}}>blog4</h1>
          <h1 style={{color:'#000'}}>blog5</h1>
        </div>
      </main >

      <Footer />
    </div >
  )
}

export default blog