import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
interface CardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
  ballY: number;
  cardNum: number;
  ballKaHeight: number;
  url: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  ballY,
  cardNum,
  ballKaHeight,
  url,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [grayFilter, setGrayFilter] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Check screen size on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Check screen size on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const checkIfBallIsBehind = () => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          const isBehind =
            ballY + ballKaHeight - 60 > rect.y && ballY < rect.y + rect.height;
          setGrayFilter(!isBehind);
          setIsVisible(isBehind);
        }
      };

      checkIfBallIsBehind();
    } else {
      const preloadImage = new window.Image();
      preloadImage.src = imageSrc as string;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
          setGrayFilter(!entry.isIntersecting);
        },
        { threshold: 1 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, [ballY, ballKaHeight, isLargeScreen, imageSrc]);

  return (
    <div
      ref={cardRef}
      className={`${
        grayFilter ? "grayscale" : ""
      }  flex lg:flex-row flex-col items-center justify-center sm:mt-20 lg:mt-28 relative z-10 flex-wrap w-full sm:w-[1000px] mb-6 mt-6 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {isVisible && isLargeScreen && (
        <div className="absolute overflow-hidden w-[100vw] h-full z-[-1] flex duration-100 transition">
          {Array.from({ length: 15 }, (_, index) => (
            <Image
              key={index}
              src={imageSrc}
              alt={`Background SVG ${index}`}
              width={1000}
              height={1000}
              className={` mx-2 grayscale ${
                isVisible
                  ? "opacity-0 animate-fade-in"
                  : "opacity-20 animate-fade-out"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      )}

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center md:mb-0">
        <div
          className={`${
            grayFilter
              ? ""
              : "transition-all duration-500 border border-[#FF3B00]"
          }`}
        >
          <Link href={url} target="__blank">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={200}
              height={200}
              className=" lg:h-64 lg:w-96 w-auto transition duration-500 object-cover"
            />
          </Link>
        </div>
      </div>

      {/* Text Section */}
      <div className=" w-full lg:w-1/2 px-0 sm:px-12 flex flex-col items-center text-center lg:text-left md:mb-0 mt-3">
        <div className="text-white max-w-xs sm:max-w-sm lg:w-full flex lg:mx-0">
          <Link href={url} target="__blank">
            <h1
              className={`transition-all duration-500 sm:text-base lg:text-[34.5px] text-left font-enigma ${
                grayFilter ? "text-white" : "text-[#FF3B00]"
              }`}
            >
              {title}
            </h1>
          </Link>
        </div>
        <p className="text-white mt-0 sm:mt-1 max-w-xs sm:max-w-sm lg:w-96 lg:ml-0 mx-auto text-xs sm:text-sm lg:text-lg p-0 sm:p-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;