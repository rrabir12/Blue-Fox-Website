import React, { useEffect, useState } from "react";
import img1 from '../../assets/Group-833.jpg';
import img2 from '../../assets/service.webp';
import about from '../../assets/about.png'

import './about.css';

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
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[600px] object-cover object-center" />
            </div>
          ))}
        </div>
      </div>

<div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10 mb-10">
  <div>
    <img src={about} alt="Company" className="w-100 h-90" />
  </div>
  <div className="">
    <h3 className="text-3xl font-semibold mb-4">About Company</h3>
    <p className="text-gray-700 leading-relaxed text-lg">
    Founded in July 2009 at Hyderabad, India, Ahex Technologies is one of the leading company in providing solutions in the domains of Data Visualization, Data Analytics, ERP’s, IOT and Blockchain. Ahex Technologies focuses on offshore outsourcing, by providing innovative and quality services and value creation for our clients.We have a diverse portfolio which includes end to end application development using different technologies which meets and matches the client requirements. We continously keep our team updated with the best practices followed in the industry to make sure that our clients always get the best of the industry and aim to exceed the client expectations. In a short time period, the group has become preferred technology partner for various start-ups to established companies. We are currently serving over 80 customers, which are ranging from large scale manufacturers to individual entrepreneurs. We have successfully marked our presence in the domains of Data Visualization, IOT, ERP and Mobile Development.
    </p>
  </div>
</div>


    </>
  );
}

export default About;
