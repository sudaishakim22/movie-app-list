import React from "react";

const Header = () => {
  return (
    <div className="h-20 flex text-gray-50 justify-between items-center pl-4 pr-4">
      <div>
        <h1 className="text-xl">MovieInfo</h1>
      </div>
      <div>
        <ul className="flex">
          <li className="mr-5">
            <a href="#">Your Favorite</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
