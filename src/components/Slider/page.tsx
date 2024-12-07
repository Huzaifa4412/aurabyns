// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// // Import required Swiper modules
// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import Image from "next/image";

// export default function Slider() {
//   return (
//     <div className="w-full max-w-[1920px]  mx-auto">
//       <Swiper
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Autoplay, Pagination, Navigation]}
//         loop={true}
//         className="w-full h-full"
//       >
//     <SwiperSlide>
//       <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
//         <Image
//           src="/banner4.jpeg"
//           alt="Banner 1"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0"
//         />
//       </div>
//     </SwiperSlide>
//     <SwiperSlide>
//       <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
//         <Image
//           src="/banner1.jpeg"
//           alt="Banner 2"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0"
//         />
//       </div>
//     </SwiperSlide>
//     <SwiperSlide>
//       <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
//         <Image
//           src="/banner3.jpg"
//           alt="Banner 3"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0"
//         />
//       </div>
//     </SwiperSlide>
//   </Swiper>
//     </div>
//   );
// }
"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
            <Image
              src="/banner1.jpeg"
              alt="Banner 1"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 cursor-grab"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
            <Image
              src="/banner2.jpeg"
              alt="Banner 2"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 cursor-grab"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] xl:h-[800px]">
            <Image
              src="/banner3.jpeg"
              alt="Banner3"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 cursor-grab"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
