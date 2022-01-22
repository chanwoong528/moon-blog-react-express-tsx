import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const menus = [
    { url: "/", name: "home" },
    { url: "/post", name: "post" },
  ];
  return (
    <nav>
      <ul>
        {menus.map((menu) => {
          return (
            <li>
              <Link to={menu.url}>{menu.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
