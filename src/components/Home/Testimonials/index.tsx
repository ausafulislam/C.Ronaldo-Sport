"use client";
import Marquee from "react-fast-marquee";
import testimonialsData from "./testimonialsData";
import Image from "next/image";
import SingleItem from "./SingleItem";

const Testimonials = () => {
  return (
    <section className="overflow-hidden pb-16.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- section title --> */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5">
              <Image
                src="/images/icons/icon-08.svg"
                alt="icon"
                width={17}
                height={17}
              />
              Testimonials
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">
              User Feedbacks
            </h2>
          </div>
        </div>

        <Marquee autoFill pauseOnHover speed={40}>
          {testimonialsData.map((item, key) => (
            <div className="mx-3.5" key={key}>
              <SingleItem testimonial={item} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
