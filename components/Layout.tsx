import { ComponentProps, FC, Fragment, ReactNode, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import NetworkWarning from './NetworkWarning'
import Head from "next/head";
import ImageView from "../src/components/popup/ImageView";
import VideoPopup from "../src/components/popup/VideoPopup";
import PreLoader from "../src/layout/PreLoader";
import { dataBgImg, holdSection, imgToSVG } from "../src/utilits";

import Footer from "./Footer";
import Header from "../src/layout/Header";
import MobileNavigation from "../src/layout/MobileNavigation";
import Navigation from "../src/layout/Navigation";
import ScrollTop from "../src/layout/ScrollTop";
import Searchbox from "../src/layout/Searchbox";
import SearchButton from "../src/layout/SearchButton";
import Social from "../src/layout/Social";
import WalletPopUp from "../src/layout/WalletPopUp";
type Props = {
  navbar: ComponentProps<typeof Navbar>
  children: ReactNode
}

const Layout: FC<Props> = ({ children, navbar }) => {
  useEffect(() => {
    // holdSection();
    imgToSVG();
    dataBgImg();
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Rewards11</title>
      </Head>
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* !Preloader */}
      {/* Left Navigation */}
      <Navigation />
      {/* !Left Navigation */}
      {/* Searchbox Popup */}
      <Searchbox />
      {/* !Searchbox Popup */}
      {/* Wallet Popup */}
      <WalletPopUp />

      <div className="metaportal_fn_main">
        {/* Mobile Navigation */}
        <MobileNavigation />
        {/* !Mobile Navigation */}
        {/* Header */}
        <Navbar />
        {/* !Header */}
        <div style={{height:100}}></div>
        {/* Content */}
        <div className="metaportal_fn_content">
          {children}
          {/* Footer */}
          <Footer />
          {/* !Footer */}
        </div>
        {/* !Content */}
        {/* Social */}
        {/* <Social /> */}
        {/* !Social */}
        {/* Totop */}
        <ScrollTop />
        {/* /Totop */}
        {/* Search Button */}
        <SearchButton />
        {/* !Search Button */}
      </div>
      {/* !Wallet Popup */}
      {/* Main */}
      {/* <Toaster
        position={'top-right'}
        containerStyle={{ zIndex: 100000000000 }}
      />
      <NetworkWarning />
      <main className="mx-auto grid max-w-[2560px] grid-cols-4 gap-x-4 pb-4 md:grid-cols-8 lg:grid-cols-12 3xl:grid-cols-16 4xl:grid-cols-21">
        <Navbar {...navbar} />
        {children}
      </main> */}
    </Fragment>
  )
}

export default Layout
