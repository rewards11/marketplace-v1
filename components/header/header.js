import * as React from 'react';
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.css';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
function Header() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [isListOpen, setIsListOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };
  return (
    <header>

      <nav>
        <div className={styles.header}>
          <div className={styles.container_h}>
            <Link href="/market" className={`${styles.navbar_brand}, ${styles.logo}, ${styles.me_lg_auto}, ${styles.me_0}`}>
              <Image className={styles.img_logo} src={require('../../public/rewards11homelogo.png')} width={120} height={200}></Image>
            </Link>
            <ul className={styles.under_li}>
              <li>
                <Link href="/web/login">
                  Sign In
                </Link>
              </li>
              {/* <li> */}
              {/* <div>
                  <div className={styles.hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div> */}
              {/* {isPopupOpen && (
                  <div className={styles.popup}>
                    <button className={styles.close_button} onClick={togglePopup}>
                      X
                    </button>
                    <p>This is the content of the popup.</p>
                    <ul className={"list" + (isListOpen ? "show" : "")}>

                      <li >Home</li>

                      <li >Home</li>

                      <li >Home</li>

                      <li>Home</li>

                    </ul>
                  </div>
                )} */}

              {/* <div className={styles.popup_container}>
                  <ToggleButtonGroup
                  className={styles.popup_container}
                    value={alignment}
                    // exclusive
                    onChange={togglePopup}
                    // onChange={handleAlignment}
                    aria-label="text alignment"
                  >
                  </ToggleButtonGroup>
                  <ToggleButton value="justify" aria-label="justified" >
                    <FormatAlignJustifyIcon />
                  </ToggleButton>
                </div> */}

              {/* </li> */}
              {/* {isPopupOpen && (
                  <div className={styles.popup}>
                    <button className={styles.close_button} onClick={togglePopup}>
                      X
                    </button>
                    <p>This is the content of the popup.</p>
                    <ul className={"list" + (isListOpen ? "show" : "")}>

                      <li >Home</li>

                      <li >Home</li>

                      <li >Home</li>

                      <li>Home</li>

                    </ul>
                  </div>
                )} */}



              <li>
                <div className={styles.popup_container}>
                  <button className={styles.popup_button} onClick={togglePopup}>
                    <div>
                      <div className={styles.hamburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </button>
                  {isPopupOpen && (
                    <div className={styles.popup}>
                      <button className={styles.close_button} onClick={togglePopup}>
                        X
                      </button>
                      <p></p>
                      <br />
                      <br />
                      <ul className={"list" + (isListOpen ? "show" : "")}>

                        <li className={styles.pop_li}><Link href="/home" >Home</Link></li>

                        <li className={styles.pop_li}><Link href="/blog" >Blog</Link></li>

                        {/* <li className={styles.pop_li}><Link href="/event" >Events</Link></li> */}

                        {/* <li className={styles.pop_li}><Link href="/shop" >Shop</Link></li> */}

                        <li className={styles.pop_li}><Link href="/our-services">Services</Link></li>

                        <li className={styles.pop_li}><Link href="/blog/news-2">News</Link></li>

                        <li className={styles.pop_li}><Link href="/blog/success-stories-3">Success Stories</Link></li>

                        <li className={styles.pop_li}><Link href='/about-us'>About Us</Link></li>

                        {/* <li className={styles.pop_li}><Link href="/learn-more"  />Learn More</li> */}

                        <li className={styles.pop_li}><Link href="/career"  >Careers</Link></li>

                        {/* <li className={styles.pop_li}><Link href="/cart"  ></Link>My Cart</li> */}

                        <li className={styles.pop_li}><Link href="/market"><Image src={require('../../public/rewards11toggle.png')}></Image></Link></li>

                      </ul>
                    </div>
                  )}
                </div>

              </li>



              <li>
                <div className={styles.blk_btn}>
                  <Link href="/contactus">
                    <span className={styles.inside_btn}>
                      Contact Us
                    </span>
                  </Link>
                </div>
              </li>
            </ul>


          </div>
        </div>
        {/* <div className={styles.container_h}>
          <Link href="/" className={`${styles.navbar_brand}, ${styles.logo}, ${styles.me_lg_auto}, ${styles.me_0}`}>
            <Image className={styles.img_logo} src={require('../../public/rewards11logo.png')} width={120} height={200}></Image>
          </Link>
          <ul className={styles.under_li}>
            <li>
              <Link href="/">
                Sign In
              </Link>
            </li>
            <li>
              <div>
                <div className={styles.hamburger}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.blk_btn}>
                <Link href="/contactus">
                  <span className={styles.inside_btn}>
                    Contact Us
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div> */}



      </nav>
    </header>
  );
}

export default Header;