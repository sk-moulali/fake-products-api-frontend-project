import logo from "../assets/ms-logo.png";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";
import { useState, useEffect } from "react";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div className="fixed top-0 w-full bg-white">
      <div className="flex items-center justify-between h-full shadow-lg">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-[100px]" />
        </Link>
        <div className="flex justify-center items-center gap-3">
          <IoSearch className="text-3xl cursor-pointer" />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative flex justify-center h-full"
          >
            <LuShoppingCart className="text-4xl mb-0 mr-10" />
            <div className="absolute left-2.5 -top-2 text-xs font-bold w-[23px] h-[20px] bg-red-600 text-white flex justify-center items-center rounded-full">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
