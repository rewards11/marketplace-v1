import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  const images = [
    require('../../public/ca1.png'),
    require('../../public/ca2.png'),
    require('../../public/ca4.png'),
    require('../../public/11.png'),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  // // useEffect(() => {
  // //   const interval = setInterval(() => {
  // //     const nextIndex = (currentIndex + 1) % images.length;
  // //     const currentImage = document.querySelector('.carousel img.active');
  // //     const nextImage = document.querySelectorAll('.carousel img')[nextIndex];

  // //     currentImage.classList.remove('active');
  // //     nextImage.classList.add('active');

  // //     setCurrentIndex(nextIndex);
  // //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Rewards11</title>
        <link rel="icon" href="/rewards11favconic.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {/* <div className="carousel">
                  <style jsx>{`
                  .carousel {
                    width: 100%;
                    height: 500px;
                    overflow: hidden;
                    position: relative;
                  }
                  .carousel img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                  }
                  .carousel img.active {
                    opacity: 1;
                  }
                `}
                  </style>
                  <div style={{width:"100%"}}>
                  <Image className={styles.img_car} src={images[currentIndex]} alt="carousel image" />
                </div>
                </div> */}
        {/* <Carousel style={{width:"100%"}}>
                  <div  style={{width:"100%"}}>
                    <Image className={styles.img_car} src={require('../../public/ca1.png')} ></Image>
                  </div>
                  <div style={{width:"100%"}}>
                    <Image className={styles.img_car} src={require('../../public/ca2.png')} ></Image>
                  </div>
                  <div style={{width:"100%"}}>
                    <Image className={styles.img_car} src={require('../../public/ca3.jpg')} ></Image>
                  </div>
                  <div style={{width:"100%"}}>
                    <Image className={styles.img_car} src={require('../../public/ca4.png')} ></Image>
                  </div>
                </Carousel>  */}
        {/* <div className={styles.carousel}>
                  <Image className={styles.img_car} src={require('../../public/ca1.png')} ></Image>
                  <Image className={styles.img_car} src={require('../../public/ca2.png')} ></Image>
                  <Image className={styles.img_car} src={require('../../public/ca3.jpg')} ></Image>
                </div> */}


        <div className={styles.carouselContainer}>
          <h2>Current slide: {currentSlide}</h2>
          <Slider {...settings}>
            <div>
              <Image className={styles.img_car} src={require('../../public/ca1.png')} />
            </div>
            <div>
              <Image className={styles.img_car} src={require('../../public/ca2.png')} />
            </div>
            <div>
              <Image className={styles.img_car} src={require('../../public/ca4.png')} />
            </div>
            <div>
              <Image className={styles.img_car} src={require('../../public/11.png')} />
            </div>
          </Slider>
        </div>
        <div className={styles.th_sec}>
          <div className={styles.th_sec_m}>

            <div className={styles.th_sec_mf}>
              <div className={styles.th_sec_mf1}>

                <h5 className={styles.mf1_h5}>The Rewards11 NFT-based loyalty program is set to become the new standard in loyalty rewards programs. With its unique approach to loyalty rewards and its ability to create valuable digital assets for customers, this program is sure to become a popular choice for brands looking to enhance their loyalty offerings. </h5>
                <h4 style={{ textAlign: 'center' }}>
                  <br />

                </h4>
                <p style={{ marginBottom: '1rem' }}>
                  <Link className={styles.learn_more_btn} href='/learn-more'>Learn More</Link>
                </p>

              </div>

              <div className={styles.th_sec_mf2}>
                <Image className={styles.img_mx} src={require('../../public/dotmover.svg')}></Image>
              </div>
            </div>

          </div>
        </div>


        <div style={{ paddingTop: 12, backgroundColor: '#5D679F' }}>
          <div className={styles.sp}>
            <p style={{ marginBottom: '1rem' }}></p>
          </div>
        </div>

        <div className={styles.mc}>
          <div className={styles.mc1}>


            <div className={styles.mc1_a}>

              <div className={styles.mc1_a1}>
                <div className={styles.mc1_a1_1}>
                  <Image className={styles.img_a1} src={require('../../public/Slide1.jpg')} ></Image>
                  <div className={styles.mc1_a1_2}>
                    <h3 style={{ fontSize: '2.25rem' }}>
                      Our mission
                    </h3>
                    <p>
                      Provide IT platform to optimize MARCOM cost and 100% benefits of Rewards scheme to end customers
                    </p>
                  </div>
                </div>

              </div>



              <div className={styles.mc1_a1}>
                <div className={styles.mc1_a1_1}>
                  <Image className={styles.img_a1} src={require('../../public/slide-2.jpg')} ></Image>
                  <div className={styles.mc1_a1_2}>
                    <h3 style={{ fontSize: '2.25rem' }}>
                      Our strength
                    </h3>
                    <p>
                      Experienced technical team with expertise on blockchain process with an experience of equal to its inception age.
                    </p>
                  </div>
                </div>

              </div>



              <div className={styles.mc1_a1}>
                <div className={styles.mc1_a1_1}>
                  <Image className={styles.img_a1} src={require('../../public/slide-3.jpeg')} ></Image>
                  <div className={styles.mc1_a1_2}>
                    <h3 style={{ fontSize: '2.25rem' }}>
                      Our team
                    </h3>
                    <p>
                      Blend of technical and process consultants with experience for more than 20 years in MARCOM domain.
                    </p>
                  </div>
                </div>

              </div>

            </div>




          </div>
        </div>

        <div className={styles.upper}>
          <div className={styles.fimg}>
          </div>
          <div className={styles.bottm}>
            <div className={styles.bottm2}>
              <div className={styles.bottm3}>
                <h3 className={styles.had} >
                  <b style={{ fontWeight: 'bold', fontSize: '2.25rem', }}>Niche product- enjoy the benefits of being first!</b>
                  <br />
                </h3>
                <p style={{ marginBottom: '1rem', textAlign: 'right', marginBottom: '1rem' }}>
                  Become benchmarks of future, let the world follow you!!
                </p>
              </div>
              <div className={styles.butn}>
                <span className={styles.butn1}>
                  <Link className={styles.butn2} href='/contactus'>Contact us</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main >

      <Footer />
    </div >
  );
}
