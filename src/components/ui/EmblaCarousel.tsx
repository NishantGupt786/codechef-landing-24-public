"use client";
import projectCardBG from "@/assets/images/carouselbg.svg";
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
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla bg-[#010101]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={projectCardBG}
                  alt="bgimg"
                  className="mx-auto px-6 md:px-0 h-[475px] w-[475px] md:h-[600px] md:w-[600px]"
                />
                <Image
                  src={slide.image}
                  alt="img"
                  className="absolute h-[305px] w-[305px] md:h-[475px] md:w-[475px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
              <h1 className="hidden absolute md:block font-enigma left-[60%] top-1/2 transform -rotate-90 max-w-fit max-h-fit inset-0 text-5xl font-bold gradient-text">
                {slide.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex justify-end items">
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

        <div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
