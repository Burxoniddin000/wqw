import React from "react";
import Sinfelswiper from "@/pages/products/swiperMayin";
import NewMove from "@/pages/products/nweMovi";

export const Allswiper = ({move3 ,move5 }) => {
  return (
    <div>
      <div className="pl-16 mx-auto">
        <h2 className="main__swiper__name">Kemal, İzlemeye Devam Et</h2>
        <Sinfelswiper props={move3}/>
        <h2 className="main__swiper__name">Gündemdekiler</h2>
        <Sinfelswiper props={move5}/>
        <h2 className="main__swiper__name">Netflix Orijinal İçerikleri</h2>
        <NewMove props={move3} />
      </div>
      <div>
        <h2 className="main__swiper__name">Yeniden İzle</h2>
        <Sinfelswiper props={move5}/>
      </div>
      <div className="ml-16">
        <h2 className="main__swiper__name">Listem</h2>
        <Sinfelswiper props={move3}/>
      </div>
    </div>
  );
};
