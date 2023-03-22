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
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a
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
                  <a
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
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <a
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
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Home
                      </span>
                    </a>
                  </li>

                  <li>
                    <Link href="/" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">#1 3D Carousel</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">
                        #2 Bended Carousel
                      </span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">
                        #3 Video Background
                      </span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">#4 Water Effect</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">
                        #5 Simple Carousel
                      </span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/index-6" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">
                        #6 Fullscreen Slider
                      </span>

                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/nft/1" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Mint Page</span>

                </Link>
              </li>
              <li>
                <Link href="/collection" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Collection</span>

                </Link>
              </li>
              <li>
                <a
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
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Pages
                      </span>
                    </a>
                  </li>

                  <li>
                    <Link href="/coming-soon" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">Coming Soon</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/404" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">404 Page</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/protected" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">Protected Page</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/no-results" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">Search No Results</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">Cookies</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/policy" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">Privacy Policy</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions" onClick={() => navigationToggle(false)}>

                      <span className="creative_link">
                        Terms &amp; Conditions
                      </span>

                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/blog" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Blog</span>

                </Link>
              </li>
              <li>
                <Link href="/blog-single" onClick={() => navigationToggle(false)}>

                  <span className="creative_link">Blog Single</span>

                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2022 - Designed &amp; Developed by{" "}
                <a
                  href="https://themeforest.net/user/codeefly/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  CodeeFly
                </a>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/facebook-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/instagram-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
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
