import { Props } from "next/script";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Link from "next/link";

export default function NewMove({ props }) {
  return (
    <>
      <div className="mb-8">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {props.results.map((res) => (
            <>
                <SwiperSlide  key={res.id} className="cursor-pointer">
                  <Link href={'/products/' + res.id} >

                    <Image
                      width={285}
                      height={200}
                      src={`https://image.tmdb.org/t/p/original/${res.poster_path}`}
                      alt="move"
                    />
                  </Link>
                </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
}
