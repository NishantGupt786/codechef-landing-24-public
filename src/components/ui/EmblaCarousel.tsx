"use client";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/EmblaCarouselDotButton";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

type SlideType = {
  title: string;
  index: number;
  image: string;
  classe?: string;
  url:string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla bg-transparent overflow-hidden !mt-[50px] md:mt-0">
      <div
        className="embla__viewport h-[400px] sm:h-[500px] md:h-[600px]"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              className="embla__slide flex-[0_0_100%] relative flex justify-center items-center"
              key={index}
            >
              <div className="polygon mx-auto flex items-end justify-center">
                <div className="cursor-pointer  overlay  w-[90%] h-[90%] flex justify-center items-center">
                <a href={slide.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={slide.image}
                    alt="img"
                    layout="intrinsic"
                    width={600}
                    height={700}
                    className={`!w-[230px] md:!w-[350px]  rounded-lg shadow-lg object-cover ${slide.classe}`}
                  /></a>
                  <h1 className="absolute z-50 font-enigma left-[90%] md:left-[85%] top-[75%] transform -rotate-90 inset-0 max-w-fit max-h-fit text-lg md:text-4xl whitespace-nowrap font-bold from-[#ff3b00] to-[#f1f1f1] bg-clip-text text-[#ff3b00]">
                    {slide.title}
                  </h1>
                </div>
                <div className="pos2 absolute behind h-[90%] w-[90%] bg-[#ff3b00] z-[-1]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="flex justify-end">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <div className="flex justify-start">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
