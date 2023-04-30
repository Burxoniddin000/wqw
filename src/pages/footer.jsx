import React from "react";
import youtube from "../img/youtube.png";
import twiter from "../img/twitter.png";
import instagrem from "../img/instagram.png";
import facebook from "../img/facebook.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="h-[288px] w-[883px] mx-auto p-5 mb-20">
        <div className="flex gap-5 cursor-pointer ">
          <Image width={24} height={20} src={facebook} alt="facebook" />
          <Image width={24} height={20} src={instagrem} alt="instagrem" />
          <Image width={24} height={20} src={twiter} alt="twiter" />
          <Image width={24} height={20} src={youtube} alt="youtube" />
        </div>
        <div className="flex  justify-between ">
          <div>
            <h4 className="footer__link">Seslendirme ve Alt Yazı</h4>
            <h4 className="footer__link">Medya Merkezi</h4>
            <h4 className="footer__link">Gizlilik</h4>
            <h4 className="footer__link">Bize Ulaşın</h4>
          </div>
          <div>
            <h4 className="footer__link">Sesli Betimleme</h4>
            <h4 className="footer__link">Yatırımcı İlişkileri</h4>
            <h4 className="footer__link">Yasal Hükümler</h4>
          </div>
          <div>
            <h4 className="footer__link">Yardım Merkezi</h4>
            <h4 className="footer__link">İş İmkanları</h4>
            <h4 className="footer__link">Çerez Tercihleri</h4>
          </div>
          <div>
            <h4 className="footer__link">Hediye Kartları</h4>
            <h4 className="footer__link">Kullanım Koşulları</h4>
            <h4 className="footer__link">Kurumsal Bilgiler</h4>
          </div>
        </div>
        <button className="footer__btn mt-5 mb-5">Hizmet Kodu</button>
        <p className="footer__link pb-7">© 1997-2021 Netflix, Inc. i-062d573a0ee099242</p>
      </div>
    </>
  );
};
