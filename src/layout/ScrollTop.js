import Link from "next/link";
import { useEffect } from "react";
import { scrollTop } from "../utilits";

const ScrollTop = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <Link href="#" className="metaportal_fn_totop" style={{ height: "183px" }}>
      <span className="totop_inner">
        <span className="icon">
          <img src="/svg/down.svg" alt="" className="fn__svg" />
        </span>
        <span className="text">Scroll To Top</span>
      </span>
    </Link>
  );
};
export default ScrollTop;
