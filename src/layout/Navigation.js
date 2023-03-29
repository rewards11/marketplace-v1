import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <Link
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </Link>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <Link
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/opensea.png" alt="" />
                  </span>
                  <span className="text">Opensea</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <img src="/img/market/discord.png" alt="" />
                  </span>
                  <span className="text">Discord</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
            // style={{}}
            >

              <li>
                <Link href="https://rewards11.com/" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Home</span>

                </Link>
              </li>

              <li>
                <Link href="/" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Collection</span>

                </Link>
              </li>
              <li>
                <Link href="/sell" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Sell</span>

                </Link>
              </li>

              <li>
                <Link href="http://rewards11.com/blog" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Blog</span>

                </Link>
              </li>

            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright flex justify-center items-center">
              {/* <p> */}

                <Link
                  href="https://rewards11.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src="/rewards11nlogo.png" alt="" width={40} height={40} />
                  {/* Rewards11 */}
                </Link>
              {/* </p> */}
            </div>
            <div className="social_icons">
              <ul>



                <li>
                  <Link href="https://rewards11.com/website/social/twitter">
                    <FaTwitter className="h-[20px] w-[25px]" />
                  </Link>
                </li>
                <li>
                  <Link href="https://rewards11.com/website/social/facebook">
                    <FaFacebook className="h-[20px] w-[25px]" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/inforewards_11">
                    <FaInstagram className="h-[20px] w-[25px]" />
                  </Link>
                </li>



                <li>
                  <Link href="https://www.linkedin.com/company/rewards11/">
                    {/* <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    /> */}
                    <FaLinkedin className="h-[20px] w-[25px]" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/rewards11/">
                    {/* <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    /> */}
                    <FaGithub className="h-[20px] w-[25px]" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@inforewards11/">
                    <FaYoutube className="h-[20px] w-[25px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
