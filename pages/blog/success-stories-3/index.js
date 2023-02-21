import React from 'react'
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import styles from '../../../styles/Home.module.css';
import Head from 'next/head';
const successstories3 = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>successstories</title>
      <link rel="icon" href="/rewards11favconic.ico" />
    </Head>

    <Header />

    <main className={styles.main_1}>
    successstories
    </main >

    <Footer />
  </div >
  )
}

export default successstories3