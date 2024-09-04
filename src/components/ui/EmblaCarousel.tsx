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
    <section className="embla bg-[#010101] overflow-x-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={projectCardBG}
                  alt="bgimg"
                  className="mx-auto px-6 md:px-0 h-[450px] w-[450px] md:h-[600px] md:w-[600px]"
                />
                <Image
                  src={slide.image}
                  alt="img"
                  className="absolute h-[300px] w-[300px] md:h-[475px] md:w-[475px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
              <h1 className="hidden md:absolute md:block z-50 font-enigma left-[60%] top-[40%] md:left-[54%] md:top-[45%] transform -rotate-90 max-w-fit max-h-fit inset-0 text-xl md:text-5xl font-bold gradient-text">
                {slide.title}
              </h1>
              <h1 className="md:hidden absolute font-enigma max-w-fit max-h-fit top-[90%] left-[35%] inset-0 text-xl md:text-5xl font-bold gradient-text">
                {slide.title}
              </h1>
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
