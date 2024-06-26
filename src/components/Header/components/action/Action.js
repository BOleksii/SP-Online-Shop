import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthenticationStatus } from "../../../../redux/auth/authSlice";
import { BsHeart, BsBasket3, BsSearch } from "react-icons/bs";
import { FaRegUser, FaUserCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useFavorite } from "../../../../components/FavoriteContext.js";
import MouseLeaveContext from "../../../MouseLeaveContext";
import Search from "../../../Search/Search";

import "./Action.scss";

const Action = () => {
  const { favorites } = useFavorite();
  const favoritesLength = favorites.length;
  // console.log("action", favorites);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.loginCustomer.isAuthenticated
  );

  useEffect(() => {
    dispatch(checkAuthenticationStatus());
  }, [dispatch]);

  const [isHovered, setIsHovered] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (!isInputFocused) {
      setIsHovered(false);
    }
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  return (
    <div className="header-icon">
      <div className="header-icon__item">
        {isAuthenticated ? (
          <NavLink to="/cabinet">
            <FaUserCheck className="header-form__icon" color="#FB5A00" />
          </NavLink>
        ) : (
          <NavLink to="/auth">
            <FaRegUser className="header-form__icon" color="curent-color" />
          </NavLink>
        )}
      </div>
      <div
        className="header-icon__item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <BsSearch />
        <MouseLeaveContext.Provider value={handleMouseLeave}>
          {isHovered && (
            <Search
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleInputFocus={handleInputFocus}
            />
          )}
        </MouseLeaveContext.Provider>
      </div>
      <div className="header-icon__item">
        <NavLink to="/favorites">
          <BsHeart
            style={{ color: favoritesLength > 0 ? "#FF6915" : "currentColor" }}
          />
          <span>{favoritesLength}</span>
        </NavLink>
      </div>
      <div className="header-icon__item">
        <NavLink to="/cart">
          <BsBasket3 />
        </NavLink>
      </div>
    </div>
  );
};

export default Action;
