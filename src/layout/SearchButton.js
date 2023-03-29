import Link from "next/link";
import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
const SearchButton = ({ searchToggle }) => {
  return (
    <Link
      href="#"
      className="metaportal_fn_search hold"
      onClick={(e) => {
        e.preventDefault();
        searchToggle(true);
      }}
    >
      <span className="icon">
        <img src="/svg/loupe.svg" alt="" className="fn__svg" />
      </span>
    </Link>
  );
};
export default connect(null, { searchToggle })(SearchButton);
