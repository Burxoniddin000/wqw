/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import Layout from "@/Layout/Mayin/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function NewMove() {
  const [singleMovie, setSingleMovie] = useState({});
  const tite = useRouter();
  let id = tite.query.move;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95ecf50d83cc6a4046e34273fb02582d`)
      const data = await response.json();
       setSingleMovie(data);
    }
    fetchMovie();
  }, []);

  const newLocal = <Layout>
    <div className="container">
      <section className="single relative">
        <Image
          width={1000}
          height={800}
          className="w-[100%] h-[800px]"
          src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`}
          alt="img" />
        <div className="absolute w-[639px] h-[488px]  mt-[-663px] ml-[72px]">
          <div className="flex items-center gap-[12px]">
            <Link href="/">
              <p className="font-medium text-[14px] leading-[17px] text-[white]">
                Back to Homepage
              </p>
            </Link>
          </div>
          <div className="flex items-center mt-[56px] gap-[20px]">
            <p className="font-medium text-[14px] leading-[17px] text-[white]">
              THRILLER
            </p>
            <p className="font-medium text-[14px] leading-[17px] text-[white]">
              HORROR
            </p>
            <p className="font-medium text-[14px] leading-[17px] text-[white]">
              TEEN
            </p>
          </div>
          <h2 className="font-bold text-[64px] leading-[78px] text-[white] mt-[8px]">
            {singleMovie.title}
          </h2>
          <p className="mt-[8px] w-[47px] font-bold text-[14px] leading-[17px] text-[white] py-[4px] px-[12px] border-[1px] border-[white] rounded-[14px] ">
            16+
          </p>
          <div className="flex items-center mt-[25px]">
            <span>⭐️</span>
            <p className="font-semibold text-[16px] leading-[20px] text-[white] ml-[5px]">
              9.0
            </p>
            <p className="font-medium text-[14px] leading-[17px] text-[white] ml-[16px]">
              2019
            </p>
            <span className="inline-block w-[1px] h-[12px] bg-[white] ml-[8px]"></span>
            <p className="font-medium text-[14px] leading-[17px] text-[white] ml-[8px]">
              Season 3
            </p>
            <span className="inline-block w-[1px] h-[12px] bg-[white] ml-[8px]"></span>
            <p className="font-medium text-[14px] leading-[17px] text-[white] ml-[8px]">
              9 Episodes
            </p>
          </div>
          <p className="font-medium text-[16px] leading-[20px] text-[white] mt-[40px]">
            When a young boy vanishes, a small town uncovers a mystery
            involving secret experiments, terrifying supernatural forces and
            one strange little girl.
          </p>
          <div className="flex mt-[32px]">
            <span className="font-medium text-[16px] leading-[20px] text-[#B2BAC5]">
              Starring :{" "}
            </span>
            <p className="font-semibold text-[16px] leading-[20px] text-[white]">
              Winona Ryder,David Harbour,Millie Bobby Brown{" "}
            </p>
          </div>
          <div className="mt-[72px] flex items-center gap-[20px]">
            <button className="bg-[#E50914] font-medium text-[16px] leading-[20px] text-[white] py-[16px] px-[24px]">
              Watch Season 3
            </button>
            <button className="font-medium text-[16px] leading-[20px] text-[white] py-[14px] px-[24px] border-[2px] border-[white]">
              All Seasons
            </button>
          </div>
        </div>
      </section>
    </div>
    <div className="ml-24 mr-24 mt-10">

    </div>
  </Layout>;
  return (
    <>
      {newLocal}
    </>
  );
}
