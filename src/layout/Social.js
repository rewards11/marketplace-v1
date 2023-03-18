import Link from "next/link";

const Social = () => {
  return (
    <div id="social" className="hold">
      <div className="social">
        <h4 className="title">Follow Us:</h4>
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
            <Link href="https://www.twitter.com/" target="_blank" rel="noreferrer">
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
      </div>
    </div>
  );
};
export default Social;
