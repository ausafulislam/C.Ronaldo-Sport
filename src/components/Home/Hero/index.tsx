import React from "react";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#EFEEE8]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full hidden sm:block">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="/shop"> Al-Nassr CR7 Home Jersey </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-heading-5 text-red">
                          Rs. 3,500
                        </span>
                        <span className="font-medium text-xl text-dark-4 line-through">
                          Rs. 4,500
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/products/alnassr-jersey-2.jpg"
                      alt="Al-Nassr CR7 Home Jersey"
                      width={150}
                      height={196}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="/shop"> CR7 Speed Football Boots </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <div className="flex flex-col gap-1">
                        <span className="font-medium text-heading-5 text-red">
                          Rs. 6,999
                        </span>
                        <span className="font-medium text-xl text-dark-4 line-through">
                          Rs. 8,500
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/products/speed-boots-2.jpg"
                      alt="CR7 Speed Football Boots"
                      width={150}
                      height={196}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
