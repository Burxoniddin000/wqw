import React from "react";
import Movie from "../img/HighlightedMovie.png";
import play from "../img/Play.png";
import Detail from "../img/Detail.png";
import Image from "next/image";
import Sinfelswiper from "@/pages/products/swiper";


const Mainn = ({ props }) => {
  const styling = {
    backgroundImage: `url('${Movie.src}')`,
    width: "1350px",
    height: "810px",
    objectFit: `contain`,
  };

  return (
    <>
      <div style={styling} className="main__container mb-8 pl-16">
        <div className="pt-48">
          <div className="">
            <div className="main__name__div">
              <h1 className="main__name">YNIMDA KAL</h1>
            </div>
            <h3 className="main__numara">Türkiye’de Bugün 4 Numara</h3>
            <p className="main__taxt">
              Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş
              dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı
              bir kızla karşılaşır ve hayatı değişir.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="flex gap-5 main__btn__div">
                <Image className="w-8 h-8" src={play} alt="play" />
                <button className="main__btn">Oynat</button>
              </div>
              <div className="main__btn__div2 flex gap-5">
                <Image className="w-8 h-8" src={Detail} alt="play" />
                <button className="main__btn2">Daha Fazla Bilgi</button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="main__swiper__name">Netflixte Popüler</h3>
            <Sinfelswiper props={props}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainn;
