import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
} from 'react-feather';

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-500 delay-150`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} className="object-cover h-auto w-full"/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <ChevronLeft />
        </button>
        <button onClick={nextSlide}>
          <ChevronRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-2 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer  ${
                i == current ? "bg-white" : "bg-slate-300/50"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}