import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="logo">
              <Link href="/">

                <img src="/img/logo.png" alt="" />

              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/#home" className="creative_link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="creative_link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#collection" className="creative_link">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="/#news" className="creative_link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="creative_link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                walletToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Connect To Wallet</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);

