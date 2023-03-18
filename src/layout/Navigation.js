import Link from "next/link";
import { Fragment, useState } from "react";
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
                  <Link legacyBehavior={true}
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="icon">
                        <img src="/img/market/opensea.png" alt="" />
                      </span>
                      <span className="text">Opensea</span>
                    </span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="item">
                  <Link
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="icon">
                        <img src="/img/market/discord.png" alt="" />
                      </span>
                      <span className="text">Discord</span>
                    </span>
                  </Link>
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
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("home");
                  }}
                  className={`${subMenu == "home" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Home
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Home
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">#1 3D Carousel</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #2 Bended Carousel
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #3 Video Background
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">#4 Water Effect</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #5 Simple Carousel
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-6" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          #6 Fullscreen Slider
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/nft/1" legacyBehavior={true} >
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Mint Page</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection" legacyBehavior={true} >
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Collection</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("pages");
                  }}
                  className={`${subMenu == "pages" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Pages
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Pages
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/coming-soon" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Coming Soon</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/404" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">404 Page</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/protected" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Protected Page</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/no-results" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Search No Results</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Cookies</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Privacy Policy</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" legacyBehavior={true} >
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">
                          Terms &amp; Conditions
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/blog" legacyBehavior={true} >
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Blog</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog-single" legacyBehavior={true} >
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Blog Single</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2022 - Designed &amp; Developed by{" "}
                <Link
                  href="https://themeforest.net/user/codeefly/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  CodeeFly
                </Link>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <Link href="#">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img
                      src="/svg/social/facebook-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img
                      src="/svg/social/instagram-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    />
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
