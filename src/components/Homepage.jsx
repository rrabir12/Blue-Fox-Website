import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import giphy from '../assets/giphy.gif'; // Ensure this is the correct path to your GIF
// Import company logos
import samsung from '../assets/logo1.png';
import piramal from '../assets/logo2.png';
import elbLearning from '../assets/logo3.png';
import masterSoft from '../assets/logo4.png';
import segen from '../assets/logo5.png';
import osiDigital from '../assets/logo6.png';
import phoenix from '../assets/logo7.png';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the styles
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick-carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme styles

function Homepage() {
  const [phone, setPhone] = useState('');
  const [showChat, setShowChat] = useState(false); // State for chat box visibility

  const services = [
    {
      number: "01",
      title: "Result Driven Solutions",
      description: "What We Provide to Our Valued Customers",
      icon: "🎯"
    },
    {
      number: "02",
      title: "AI & ML Development",
      description: "Leverage artificial intelligence and machine learning",
      icon: "🤖"
    },
    // Add more services...
  ];

  const companies = [
    { name: 'Samsung', logo: samsung },
    { name: 'Piramal', logo: piramal },
    { name: 'ELB Learning', logo: elbLearning },
    { name: 'MasterSoft', logo: masterSoft },
    { name: 'Segen', logo: segen },
    { name: 'OSI Digital', logo: osiDigital },
    { name: 'Phoenix', logo: phoenix }
  ];

  // Settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="pt-20"> {/* Padding for navbar */}
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-5rem)]"> {/* Full viewport height minus navbar */}
        {/* Background GIF */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${giphy})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-white text-6xl font-bold mb-6 text-shadow">
                Modernize Legacy Applications
              </h1>
              <p className="text-white text-2xl font-light text-shadow">
                Transforms technology disruptors into top digital companies.
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Box - Visible Only When Opened */}
          {showChat && (
            <div className="fixed bottom-20 right-6 w-80 bg-white shadow-lg rounded-lg border border-gray-200">
              {/* Header */}
              <div className="bg-blue-600 text-white p-3 rounded-t-lg flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                    <img src="https://via.placeholder.com/30" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">BlueFox</p>
                    <p className="text-sm text-gray-200">online</p>
                  </div>
                </div>

              </div>

              {/* Chat Messages Area */}
              <div className="p-4 bg-cover space-y-2 min-h-[150px]" style={{ backgroundImage: `url(${giphy})` }}>
                <div className="bg-white p-3 rounded-lg shadow text-sm w-fit max-w-[75%]">
                  Hi, how can I help you?
                </div>
              </div>

              {/* Input Field & Button */}
              <div className="p-3 border-t bg-white">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="border rounded-lg p-2 w-full"
                />
                <button
                  className="bg-blue-500 text-white w-full rounded-lg py-2 font-semibold text-sm"
                  onClick={() => window.open("https://wa.me/+9779812345678", "_blank")}
                >
                  Start Chat
                </button>              
                </div>
            </div>
          )}

          {/* Floating WhatsApp Button */}
          <button
            onClick={() => setShowChat(!showChat)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
            </svg>
            <span className="text-sm font-semibold">Chat with us</span>
          </button>
        </div>

        {/* reCAPTCHA Badge */}
        <div className="fixed bottom-4 right-4">
          <div className="bg-white rounded shadow-md">
            {/* Add your reCAPTCHA component here */}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-6 bg-white hidden md:block"> {/* Hide on mobile, show on medium and larger screens */}
        <div className="container mx-auto px-7">
          <div className="flex items-center gap-12">
            <h2 className="text-gray-600 text-lg mr-12 ml-0 whitespace-nowrap leading-[1.0]">
              Trusted by startups<br />
              and Fortune 500<br />
              companies
            </h2>
            <div className="flex items-center justify-between flex-1 gap-8">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-7">
          <div className="grid grid-cols-12 gap-8">
            {/* Left side description */}
            <div className="col-span-5">
              <h2 className="text-4xl font-bold mb-6">
                Innovative Tech company<br />
                crafting comprehensive<br />
                software solutions.
              </h2>
              <div className="relative mb-6">
                <div className="w-20 h-1 bg-blue-500"></div> {/* Blue underline */}
              </div>
              <p className="text-gray-600 mb-8">
                Founded in July 2009, BlueFox Technologies is a leading Information Technology, Consulting, and{' '}
                <span className="text-blue-500">Software Development Services</span>{' '}
                company. We are successfully combining established and emerging technologies to help our clients in building scalable software solutions that drive their business. We are known for a comprehensive portfolio of software development services across multiple domains with a strong emphasis on value creation for our clients. We have 100+ dedicated employees who are committed to providing high-quality software services in more than 10 countries to our clients, ranging from large-scale manufacturers to individual entrepreneurs.
              </p>
              <div className="flex gap-32 mt-12">
                <div>
                  <span className="text-5xl font-bold text-orange-500 ml-4">150</span>
                  <span className="text-4xl font-bold text-black">+</span>
                  <p className="text-black font-bold ml-4">Happy Clients</p>
                </div>
                <div className="ml-2">
                  <span className="text-5xl font-bold text-blue-500">150</span>
                  <span className="text-4xl font-bold text-black">+</span>
                  <p className="text-black font-bold">Project Delivered</p>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                Know More <FaArrowRight className="ml-2" />
              </button>
            </div>

            {/* Right side cards */}
            <div className="col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">              {/* Left Column - Commitment */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-orange-500 group transition-all duration-300 mt-12">
                  <div className="text-orange-500 group-hover:text-white mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Commitment</h3>
                  <p className="text-gray-600 group-hover:text-white">
                    At BlueFox, we are committed to your project. We don't see ourselves as vendors but as partners in your journey. We share our experience with you and try to fill and enhance your requirements. We believe strongly that our success is linked to yours. This belief of ours guides us in giving the best product development services and support once we deliver.
                  </p>
                </div>
              </div>

              {/* Right Column - Transparency and Flexibility */}
              <div className="space-y-6">
                {/* Transparency Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-500 group transition-all duration-300">
                  <div className="text-blue-500 group-hover:text-white mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Transparency</h3>
                  <p className="text-gray-600 group-hover:text-white">
                    At BlueFox, we believe that the only person who knows the project best is you. We simplify the processes to include "you" at all the stages of the development so that you know what is happening and get what you wanted.
                  </p>
                </div>

                {/* Flexibility Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-500 group transition-all duration-300">
                  <div className="text-blue-500 group-hover:text-white mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white">Flexibility</h3>
                  <p className="text-gray-600 group-hover:text-white">
                    We know that your idea will evolve with time as the development progresses. With BlueFox, you are always sure that your well-thought changes will be included in the development cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-9">
          {/* Section Header */}
          <div className="mb-12">
            <div className="text-blue-600 uppercase font-semibold mb-2">SERVICES</div>
            <h2 className="text-3xl font-bold mb-4">Result Driven Solutions! What We<br />Provide to Our Valued Customers</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 mr-5 ml-4 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-purple-800 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-purple-800 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-purple-800 group-hover:text-white">01</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">AI Enabled Application</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                We have a proven track record of developing AI-based applications using a range of cutting-edge technologies.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-teal-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-teal-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7v-2zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-teal-500 group-hover:text-white">02</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">ERP Consulting</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                We offer the expertise needed to fine-tune your ERP system, ensuring it aligns perfectly with your business objectives.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-indigo-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-indigo-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-indigo-500 group-hover:text-white">03</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Web Development</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                Whether you want to build the next big idea or map the existing business process, our team creates web applications.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-emerald-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-emerald-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-emerald-500 group-hover:text-white">04</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Mobile Apps</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                We add mobility to your existing business solutions and extend your web business to mobile.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-orange-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-orange-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-orange-500 group-hover:text-white">05</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Data Visualization</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                We create gorgeous and well-crafted data visualization which helps uncover trends and insights.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Row 2 */}
            {/* Service Card 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-blue-600 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-blue-600 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-blue-600 group-hover:text-white">06</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Microsoft Technologies</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                Create high-performing industry-specific .NET-based applications with a powerful programming model.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 7 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-blue-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-blue-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-blue-500 group-hover:text-white">07</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Frontend Development</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                At BlueFox, we create frontends that complement your idea using the latest technology stacks to make them fast.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 8 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-red-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-red-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-red-500 group-hover:text-white">08</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">UI/UX</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                Our team focuses on making the user interaction as simple and efficient as possible so that your application is easy to use.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 9 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-pink-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-pink-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-pink-500 group-hover:text-white">09</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Enterprises Portals</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                We integrate information, people, and processes across organizational boundaries to create portals that match your business.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 10 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-blue-400 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-blue-400 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-blue-400 group-hover:text-white">10</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Dedicated Development Teams</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                BlueFox Technologies augment your in-house technical staff with your chosen dedicated development team.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Row 3 */}
            {/* Service Card 11 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-yellow-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-yellow-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-yellow-500 group-hover:text-white">11</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Devops Consulting</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                We provide consultation and implementation of the processes to increase the velocity of the delivery of products from release to maintenance cycle.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 12 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-purple-500 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-purple-500 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-purple-500 group-hover:text-white">12</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Open source CMS & E-commerce</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                Open-source technologies are one of the driving forces of innovation. At BlueFox, our experts will work together with you to use these technologies.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 13 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-pink-600 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-pink-600 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h18v18H3V3zm16.5 15.5v-13h-13v13h13z" />
                    <path d="M7 7h10v2H7zm0 4h5v2H7z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-pink-600 group-hover:text-white">13</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Database Consulting</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                Data is the backbone of your application. At BlueFox, we focus on building quality data-driven business solutions by providing consulting services.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 14 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-indigo-600 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-indigo-600 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L11 13.17l7.59-7.59L20 7l-8 8z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-indigo-600 group-hover:text-white">14</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">QA and Testing</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                A quality and robust product is an outcome of rigorous testing. Our team provides consultation and implementation of testing services for your software products.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>

            {/* Service Card 15 */}
            <div className="bg-white p-8 rounded-lg shadow-md group hover:bg-gray-700 transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="text-gray-700 group-hover:text-white">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
                  </svg>
                </div>
                <div className="text-7xl font-bold text-gray-700 group-hover:text-white">15</div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6 flex-grow group-hover:text-white">
                Are you looking for a team on which you can rely to provide maintenance and support for your software product? BlueFox can help you.
              </p>
              <a href="#" className="text-blue-600 hover:text-white inline-block mt-auto mb-10 group-hover:text-white">Know more</a>
            </div>
          </div>
        </div>
      </section>


      {/* Industry Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-9">
          {/* Section Header */}
          <div className="mb-12">
            <div className="text-blue-600 uppercase font-semibold mb-2">WORK FOR ANY INDUSTRY</div>
            <h2 className="text-3xl font-bold mb-4">Experience Across Different<br />Industries</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          {/* Industries Grid - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {/* Retail & Ecommerce */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-blue-600 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Retail &<br />Ecommerce</h3>
            </div>

            {/* Finance & Marketing */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-blue-500 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Finance &<br />Marketing</h3>
            </div>

            {/* Real Estate & Construction */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-teal-500 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real Estate &<br />Construction</h3>
            </div>

            {/* Food & Hospitality */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-blue-500 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Food &<br />Hospitality</h3>
            </div>

            {/* Education & Learning */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-purple-600 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Education &<br />Learning</h3>
            </div>
          </div>

          {/* Industries Grid - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Health & Fitness */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-orange-500 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 12 3.43 13.43 7.71 17 16.29 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Health & Fitness</h3>
            </div>

            {/* Startups */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="text-pink-500 mb-6">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm2 8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Startups</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white max-w-7xl mx-auto">
        <div className="container mx-auto px-9">
          {/* Section Header */}
          <div className="mb-12">
            <div className="text-black text-3xl uppercase font-semibold mb-2">Testimonials</div>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          {/* Testimonials Container */}
          <div className="overflow-hidden max-w-4xl mx-auto">
            <h2 className="text-2xl mb-4 mr-4">
              <span>BlueFox Technologies Reviews</span> <span className="ml-5"> 4.9</span>
              <span className="text-red-500 ml-2"> ★★★★★</span><span className="text-red-500 ml-3 mr-14 text-xs">43 REVIEWS</span><span className="text-gray-500 ml-14 text-sm">Powered by </span>
              <a href="https://clutch.co/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Clutch</a>
            </h2>
            <div className="overflow-y-auto h-64 border ml-8 border-gray-300 rounded-lg">
              {/* Testimonial 1 */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-red-500 ml-2">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600">
                  "I was impressed with the support the BlueFox team provided us to deliver the application according to our expectations."
                </p>
                <p className="text-gray-500 mt-5 text-xs">Delivery Manager, IT Services Company</p>
                <span className="text-gray-500 text-xs font-semibold mt-2 inline-block">Verified Review</span>
              </div>

              {/* Testimonial 2 */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-red-500 ml-2">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600">
                  "The BlueFox team was very professional and delivered the project on time. Highly recommend!"
                </p>
                <p className="text-gray-500 mt-5 text-xs">Project Manager, Tech Solutions</p>
                <span className="text-gray-500 text-xs font-semibold mt-2 inline-block">Verified Review</span>
              </div>

              {/* Testimonial 3 */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-red-500 ml-2">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600">
                  "BlueFox Technologies exceeded our expectations with their innovative solutions and dedicated support."
                </p>
                <p className="text-gray-500 mt-5 text-xs">CTO, E-commerce Company</p>
                <span className="text-gray-500 text-xs font-semibold mt-2 inline-block">Verified Review</span>
              </div>

              {/* Testimonial 4 */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-red-500 ml-2">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600">
                  "The team at BlueFox was responsive and attentive to our needs, making the development process seamless."
                </p>
                <p className="text-gray-500 mt-5 text-xs">Product Owner, Fintech Startup</p>
                <span className="text-gray-500 text-xs font-semibold mt-2 inline-block">Verified Review</span>
              </div>

              {/* Testimonial 5 */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-red-500 ml-2">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600">
                  "BlueFox Technologies provided us with a robust solution that has significantly improved our operations."
                </p>
                <p className="text-gray-500 mt-5 text-xs">Operations Manager, Logistics Company</p>
                <span className="text-gray-500 text-xs font-semibold mt-2 inline-block">Verified Review</span>
              </div>

              {/* Testimonial 6 */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold">5.0</span>
                  <span className="text-red-500 ml-2">★ ★ ★ ★ ★</span>
                </div>
                <p className="text-gray-600">
                  "The BlueFox team is knowledgeable and skilled, delivering high-quality work on time and within budget."
                </p>
                <p className="text-gray-500 mt-5 text-xs">CEO, Marketing Agency</p>
                <span className="text-gray-500 text-xs font-semibold mt-2 inline-block">Verified Review</span>
              </div>

              {/* Add more testimonials as needed */}
            </div>
          </div>


        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-screen bg-white">
        <div className="w-full max-w-none px-0 md:px-0 p-0 m-0 flex flex-col md:flex-row justify-between">
          {/* Left Side: Contact Information */}
          <div className="w-full md:w-1/2 bg-[#0e73e4] text-white p-8">
            <div className="pb-8">
              <h3 className="text-lg font-medium mb-2">LET'S TALK</h3>
              <h2 className="text-3xl font-bold mb-6">Looking for a Solution? Let's Talk</h2>

              <div className="flex items-center mb-4">
                <span className="mr-2">📧</span>
                <a href="mailto:sales@BlueFox.co.in" className="underline">sales@BlueFox.co.in</a>
              </div>

              <div className="flex flex-row space-x-4">
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <p>(India) +91 - 8885564224</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <p>(USA) +1 - 6503197394</p>
                </div>
              </div>
            </div>

            {/* Stats Section - In a box with dividers */}
            <div className="border border-white rounded-lg overflow-hidden mb-8">
              <div className="grid grid-cols-3 divide-x divide-white">
                <div className="text-center py-4">
                  <h3 className="text-4xl font-bold">125+</h3>
                  <p className="uppercase text-sm mb-6">Developers</p>
                </div>
                <div className="text-center py-4">
                  <h3 className="text-4xl font-bold">14+</h3>
                  <p className="uppercase text-sm">Years in Operation</p>
                </div>
                <div className="text-center py-4">
                  <h3 className="text-4xl font-bold">150+</h3>
                  <p className="uppercase text-sm">Global Clients</p>
                </div>
              </div>
            </div>

            {/* Awards & Recognition Carousel */}
            <h3 className="text-lg font-bold mb-7 uppercase text-center">Awards & Recognition</h3>
            <Slider {...settings}>
              <div>
                <img src={giphy} alt="DesignRush" className="h-20 p-0 rounded mx-auto" />
              </div>
              <div>
                <img src={giphy} alt="DesignRush" className="h-20 p-0 rounded mx-auto" />
              </div>
              <div>
                <img src={giphy} alt="DesignRush" className="h-20 p-0 rounded mx-auto" />
              </div>
            </Slider>

            {/* Our Partnership */}
            <h3 className="text-lg font-bold mb-4 mt-8 uppercase text-center">Our Partnership</h3>
            <div className="flex justify-center">
              <img src={giphy} alt="DesignRush" className="h-20 p-1 rounded mx-auto" />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8">
            <h3 className="text-2xl font-bold mb-6 pb-1 border-b border-gray-300">Hey! there 😊</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name*</label>
                  <input type="text" id="name" placeholder="Full Name" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email*</label>
                  <input type="email" id="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number*</label>
                  <PhoneInput
                    country={'np'}
                    value={phone}
                    onChange={setPhone}
                    inputStyle={{ width: '100%', paddingLeft: '50px' }} // Adjust padding to prevent overlap
                  />

                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="interest">
                    Interested In*
                  </label>
                  <select id="interest" className="w-full p-2 border border-gray-300 rounded" required>
                    <option value="">--Please choose an option--</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="enterprise-software-development">Enterprise Software Development</option>
                    <option value="web-application-development">Web Application Development</option>
                    <option value="ai-powered-solutions">AI-Powered Software Solutions</option>
                    <option value="artificial-intelligence">Artificial Intelligence</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="iot-solutions">Software Solutions for Internet of Things</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="cloud-computing">Cloud Computing</option>
                    <option value="ux-ui-design">UX / UI Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="hearAbout">
                    How did you hear about us?
                  </label>
                  <select id="hearAbout" className="w-full p-2 border border-gray-300 rounded">
                    <option value="">--Please choose an option--</option>
                    <option value="google">Google</option>
                    <option value="clutch">Clutch</option>
                    <option value="social-media">Social Media</option>
                    <option value="email">Email</option>
                    <option value="goodfirms">GoodFirms</option>
                    <option value="appfutura">AppFutura</option>
                    <option value="behance">Behance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="budget">
                    Budget
                  </label>
                  <select id="budget" className="w-full p-2 border border-gray-300 rounded">
                    <option value="">--Please choose an option--</option>
                    <option value="below-10k">‹$10K</option>
                    <option value="10k-25k">$10K-$25K</option>
                    <option value="25k-50k">$25K-$50K</option>
                    <option value="above-50k">›$50K</option>
                  </select>
                </div>

              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message*</label>
                <textarea id="message" placeholder="Your message here" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="fileUpload">Upload file</label>
                <input type="file" id="fileUpload" className="w-full p-2 border border-gray-300 rounded" />
                <p className="text-xs text-gray-500">Allowed file formats are (jpg, jpeg, png, docx, pdf, txt) less than 10 MB</p>
              </div>

              <div className="mb-4">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" required />
                  <span className="text-sm">Yes, I consent to my data being stored according to the guidelines set out in the <a href="#" className="text-blue-600 underline">Privacy Policy</a>*.</span>
                </label>
              </div>

              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Send Your Enquiry →
              </button>
            </form>
          </div>
        </div>
      </section> 


      {/* Add more sections as needed */}
    </div>
  );
}

export default Homepage; 