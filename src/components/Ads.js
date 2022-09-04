import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css/bundle';



export default function App() {

  const slides = [
    { id: 1, Element: <img src="https://www.mcdonalds.com.my/storage/carousel/4ea0613fc0f7b8c9bb8eafde1bab4fcf.png" alt="ads1" /> },
    { id: 2, Element: <img src="https://www.mcdonalds.com.my/storage/carousel/eff16b368c8d4cd4c663ed7341169046.png" alt="ads2"/> },
    { id: 3, Element: <img src="https://www.mcdonalds.com.my/storage/carousel/897fc31cdc1cde5eb9cf1cf70cdc2561.png" alt="ads3"/> },
    { id: 4, Element: <img src="https://www.mcdonalds.com.my/storage/carousel/10f630e74203faf117b29a3b90eb8ac1.png" alt="ads4"/> },
  ]

  const slide_style =
  {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    padding: "0 auto",
  }

  return (
    <Swiper className="mySwiper" direction={"horizontal"} slidesPerView={1}
      modules={[Pagination, Autoplay]}
      style={{ width: "100%" }}
      autoHeight={true}
      spaceBetween={0}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      // loop={true}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) =>
        <SwiperSlide key={index} style={slide_style}> {slide.Element} </SwiperSlide>
      )}
    </Swiper>
  );
}