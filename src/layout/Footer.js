import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2022 — Designed &amp; Developed by{" "}
              <a
                href="https://themeforest.net/user/frenify/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Frenify
              </a>
            </p>
          </div>
          <div className="right_part">
            <ul>
              <li>
                <Link href="/policy" className="creative_link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="creative_link">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="creative_link">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
