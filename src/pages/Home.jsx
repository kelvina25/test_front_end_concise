import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { menuItems, promotion, review } from "../assets/data/data";
import hero from "../assets/images/image 14.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import Modal from "../components/Modal";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setMenu(menuItems);
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="mt-[80px] bg-[#F5D2D2] w-full h-auto flex flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col justify-center px-3 md:px-28 py-4 md:py-0">
          <h1 className="text-red-500 text-2xl md:text-4xl font-bold mb-4">
            Manadong
          </h1>
          <p className="text-base md:text-lg mb-4">
            is a Manado dish with a spicy and appetizing flavour.
          </p>
          <p className="text-red-500 mb-4 font-semibold">
            #NikmatnyaGaPakeRibet
          </p>
          <Link to="/home/order-now">
            <button
              type="button"
              className="w-auto h-auto max-w-fit max-h-fit px-4 py-2 border-2 border-blue-800 font-bold text-[#0047AB] rounded-lg"
            >
              Order Now
            </button>
          </Link>
        </div>
        <img src={hero} alt="Manadong" className="w-full md:w-1/2 h-auto" />
      </section>

      <section className="mx-3 md:mx-28 mt-12">
        <h2 className="text-2xl font-semibold relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2/5 after:border-b-4 after:border-red-500 px-0 py-2">
          Our Menu
        </h2>
        <div className="flex flex-wrap mt-8 w-full gap-6">
          {menu.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[calc(50%-12px)] md:w-[calc(33.333%-18px)] lg:w-[292px] h-auto text-center justify-center items-center gap-1 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img
                className="w-full h-auto lg:h-[366px]"
                src={item.image}
                alt={item.title}
              />
              <div className="flex items-center justify-center gap-2">
                <p className="text-base font-semibold flex items-center">
                  {item.title}
                  {item.isNew && (
                    <span className="ml-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                      New
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/home/order-now">
            <button
              type="button"
              className="w-auto h-auto max-w-fit px-4 py-2 border-2 border-blue-800 font-bold text-[#0047AB] rounded-lg"
            >
              Order Now
            </button>
          </Link>
        </div>
      </section>

      <section className="px-3 md:px-28 py-8 mt-12 flex flex-col lg:flex-row self-center w-full h-auto bg-[#F5D2D2]">
        <h2 className="text-2xl font-semibold self-start lg:self-center relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2/5 after:border-b-4 after:border-red-500 px-0 pb-1">
          Promotion
        </h2>
        <div className="flex flex-wrap md:flex-row gap-6 w-full justify-center lg:justify-end mt-4">
          {promotion.map((item) => (
            <div
              key={item.id}
              className="flex flex-row gap-4 lg:gap-0 lg:flex-col py-2 px-2 shadow-lg rounded-lg w-full lg:w-[280px] h-fit bg-white"
            >
              <img
                className="w-[100px] md:w-32 lg:w-full h-auto rounded-t-lg"
                src={item.image}
                alt=""
              />
              <div className="flex-col">
                <h3 className="text-lg md:text-xl font-bold mt-2">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-3 md:px-28 py-8 flex flex-col w-full h-fit bg-[#BBD7E8] gap-4">
        <h2 className="text-2xl font-semibold self-start relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2/5 after:border-b-4 after:border-red-500 px-0 pb-1">
          Reviews
        </h2>

        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay= {{
            delay:2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="my-8 w-full"
        >
          {review.map((item) => (
            <SwiperSlide key={item.id} className="flex flex-col relative mb-9">
              <div className="max-w-md h-fit bg-white shadow-lg rounded-lg p-6 ">
                <div className="flex justify-between items-start">
                  <div className="text-orange-500 text-3xl">“</div>
                </div>
                <div className="mt-2">
                  <p className="text-gray-800 text-lg font-semibold">
                    {item.user}
                  </p>
                  <p className="mt-2 text-gray-600 text-base">{item.review}</p>
                </div>
                <div className="flex justify-end items-end mt-4">
                  <div className="text-orange-500 text-3xl">”</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mx-3 md:mx-28 my-8 flex flex-col h-fit gap-3">
        <h2 className="text-2xl font-semibold self-start relative inline-block text-[#0047AB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2/5 after:border-b-4 after:border-red-500 px-0 pb-1">
          Locations
        </h2>

        <div className="flex flex-wrap gap-5 mt-5">
          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2]  w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">
                Senopati, Potongan
              </h2>
              <p className="text-base font-normal">
                Santa Modern Market, Lt.1, Blok AKS 33-35, Jl. Cipaku I No.1,
                Petogogan, Kota Jakarta Selatan.
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 w-fit text-base"
                href="https://www.google.com/maps/place/Manadong+Cab.+Petogogan+-+Masakan+Khas+Manado/@-6.2398713,106.8095476,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f10326efdd77:0x4846a35e978f21be!8m2!3d-6.2398766!4d106.8121225!16s%2Fg%2F11h_bx498g?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5" />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">
                Kebun Jeruk/Tanjung Duren
              </h2>
              <p className="text-base font-normal">
                Ruko, Kompleks No.mor 9 Maisonet blok D, Duri Kepa, Kec. Kb.
                Jeruk, Kota Jakarta Barat.
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 w-fit text-base"
                href="https://www.google.com/maps/place/Manadong+Cab.+Kebon+Jeruk+(Greenville)+-+Masakan+Khas+Manado/@-6.1698785,106.774565,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f7bcc1d7c98b:0x180bc534c1124e44!8m2!3d-6.1698839!4d106.7794359!16s%2Fg%2F11m_lrtyxp?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">
                Food Plaza PIK
              </h2>
              <p className="text-base font-normal">
                Food Plaza PIK - FMA 17, Pantai Indah Kapuk St No.25, Kamal
                Muara, Penjaringan, Jakarta Utara.
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 text-base w-fit"
                href="https://www.google.com/maps/place/Manadong+Cab.+PIK+-+Masakan+Khas+Manado/@-6.1037265,106.7387276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1db0db5dda05:0xdafdfe1d43a293c!8m2!3d-6.1037318!4d106.7413025!16s%2Fg%2F11mb5wylhl?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">
                Kuningan - D'Kanteen
              </h2>
              <p className="text-base font-normal">
                D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 text-base w-fit"
                href="https://www.google.com/maps/place/Manadong+Cab.+PIK+-+Masakan+Khas+Manado/@-6.1037265,106.7387276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1db0db5dda05:0xdafdfe1d43a293c!8m2!3d-6.1037318!4d106.7413025!16s%2Fg%2F11mb5wylhl?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">
                Bintaro, Thelapan Square
              </h2>
              <p className="text-base font-normal">
                Jl. Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 text-base w-fit"
                href="https://www.google.com/maps/place/Manadong+Cab.+PIK+-+Masakan+Khas+Manado/@-6.1037265,106.7387276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1db0db5dda05:0xdafdfe1d43a293c!8m2!3d-6.1037318!4d106.7413025!16s%2Fg%2F11mb5wylhl?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">
                Gading Serpong
              </h2>
              <p className="text-base font-normal">
                Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading
                Serpong No.25, West Pakulonan, Kelapa Dua, Tangerang Regency,
                Banten 15810
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 text-base w-fit"
                href="https://www.google.com/maps/place/Manadong+Cab.+PIK+-+Masakan+Khas+Manado/@-6.1037265,106.7387276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1db0db5dda05:0xdafdfe1d43a293c!8m2!3d-6.1037318!4d106.7413025!16s%2Fg%2F11mb5wylhl?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">Cipete</h2>
              <p className="text-base font-normal">
                Jl. Cipete Raya No.74c, RW.3, Cipete Jakarta Selatan 12410
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 text-base w-fit"
                href="https://www.google.com/maps/place/Manadong+Cab.+PIK+-+Masakan+Khas+Manado/@-6.1037265,106.7387276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1db0db5dda05:0xdafdfe1d43a293c!8m2!3d-6.1037318!4d106.7413025!16s%2Fg%2F11mb5wylhl?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>

          <div className="flex-2 flex-shrink-0 basis-[100%] lg:basis-[calc(33.333%-20px)] border rounded-lg px-3 py-3 flex flex-row gap-4">
            <MdOutlineLocationOn className="text-[#FF0000] bg-[#F9D2D2] w-20 h-12 self-center px-2 py-2 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-[#0047AB]">Menteng</h2>
              <p className="text-base font-normal">
                Jl. H. Agus Salim No.60, Menteng, Jakarta Pusat 10350
              </p>
              <a
                className="flex flex-row gap-3 text-[#FF0000] border-b-[#FF0000] border-b-2 text-base w-fit"
                href="https://www.google.com/maps/place/Manadong+Cab.+PIK+-+Masakan+Khas+Manado/@-6.1037265,106.7387276,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6a1db0db5dda05:0xdafdfe1d43a293c!8m2!3d-6.1037318!4d106.7413025!16s%2Fg%2F11mb5wylhl?entry=ttu"
              >
                <TiLocationArrowOutline className="self-center w-5 h-5 " />
                <p>View Map</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItem} />
    </>
  );
};

export default Home;
