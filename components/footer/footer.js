import Link from 'next/link';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../../styles/Home.module.css';
import { DiscFullRounded, YouTube } from '@mui/icons-material';
function Footer() {

  return (
    <footer>
      <section>
        <div style={{ paddingTop: 32, backgroundColor: '#454C75', color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1320, paddingLeft: 15, paddingRight: 15, marginLeft: 100, marginRight: 50, width: '100%' }}>

            <div style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16, width: '25%' }}>
              <p style={{ marginBottom: 12 }}>How can we help? </p>
              <h4 style={{ marginBottom: 12 }}>Contact us anytime</h4>
            </div>

            <div style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16, width: '25%' }}>
              <p style={{ marginBottom: 12 }}>Call us </p>
              <p style={{ marginBottom: 12 }}>+919999259525</p>
            </div>

            <div style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16, width: '25%' }}>
              <p style={{ marginBottom: 12 }}>Send us a message</p>
              <h5 style={{ marginBottom: 12 }}>
                <Link href='https://info@rewards11.com'>
                  info@rewards11.com
                </Link>
              </h5>
            </div>

            <div style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16, width: '25%' }}>
              <div style={{ marginBottom: 12 }}>
                <p >Follow us</p>
              </div>

              <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Link href='https://twitter.com/IRewards11'>
                    <TwitterIcon fontSize="small" />
                  </Link>
                </div>

                <div>
                  <Link href='https://www.instagram.com/inforewards_11/'>
                    <InstagramIcon fontSize="small" />
                  </Link>
                </div>

                <div>
                  <Link href='https://www.youtube.com/@inforewards11'>
                    <YouTube fontSize="small" />
                  </Link>
                </div>

                <div>
                  <Link href='https://www.linkedin.com/in/rewards-eleven-5a167a264'>
                    <LinkedInIcon fontSize="small" />
                  </Link>
                </div>

                <div>
                  <Link href='https://github.com/rewards11'>
                    <GitHubIcon fontSize="small" />
                  </Link>
                </div>

                <div>
                  <Link href='https://discord.com/invite/qxMqEbC8'>
                    <DiscFullRounded fontSize="small" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 1320, paddingLeft: 15, paddingRight: 15, marginLeft: 100, marginRight: 50, width: '100%' }}>
            <div style={{ width: '100%', paddingTop: 16, paddingBottom: 16 }}>
              <hr style={{ borderColor: '#fff', height: 0.5 }} />
            </div>
          </div>


          <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 1320, paddingLeft: 15, paddingRight: 15, marginLeft: 100, marginRight: 50, width: '100%' }}>
            <div style={{ display: 'flex', width: '100%' }}>
              <div style={{ width: '16.66666667%' }}>
                <Link href="/market" className={`${styles.navbar_brand}, ${styles.logo}, ${styles.me_lg_auto}, ${styles.me_0}`}>
                  <Image className={styles.img_logo} src={require('../../public/REWARDS-11-Final-logo-White.png')} width={120} height={200}></Image>
                </Link>
              </div>


              <div style={{ width: '83.33333333%' }}>
                <p style={{ marginBottom: '0.5rem', marginLeft: '0.5rem' }}>
                  <br />
                </p>

                <ul style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <li style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
                    <Link href='/home'>
                      Home
                    </Link>
                  </li>
                  <span> . </span>
                  <li style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
                    <Link href='/about-us'>
                      About us
                    </Link>
                  </li>
                  {/* <span> . </span> */}
                  {/* <li style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
                    <Link href='/products'>
                      Products
                    </Link>
                  </li> */}
                  <span> . </span>
                  <li style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
                    <Link href='/terms'>
                      Terms of Service
                    </Link>
                  </li>
                  <span> . </span>
                  <li style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
                    <Link href='/privacy'>
                      Privacy Policy
                    </Link>
                  </li>
                  <span> . </span>
                  <li style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
                    <Link href='/forum'>
                      Forum
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          


          <div style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '0.6rem', paddingRight: '0.6rem', marginLeft: '6rem', marginRight: '6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',width:'100%' }}>
              <div>
                <span>
                  Copyright © Rewards11
                </span>
              </div>
              <div style={{ display: 'flex',justifyContent:'space-between',width:'35%' }}>
                <div style={{ display: 'flex',justifyContent:'space-between',width:'100%' }}>
                  <span>  Powered by   </span>
                  <Link className={styles.oddoo_foot} href='https://www.odoo.com/'>
                    <Image  src={require('../../public/odoo_logo_tiny.png')} />
                  </Link>
                  <span>  - The #1  </span>
                  <Link href='https://www.odoo.com/app/ecommerce'>
                    <span style={{color:'#000'}}> Open Source eCommerce </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>



    </footer>
  );
}

export default Footer;