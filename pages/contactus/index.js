import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
const contactus = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>contactus</title>
      <link rel="icon" href="/rewards11favconic.ico" />
    </Head>

    <Header />

    <main className={styles.main_1}>
    contactus
    </main >

    <Footer />
  </div >
  )
}

export default contactus