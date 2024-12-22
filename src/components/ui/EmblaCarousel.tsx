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
  classe: string;
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
    <section className="embla bg-transparent overflow-x-hidden ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative w-full h-full">
                <div className="polygon mx-auto">
                  <div className="overlay">
                    <Image
                      src={slide.image}
                      alt="img"
                      className={`absolute mx-auto px-6 md:px-0 md:h-[475px] md:w-[475px] sm:bottom-0 sm:left-[10%] ${slide.classe}`}
                    />
                    <h1 className="absolute z-50 font-enigma left-[90%] md:left-[85%] top-[75%] transform -rotate-90 inset-0 max-w-fit max-h-fit text-lg md:text-5xl font-bold bg-gradient-to-r from-[#ff3b00] to-[#f1f1f1] bg-clip-text text-[#ff3b00]">
                      {slide.title}
                    </h1>
                  </div>
                </div>
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
