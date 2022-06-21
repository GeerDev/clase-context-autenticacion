import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Header() {
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
  };

  return (
    <nav className="header">
      <span>Header</span>
      <div>
        {token ? (
          <>
            <span>
              <Link to="/products">Products</Link>
              <span onClick={logoutUser}>
                <span>
                  <Link to="/profile">Profile</Link>
                </span>
                <span>
                  <Link to="/cart">
                    <ShoppingCartOutlined />
                  </Link>
                </span>
                <Link to="/">Logout</Link>
              </span>
            </span>
          </>
        ) : (
          <>
            <span>
              <Link to="/register">Register</Link>
            </span>
            <span>
              <Link to="/">Login</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
