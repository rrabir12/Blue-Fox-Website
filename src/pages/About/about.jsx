import React, { useEffect, useState } from "react";
import img1 from "../../assets/Group-833.jpg";
import img2 from "../../assets/service.webp";
import about from "../../assets/about.png";
import work1 from "../../assets/Workculture1.webp";
import work2 from "../../assets/Workculture7.webp";
import work3 from "../../assets/Workculture5.webp";
import work4 from "../../assets/Ahex-Technologies-Work-life.webp";
import work5 from "../../assets/Workculture2.webp";
import work6 from "../../assets/office-life-3.webp";
import work7 from "../../assets/Ahex_offixe_life_5-scaled.webp";
import work8 from "../../assets/Workculture6.webp";
import work9 from "../../assets/Workculture8.webp";
import imgs1 from "../../assets/HTML5-Website-Development.svg";
import imgs2 from "../../assets/HTML5-Website-Design.svg";
import imgs3 from "../../assets/Web-Tool-Integration.svg";
import imgs4 from "../../assets/Mobile-web-development.svg";
import imgs5 from "../../assets/Cross-Platform-Development.svg";
import "./about.css";

function About() {
  const images = [img1, img2, img1, img2, img1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeKey((prevKey) => prevKey + 1); // Update key to restart animation
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    { count: "13+", text: "INTO IT" },
    { count: "150+", text: "PROJECTS DELIVERED" },
    { count: "125+", text: "DEVELOPERS" },
  ];

  return (
    <>
      <div className="bg-[#F7F9FE] ">
        <div className="relative w-full mx-auto overflow-hidden h-[600px]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full flex-shrink-0 relative">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[600px] object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10 mb-10">
          <div>
            <img src={about} alt="Company" className="w-90 h-90" />
          </div>
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">About Company</h3>
            <p className="leading-relaxed text-lg font-[450]">
              Founded in July 2009 at Hyderabad, India, Ahex Technologies is one
              of the leading company in providing solutions in the domains of
              Data Visualization, Data Analytics, ERP’s, IOT and Blockchain.
              Ahex Technologies focuses on offshore outsourcing, by providing
              innovative and quality services and value creation for our
              clients.We have a diverse portfolio which includes end to end
              application development using different technologies which meets
              and matches the client requirements. We continously keep our team
              updated with the best practices followed in the industry to make
              sure that our clients always get the best of the industry and aim
              to exceed the client expectations. In a short time period, the
              group has become preferred technology partner for various
              start-ups to established companies. We are currently serving over
              80 customers, which are ranging from large scale manufacturers to
              individual entrepreneurs. We have successfully marked our presence
              in the domains of Data Visualization, IOT, ERP and Mobile
              Development.
            </p>
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10 mb-20">
          <div className="bg-white shadow-inner px-10 py-10 hover:bg-[#0E73E4] hover:text-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4">OUR MISSION</h3>
            <p className="text-[17px]">
              To accelerate businesses by providing innovative solutions and
              quality services
            </p>
          </div>
          <div className="bg-white shadow-inner px-10 py-10  hover:bg-[#0E73E4] hover:text-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4">OUR VISION</h3>
            <p className="text-[17px]">
              To become largest service provider in our chosen technologies by
              providing quality solutions and innovative products.
            </p>
          </div>
        </div>

        <div className="container mb-3">
          <h3 className="text-4xl font-semibold mb-3 text-center">
            Our Core Values
          </h3>
          <p className="text-lg text-center">
            We are experienced inventors and keen learners. Together, we can
            develop solutions that benefit both the people who use technology
            and the technology itself.
          </p>

          <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-10 mb-10">
            <div className=" bg-white shadow-inner px-10 py-10 hover:bg-[#0E73E4] hover:text-white rounded-lg">
              <h1 className="text-[70px] text-[#efeff2] text-center font-semibold">
                01
              </h1>
              <p className="text-[20px] text-center font-semibold">
                Exceed Expectations
              </p>
            </div>
            <div className=" bg-white shadow-inner px-10 py-10 hover:bg-[#0E73E4] hover:text-white rounded-lg">
              <h1 className="text-[70px] text-[#efeff2] text-center font-semibold">
                02
              </h1>
              <p className="text-[20px] text-center font-semibold">
                Inspire Innovation
              </p>
            </div>
            <div className=" bg-white shadow-inner px-10 py-10 hover:bg-[#0E73E4] hover:text-white rounded-lg">
              <h1 className="text-[70px] text-[#efeff2] text-center font-semibold">
                03
              </h1>
              <p className="text-[20px] text-center font-semibold">
                Integrity In Actions
              </p>
            </div>
            <div className=" bg-white shadow-inner px-10 py-10 hover:bg-[#0E73E4] hover:text-white rounded-lg">
              <h1 className="text-[70px] text-[#efeff2] text-center font-semibold">
                04
              </h1>
              <p className="text-[20px] text-center font-semibold">
                Invest In People
              </p>
            </div>
            <div className=" bg-white shadow-inner px-10 py-10 hover:bg-[#0E73E4] hover:text-white rounded-lg">
              <h1 className="text-[70px] text-[#efeff2] text-center font-semibold">
                05
              </h1>
              <p className="text-[20px] text-center font-semibold">
                Respect for All
              </p>
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-1 items-center mt-10 mb-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`bg-[#0E73E4] px-10 py-10 ${
                index === 0
                  ? "rounded-s-3xl"
                  : index === data.length - 1
                  ? "rounded-e-3xl"
                  : index === 1
                  ? "py-5"
                  : ""
              }`}
            >
              <h1 className="text-[52px] text-[#efeff2] text-center font-semibold">
                {item.count}
              </h1>
              <p className="text-[38px] text-white text-center font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="elementor-section bg-[#0E73E4] px-7 py-7">
          <h2 className="text-[34px] font-semibold text-center text-white mb-4">
            Ahex Technologies Work Life at Its Finest
          </h2>
          <div className="heading-line h-[5px] w-24 bg-white rounded-lg mx-auto"></div>

          <div className="container grid grid-cols-3 md:grid-cols-3 gap-1 items-center mt-10 mb-10 ">
            <div className="bg-white px-2 py-2">
              <img src={work1} alt="" />
            </div>
            <div className="bg-white px-2 py-2">
              <img src={work2} alt="" />
            </div>
            <div className="bg-white px-2 py-2">
              <img src={work3} alt="" />
            </div>
            <div className="col-span-3 mx-auto bg-white py-2 px-2">
              <img src={work4} alt="" />
            </div>

            <div className="grid grid-cols-2 gap-1 col-span-3">
              <div className="bg-white py-2 px-2">
                <img src={work8} alt="" />
              </div>
              <div className="bg-white py-2 px-2">
                <img src={work9} alt="" />
              </div>
            </div>

            <div className="bg-white py-2 px-2">
              <img src={work5} alt="" className="h-52" />
            </div>
            <div className="bg-white py-2 px-2">
              <img src={work6} alt="" className="h-52" />
            </div>
            <div className="bg-white py-2 px-2">
              <img src={work7} alt="" className="h-52 w-96" />
            </div>
          </div>
        </div>

        <div className="elementor-section mt-10">
          <h2 className="text-[34px] font-semibold text-center text-black mb-4">
            Ahex Technologies Work Life at Its Finest
          </h2>
          <div className="heading-line h-[5px] w-24 bg-[#1895D1] rounded-lg mx-auto "></div>
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-10 mb-10">
            <div className=" bg-white shadow-2xl shadow-gray-300 px-10 py-10 rounded-lg h-[290px] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-6">
                <img src={imgs1} alt="" className="h-20 w-30 object-contain ms-24" />
                <h1 className="text-[70px] text-[#efeff2] font-semibold">01</h1>
              </div>
              <p className="text-[20px] text-center font-semibold mb-1">
              Analyse
              </p>
              <p className="text-center font-[400]">
                Communicate and set project goals
              </p>
            </div>
            <div className=" bg-white shadow-2xl shadow-gray-300 px-10 py-10 rounded-lg h-[290px] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-6">
                <img src={imgs2} alt="" className="h-20 w-30 object-contain ms-24" />
                <h1 className="text-[70px] text-[#efeff2] font-semibold">02</h1>
              </div>
              <p className="text-[20px] text-center font-semibold mb-1">
              Plan
              </p>
              <p className="text-center font-[400]">
              Draw specifications and a schedule
              </p>
            </div>
            <div className=" bg-white shadow-2xl shadow-gray-300 px-10 py-10 rounded-lg transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-6">
                <img src={imgs3} alt="" className="h-20 w-30 object-contain ms-24" />
                <h1 className="text-[70px] text-[#efeff2] font-semibold">03</h1>
              </div>
              <p className="text-[20px] text-center font-semibold mb-1">
              Design
              </p>
              <p className="text-center font-[400]">
              Make wireframes for desktop and mobile devices. Then proceed to designing layouts.
              </p>
            </div>
            <div className=" bg-white shadow-2xl shadow-gray-300 px-10 py-10 rounded-lg h-[290px] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-6">
                <img src={imgs4} alt="" className="h-20 w-30 object-contain ms-24" />
                <h1 className="text-[70px] text-[#efeff2] font-semibold">04</h1>
              </div>
              <p className="text-[20px] text-center font-semibold mb-1">
              Develop
              </p>
              <p className="text-center font-[400]">
              Then proceed to designing layouts. Integrate an easy-to-use CMS.
              </p>
            </div>
            <div className=" bg-white shadow-2xl shadow-gray-300 px-10 py-10 rounded-lg h-[290px] transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-6">
                <img src={imgs5} alt="" className="h-20 w-30 object-contain ms-24" />
                <h1 className="text-[70px] text-[#efeff2] font-semibold">05</h1>
              </div>
              <p className="text-[20px] text-center font-semibold mb-1">
              Test and Launch
              </p>
              <p className="text-center font-[400]">
              Test early, Test often.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
