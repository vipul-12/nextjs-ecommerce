import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { GrCart } from "react-icons/gr";
import { FaRegWindowClose } from "react-icons/fa";

const NavBar = () => {
  const theRef = useRef();

  const toggleCart = () => {
    if (theRef.current.classList.contains("translate-x-full")) {
      theRef.current.classList.remove("translate-x-full");
      theRef.current.classList.add("translate-x-0");
    } else if (!theRef.current.classList.contains("translate-x-full")) {
      theRef.current.classList.remove("translate-x-0");
      theRef.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center justify-between py-2 shadow-xl">
      <Link href={"/"}>
        <div className="flex logo mx-5">
          <Image src="/logo.svg" width={50} height={50} alt="Logo here" />
          <span className="font-bold">
            <h1>BatDrobe.com</h1>
          </span>
        </div>
      </Link>

      <div className="navigation">
        <ul className="flex space-x-5 font-semibold">
          <Link href={"/tshirts"}>
            <li>T-Shirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>

      <div className="cart absolute right-0 mx-4 top-4 cursor-pointer">
        <GrCart className="text-2xl" onClick={toggleCart} />
      </div>

      <div
        ref={theRef}
        className="sideBar absolute top-0 right-0 bg-yellow-600 p-5 transform transition-transform translate-x-full"
      >
        <span className="absolute top-0 right-0 cursor-pointer">
          <FaRegWindowClose onClick={toggleCart} />
        </span>
        <h3 className="text-xl font-bold">Shopping Cart</h3>
        <ol>
          <li>
            <span>T Shirts</span>
          </li>
          <li>
            <span>Hoodies</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NavBar;
