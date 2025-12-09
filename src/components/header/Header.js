import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postAction";
import { getSuggestions } from "../../redux/actions/suggestionsAction";

const Header = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRefreshHome = () => {
    window.scrollTo({ top: 0 });
    dispatch(getPosts(auth.token));
    dispatch(getSuggestions(auth.token));
  };

  return (
    <div className="header bg-light navbar-expand-lg">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <div className="container-fluid">
          {/* <Link to="/" className="logo" onClick={handleRefreshHome}> */}
          <img
            src="https://icon-library.com/images/i-icon-png/i-icon-png-28.jpg"
            class="img-fluid"
            alt="..."
            width={30}
          />
          <h1 onClick={handleRefreshHome} className="navbar-brand  p-0 m-0">
            InstaBook
          </h1>
          {/* </Link> */}

          <Search />

          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
