import logo from "../assets/ms-logo.png";
import { BsBag } from "react-icons/bs";
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
    <>
      <div className="container flex items-center justify-between h-full">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-[100px] mb-10" />
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl mb-10 mr-10" />
          <div className="bg-red-500 absolute -left-0 -top-0.5 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
