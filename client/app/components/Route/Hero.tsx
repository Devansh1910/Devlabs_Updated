/* eslint-disable @next/next/no-img-element */
import React, { FC, useState, useEffect } from "react";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { BiSearch, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, isLoading } = useGetHeroDataQuery("Banner", {});
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dmzp6notl/image/upload/v1708974747/ASAS_zyjq8k.png",
    "https://res.cloudinary.com/dmzp6notl/image/upload/v1709216605/90_days_-_90_problems_yd0fyt.png",
    "https://res.cloudinary.com/dmzp6notl/image/upload/v1708983203/courses/xhawtopdvlufeujq5q9i.png"
  ];

  const handleSearch = () => {
    if (search.trim() === "") {
      return;
    } else {
      router.push(`/courses?title=${encodeURIComponent(search.trim())}`);
    }
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative flex flex-col items-center">
          {/* Search bar */}
          <div className="w-full flex items-center justify-center pt-1 mb-10">
            <div className="w-full flex items-center shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-4 px-4 text-base bg-transparent border-none dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
              />
              <div
                className="flex items-center justify-center w-[100px] cursor-pointer h-[50px] bg-[#111827] rounded-r-[1px]"
                onClick={handleSearch}
              >
                <BiSearch className="text-white" size={30} />
              </div>
            </div>
          </div>
          
          {/* Image Carousel */}
          <div className="relative overflow-hidden w-full rounded-[10px] max-w-screen-lg mx-auto" style={{ height: "400px" }}>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
              {images.map((image, index) => (
                <img key={index} src={image} alt="" className="w-full h-full object-cover" style={{ objectFit: "cover" }} />
              ))}
            </div>
            {/* Arrows */}
            <button className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 bg-gray-700 rounded-full p-2 text-white" onClick={prevSlide}>
              <BiChevronLeft size={30} />
            </button>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 bg-gray-700 rounded-full p-2 text-white" onClick={nextSlide}>
              <BiChevronRight size={30} />
            </button>
          </div>

          {/* Rest of the content */}
          <div className="w-full 1000px:flex items-center">
            {/* Your content here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
