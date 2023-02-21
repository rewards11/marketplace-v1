import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
const privacy = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>privacy</title>
      <link rel="icon" href="/rewards11favconic.ico" />
    </Head>

    <Header />

    <main className={styles.main_1}>
    privacy
    </main >

    <Footer />
  </div >
  )
}

export default privacy