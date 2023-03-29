import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fb.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tw.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ln.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="wallet">
            <a
              href="#"
              className="metaportal_fn_button wallet_opener"
              onClick={() => walletToggle(true)}
            >
              <span>Wallet</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="http://rewards11.com">

              <img src="/rewards11nlogo.png" alt="" width={40} height={40} />

            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="http://rewards11.com">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="/">
                Discover
              </a>
            </li>
            <li>
              <a className="creative_link" href="/sell">
                Sell
              </a>
            </li>

            {/* <li>
              <a className="creative_link" href="#collection">
                Collection
              </a>
            </li> */}
            <li>
              <a className="creative_link" href="https://rewards11.com/blog">
                Blog
              </a>
            </li>
            {/* <li>
              <a className="creative_link" href="#contact">
                Contact
              </a>
            </li> */}
            <li>
              <a className="creative_link" href="https://rewards11.com/company">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
