import React from "react";
import Heading from "../Shared/Heading";
import img_blog1 from "../../assets/img_blog1.jpg";
import img_blog2 from "../../assets/img_blog2.jpg";
import img_blog3 from "../../assets/img_blog3.jpg";

const BlogData = [
  {
    title: "How to chose perfect smartWatch",
    subtitle:
      "minima facere deserunt veor itle beatae delemit eivs dodlores consequenstue, eleigendi corporis maiores molesteiaes laidantium, porro7",
    published: "Jan 20, 2024 by Dilshad",
    image: img_blog1,
    aosDelay: "0",
  },
  {
    title: "How to chose perfect smartWatch",
    subtitle:
      "minima facere deserunt veor itle beatae delemit eivs dodlores consequenstue, eleigendi corporis maiores molesteiaes laidantium, porro7",
    published: "Jan 20, 2024 by Dilshad",
    image: img_blog2,
    aosDelay: "200",
  },
  {
    title: "How to chose perfect smartWatch",
    subtitle:
      "minima facere deserunt veor itle beatae delemit eivs dodlores consequenstue, eleigendi corporis maiores molesteiaes laidantium, porro7",
    published: "Jan 20, 2024 by Dilshad",
    image: img_blog3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container flex flex-col gap-5">
        {/** Head section*/}
        <Heading title="Recent News" subtitle="Explore Our Products" />
        {/**Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 md:gap-7 sm:gap-4">
          {/**Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="bg-white dark:bg-gray-900"
              key={data.title}
            >
              {/**image section */}
              <div className=" overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer"
                />
              </div>
              {/**content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold  line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
