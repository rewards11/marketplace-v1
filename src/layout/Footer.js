import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
          

            <ul>
              <li>
                <Link href="/policy" legacyBehavior={true}>
                  <a className="creative_link">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies" legacyBehavior={true}>
                  <a className="creative_link">Cookies</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" legacyBehavior={true}>
                  <a className="creative_link">Terms &amp; Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="right_part">
          <p>
              Copyright 2022 — Designed &amp; Developed by{" "}
              <Link
                href="https://themeforest.net/user/frenify/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Frenify
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
