import React from "react";
import Image from "next/image";
import logo from "../img/Vector.svg";
import Group1 from "../img/Group1.png";
import Group from "../img/Group.png";
import img from "../img/img.png";
import search from "../img/Search.png";
import Link from "next/link";

const Headre = () => {
  return (
    <div className=" h-[82px] mt-[24px] flex justify-between header__conatiner">
      <div className="flex gap-[50px] items-center ">
        <Link href="/">
          <Image width={111} height={30} src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-5">
          <li className="header__item">Ana Sayfa</li>
          <li className="header__item">Diziler</li>
          <li className="header__item">Filmler</li>
          <li className="header__item">Yeni ve Popüler</li>
          <li className="header__item">Listem</li>
          <Link href="/log" >
            <li className="header__item">
              Login
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <div className="header__sarche flex items-center">
          <input className="header__input" type="sarche" />
          <Image className="w-5 h-5" src={search} alt="search" />
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="header__item">ÇOCUK</h2>
          <Image className="w-5 h-5" src={Group} alt="Group" />
          <Image className="w-5 h-5" src={Group1} alt="Group" />
          <Image className="w-8 h-8" src={img} alt="dw" />
        </div>
      </div>
    </div>
  );
};

export default Headre;
