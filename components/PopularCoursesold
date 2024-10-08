import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

const PopularCourses = () => {
  const service = [
    {
      img: "/assets/figma.svg",
      title: "Figma UI/UX Design",
      sub: "Lessons on design that cover the most recent developments.",
      promo: "design",
      rating: "4.5",
    },
    {
      img: "/assets/learn.svg",
      title: "Full Stack Web Development",
      sub: "Start from basic to advanced for Full Stack.",
      promo: "development",
      rating: "4.5",
    },
    {
      img: "/assets/code.svg",
      title: "Marketing",
      sub: "Lessons on design that cover the most recent developments.",
      promo: "marketing",
      rating: "4.5",
    },
  ];

  return (
    <div className="container mx-auto md:h-screen py-10">
      <p className="text-lg text-purple-500 font-medium">Explore Programs</p>
      <p className="text-3xl font-semibold py-3">Our Most Popular Class</p>
      <p className="text-grey-500 text-base py-3">
        Join our famous classes, and gain knowledge that will be useful for your
        career.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12 py-10">
        {service.map((ser, i) => (
          <div
            className="px-6 py-4 rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group"
            key={i}
          >
            <Image
              className="w-full"
              src={ser.img}
              alt="services"
              width={60}
              height={60}
            />
            <p className="text-lg text-purple-600 group-hover:text-grey capitalize py-2">
              {ser.promo}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-2xl group-hover:text-grey font-semibold line-clamp-1">
                {ser.title}
              </p>
              <HiOutlineArrowUpRight className="group-hover:text-grey text-lg font-semibold" />
            </div>

            <p className="text-base group-hover:text-grey pr-6 py-2">
              {ser.sub}
            </p>
            <div className="flex items-center gap-2 group-hover:text-grey">
              <p>{ser.rating}</p>
              <Image
                src="/assets/star.svg"
                alt="star"
                width={20}
                height={20}
                style={{ width: 'auto', height: 'auto' }}
              />
              <p>123</p>
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-3">
                <Image
                  src="/assets/person.svg"
                  alt="person"
                  width={30}
                  height={30}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div className="flex flex-col">
                  <p className="text-sm group-hover:text-grey">Jimmy</p>
                  <p className="text-xs text-grey-500 group-hover:text-grey">
                    200 Enrolled
                  </p>
                </div>
              </div>
              <p className="text-xl text-purple-600 group-hover:text-grey font-semibold">
                $13.45
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;