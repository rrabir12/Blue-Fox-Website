import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
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

function Footer() {
  return (
    <div>
      <section className="py-12 bg-blue-50">
        <div className="container mt-8 mx-auto px-8">
          <div className="flex flex-col md:flex-row">
            {/* Company Info and Description - Increased Width */}
            <div className="w-full md:w-1/3 mb-8 pr-10 md:mb-0">
              <img src={samsung} alt="BlueFox Technologies" className="h-16 mb-4" />

              <p className="text-sm font-semibold mb-6">
                BlueFox Technologies is work-focused unit of 125+ people specialist in object-oriented programming languages, database architects and analysts with strong mathematical backgrounds. Originally a small group of like minded people, we've now grown to a team of around 100+ outstanding people, all with the same passion and commitment to produce excellent applications for all our clients.
              </p>

              <a href="#" className="flex items-center text-blue-600 font-medium">
                <span className="mr-2">👥</span>
                Know more
              </a>

              {/* Recent Posts Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <p className="text-sm font-semibold">Azure Bot Services for Building Smarter Chatbots for Your Business</p>
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    <p className="text-sm font-semibold">AI in Development: Understanding Different AI Models – GPT, Claude, WatsonX, and More</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Navigation Columns */}
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Company Column */}
              <div>
                <h3 className="flex items-center text-blue-600 font-bold text-l mb-4">
                  <span className="mr-2">🏢</span>
                  Company
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Engagement Model</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Development Process</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Testimonials</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Careers</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Blog</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Clients</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Partners</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Awards & Membership</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Case Studies</a></li>
                </ul>

                {/* Industry Section */}
                <h3 className="flex items-center font-bold text-blue-600 text-l mt-8 mb-4">
                  <span className="mr-2">🏭</span>
                  Industry
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Education & Learning</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Food & Hospitality</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Health & Fitness</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Finance & Marketing</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Real Estate</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Retail & Ecommerce</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Startups</a></li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h3 className="flex items-center text-blue-600 font-bold text-l mb-4">
                  <span className="mr-2">⚡</span>
                  Services
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">AI Enabled Application</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">ERP Consulting and Development</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Frontend Development</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Web Development</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Microsoft Technologies</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Mobile Development</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Data Visualization</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Devops Development</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Enterprise Portals</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Dedicated Development Team</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">UI/UX Design</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Database Consulting</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Open Source CMS & E-commerce</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">QA and Testing</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Maintenance and Support</a></li>
                </ul>
              </div>

              {/* Technology Column */}
              <div>
                <h3 className="flex items-center text-blue-600 font-bold text-l mb-4">
                  <span className="mr-2">💻</span>
                  Technology
                </h3>

                {/* Frontend */}
                <h4 className="font-l font-bold mb-2">Frontend</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">HTML5</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">CSS3</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">JavaScript</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Jquery</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Bootstrap</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">ReactJS</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Angular</a></li>
                </ul>

                {/* Artificial Intelligence */}
                <h4 className="font-l font-bold mb-1 mt-2">Artificial Intelligence</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Azure AI</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">OpenAI</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Gemini</a></li>
                </ul>

                {/* Microsoft Technology */}
                <h4 className="font-l font-bold mb-1 mt-2">Microsoft Technology</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">ASP.NET Core</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">ASP.NET MVC</a></li>
                </ul>

                {/* Backend */}
                <h4 className="font-l font-bold mt-0">Backend</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">PHP</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Node.JS</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Python</a></li>
                </ul>

                {/* Frameworks */}
                <h4 className="font-l font-bold">Frameworks</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600 mt-0">Laravel</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Mern Stack</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Mean Stack</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Next.js</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">WordPress</a></li>
                </ul>
              </div>

              {/* Additional Technologies Column */}
              <div>
                {/* Mobile */}
                <h4 className="font-l font-bold mb-1 mt-11">Mobile</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Tableau</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">D3&De.js</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Highcharts</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Google Charts</a></li>
                </ul>

                {/* BI & Data Visualization */}
                <h4 className="font-l font-bold mb-0 mt-0">BI & Data Visualization</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Tableau</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">D3&De.js</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Highcharts</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Google Charts</a></li>
                </ul>

                {/* Database */}
                <h4 className="font-l font-bold mb-1 mt-2">Database</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <a href="#" className="text-sm font-semibold hover:text-blue-600">Sql Server</a>
                    <span className="ml-2 w-2 h-2 rounded-full"></span>
                  </li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Mysql</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">PostgreSql</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">MongoDB</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Oracle</a></li>
                </ul>

                {/* Clouds */}
                <h4 className="font-l font-bold mb-1 mt-2">Clouds</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Digital Ocean</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Google Cloud</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">AWS Services</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Azure</a></li>
                </ul>

                {/* Emerging Tech */}
                <h4 className="font-l font-bold mt-1">Emerging Tech</h4>
                <ul className="space-y-2 mb-4">
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Blockchain</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">IoT</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">AI&ML</a></li>
                  <li><a href="#" className="text-sm font-semibold hover:text-blue-600">Bixby Application Development</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Locations Section */}
      <section className="bg-blue-50 flex justify-center items-center py-8">
        <div className="container max-w-5xl flex flex-row justify-center items-start space-x-16">
          {/* India Location */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-1">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="font-semibold text-gray-800">India</span>
            <h3 className="text-lg font-bold text-blue-500 mt-1">Gachibowli, Hyderabad</h3>
            <p className="text-gray-700 text-sm max-w-xs mt-2 text-left">
              Unit 301 & 302, 3rd Floor, Magna Park View Towers, near Urdu University Road, Sri Shyam Nagar, Telecom Nagar
              Extension, Gachibowli, Hyderabad, Telangana 500032
            </p>
            <div className="flex items-center mt-3">
              <svg
                className="w-4 h-4 text-blue-500 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z"
                  fill="currentColor"
                />
              </svg>
              <a href="tel:+9771234567890" className="text-blue-500 hover:underline text-sm">
                977-1234567890
              </a>
            </div>
          </div>

          {/* USA Location */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-1">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="font-semibold text-gray-800">USA</span>
            <h3 className="text-lg font-bold text-blue-500 mt-1">Middletown, Delaware</h3>
            <p className="text-gray-700 text-sm max-w-xs mt-2 text-left">
              651 n broad st suite 206 Middletown Delaware 19709
            </p>
            <div className="flex items-center mt-3">
              <svg
                className="w-4 h-4 text-blue-500 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z"
                  fill="currentColor"
                />
              </svg>
              <a href="tel:+11234567890" className="text-blue-500 hover:underline text-sm">
                +1-1234567890
              </a>
            </div>
          </div>
        </div>
      </section>



      <footer className="bg-blue-100 text-gray-800 py-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p className="text-center font-semibold md:text-left">
              Copyright © 2025 All Rights Reserved.
            </p>
            <div className="flex items-center my-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="ml-2 text-blue-600"> - GoodFirms</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-500"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
