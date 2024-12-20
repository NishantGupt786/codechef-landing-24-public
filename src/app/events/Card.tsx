import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, reverse = false }) => {
  const [grayFilter, setGrayFilter] = useState<string>("grayscale");
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const preloadImage = new window.Image();
    preloadImage.src = imageSrc as string;

    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isFullyVisible) {
          setGrayFilter("grayscale-0");
        } else {
          setGrayFilter("grayscale");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${grayFilter} flex lg:flex-row flex-col items-center justify-center sm:mt-20 lg:mt-28 relative z-10 flex-wrap w-full sm:w-[1000px] ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center mb-6 md:mb-0 `}>
        <div className={`${
            grayFilter === "grayscale-0" ? "border border-[#FF3B00]" : ""
          }`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          className={`lg:h-64 lg:w-96  transition-opacity duration-500 `}
        />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-6 sm:px-12 flex flex-col items-center text-center lg:text-left mb-6 md:mb-0">
        <div
          className={`text-white border max-w-xs sm:max-w-sm lg:w-64 flex justify-center mx-auto lg:mx-0 `}
        >
          <h1 className={`text-sm sm:text-base lg:text-xl font-enigma ${
            grayFilter === "grayscale-0" ? "text-[#FF3B00]" : "text-white"
          }`} >{title}</h1>
        </div>
        <p className="text-white mt-1 max-w-xs sm:max-w-sm lg:w-96 lg:ml-0 mx-auto text-xs sm:text-sm lg:text-lg p-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
