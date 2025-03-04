import React, { useEffect, useState } from "react";
import img1 from "../../assets/Group-833.jpg";
import img2 from "../../assets/service.webp";
import about from "../../assets/about.png";

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

  return (
    <>
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
            of the leading company in providing solutions in the domains of Data
            Visualization, Data Analytics, ERP’s, IOT and Blockchain. Ahex
            Technologies focuses on offshore outsourcing, by providing
            innovative and quality services and value creation for our
            clients.We have a diverse portfolio which includes end to end
            application development using different technologies which meets and
            matches the client requirements. We continously keep our team
            updated with the best practices followed in the industry to make
            sure that our clients always get the best of the industry and aim to
            exceed the client expectations. In a short time period, the group
            has become preferred technology partner for various start-ups to
            established companies. We are currently serving over 80 customers,
            which are ranging from large scale manufacturers to individual
            entrepreneurs. We have successfully marked our presence in the
            domains of Data Visualization, IOT, ERP and Mobile Development.
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10 mb-10">
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
          develop solutions that benefit both the people who use technology and
          the technology itself.
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
          <div className=" bg-[#0E73E4] px-10 py-10 rounded-s-3xl">
            <h1 className="text-[52px] text-[#efeff2] text-center font-semibold">
              13+
            </h1>
            <p className="text-[38px] text-white text-center font-semibold">
            INTO IT
            </p>
          </div>
          <div className=" bg-[#0E73E4] px-10 py-4">
            <h1 className="text-[52px] text-[#efeff2] text-center font-semibold">
              150+
            </h1>
            <p className="text-[38px] text-white text-center font-semibold">
            PROJECTS DELIVERED
            </p>
          </div>
          <div className=" bg-[#0E73E4] px-10 py-10 rounded-e-3xl">
            <h1 className="text-[52px] text-[#efeff2] text-center font-semibold">
              125+
            </h1>
            <p className="text-[38px] text-white text-center font-semibold">
              DEVELOPERS
            </p>
          </div>
        </div>      
    </>
  );
}

export default About;
