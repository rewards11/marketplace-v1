import { ComponentProps, FC, ReactNode, Fragment, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import NetworkWarning from './NetworkWarning'


// import Head from "next/head";
// import { Fragment, useEffect } from "react";
import ImageView from "src/components/popup/ImageView";
import VideoPopup from "src/components/popup/VideoPopup";
import { dataBgImg, holdSection, imgToSVG } from "src/utilits";
import Footer from "src/layout/Footer";
import Header from "src/layout/Header";
import MobileNavigation from "src/layout/MobileNavigation";
import Navigation from "src/layout/Navigation";
import PreLoader from "src/layout/PreLoader";
import ScrollTop from "src/layout/ScrollTop";
import Searchbox from "src/layout/Searchbox";
import SearchButton from "src/layout/SearchButton";
import Social from "src/layout/Social";
import WalletPopUp from "src/layout/WalletPopUp";


type Props = {
  navbar: ComponentProps<typeof Navbar>
  children: ReactNode
}

const Layout: FC<Props> = ({ children, navbar }) => {


  useEffect(() => {
    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);


  return (
    // <>
    //   <Toaster
    //     position={'top-right'}
    //     containerStyle={{ zIndex: 100000000000 }}
    //   />
    //   <NetworkWarning />
    //   <main className="mx-auto grid max-w-[2560px] grid-cols-4 gap-x-4 pb-4 md:grid-cols-8 lg:grid-cols-12 3xl:grid-cols-16 4xl:grid-cols-21">
    //     <Navbar {...navbar} />
    //     {children}
    //   </main>
    // </>


    <Fragment>
      {/* <Head>
        <title>MetaPortal | {pageTitle}</title>
      </Head> */}
      <ImageView />
      <VideoPopup />
      <PreLoader />

      <Navigation />

      <Searchbox />

      <WalletPopUp />

      {/* <div className="metaportal_fn_main"> */}

      {/* <MobileNavigation /> */}

      {/* <Header />

        <div className="metaportal_fn_content">
          {children}

          <Footer />

        </div> */}




      <Toaster
        position={'top-right'}
        containerStyle={{ zIndex: 100000000000 }}
      />
      <NetworkWarning />

      <MobileNavigation /> 
      
      <main className="mx-auto grid max-w-[2560px] grid-cols-4 gap-x-4 pb-4 md:grid-cols-8 lg:grid-cols-12 3xl:grid-cols-16 4xl:grid-cols-21">
        <Navbar {...navbar} />
        {children}
      </main>




      <Social />

      <ScrollTop />

      <SearchButton />

      {/* </div> */}
    </Fragment>


  )
}

export default Layout
