import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import SearchMenu from "components/SearchMenu";
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

            <div className="logo">
              <Link href="http://rewards11.com">

                <img src="/rewards11nlogo.png" alt="" width={50} height={50} />

              </Link>
            </div>
            {/* <div className="social">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fb.
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tw.
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    In.
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ln.
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          
          <div className="wallet flex flex-[0.25] justify-between">
          <SearchMenu style={{color: '#fff'}} />
            <Link
              href="#"
              className="metaportal_fn_button wallet_opener"
              onClick={() => walletToggle(true)}
            >
              <span>Wallet</span>
            </Link>
          </div>
        </div>
        {/* <div className="mob_mid">
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
        </div> */}
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <Link className="creative_link" href="http://rewards11.com">
                Home
              </Link>
            </li>
            <li>
              <Link className="creative_link" href="/">
                Discover
              </Link>
            </li>
            <li>
              <Link className="creative_link" href="/sell">
                Sell
              </Link>
            </li>


            <li>
              <Link className="creative_link" href="https://rewards11.com/blog">
                Blog
              </Link>
            </li>

            <li>
              <Link className="creative_link" href="https://rewards11.com/company">
                About
              </Link>
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
