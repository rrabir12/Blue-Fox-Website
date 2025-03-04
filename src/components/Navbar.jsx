import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = {
    company: {
      title: 'Company',
      icon: '🏢',
      items: [
        { title: 'About Us', link: 'about' },
        { title: 'Engagement Model', link: '/' },
        { title: 'Our Development Process', link: '/' },
        { title: 'Testimonials', link: '/' },
        { title: 'Careers', link: '/' },
        { title: 'Diversity, Equity & Inclusion', link: '/' }
      ],
      additionalLinks: [
        { title: 'Our Blogs', link: '/' },
        { title: 'Clients', link: '/' },
        { title: 'Partners', link: '/' },
        { title: 'Awards & Membership', link: '/' }
      ],
      resourceLinks: [
        { title: 'Case Studies', link: '/' },
        { title: 'Webinars', link: '/' }
      ],
      socialLinks: [
        { platform: 'linkedin', icon: <FaLinkedinIn />, link: '/' },
        { platform: 'twitter', icon: <FaTwitter />, link: '/' },
        { platform: 'facebook', icon: <FaFacebookF />, link: '/' },
        { platform: 'instagram', icon: <FaInstagram />, link: '/' },
        { platform: 'youtube', icon: <FaYoutube />, link: '/' }
      ]
    },
    service: {
      title: 'Service',
      columns: [
        {
          items: [
            'AI Enabled Application',
            'ERP Consulting and Development',
            'Web Development',
            'Microsoft Technologies',
            'Devops Consulting',
            'Frontend Development'
          ]
        },
        {
          items: [
            'Generative AI Development',
            'Data Visualization',
            'Mobile Development',
            'Enterprise Portals',
            'Dedicated Development Team'
          ]
        },
        {
          items: [
            'UI/UX Design',
            'Database Consulting',
            'Open Source CMS & E-commerce',
            'QA and Testing',
            'Maintenance and Support'
          ]
        }
      ]
    },
    industry: {
      title: 'Industry',
      items: [
        'Education & Learning',
        'Food & Hospitality',
        'Health & Fitness',
        'Finance & Marketing',
        'Real Estate',
        'Retail & Ecommerce',
        'Startups'
      ]
    },
    technology: {
      title: 'Technology',
      sections: [
        {
          title: 'Frontend',
          items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'ReactJS', 'Angular']
        },
        {
          title: 'Backend',
          items: ['PHP', 'Node.JS', 'Python', 'Laravel', 'Mern Stack', 'Mean Stack', 'Next.js']
        },
        {
          title: 'Database',
          items: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle']
        }
      ]
    },
    work: {
      title: 'Work',
      items: ['Portfolio']
    },
    solution: {
      title: 'Solution',
      items: ['Enterprise Solutions']
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className={`hidden lg:flex space-x-6`}>
            {Object.entries(menuItems).map(([key, menu]) => (
              <div 
                key={key}
                className="relative nav-item group"
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                  {menu.title}
                </button>
                
                <div className="mega-menu">
                  <div className="bg-white shadow-xl w-screen">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                      {key === 'company' && (
                        <div className="grid grid-cols-4 gap-6">
                          <div className="col-span-1">
                            <div className="flex items-center mb-4">
                              <span className="text-blue-600 mr-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <h3 className="text-xl font-bold text-gray-800">Company</h3>
                            </div>
                            <ul className="space-y-3">
                              {menu.items.map((item, idx) => (
                                <li key={idx}>
                                  <Link 
                                    to={item.link} 
                                    className="block text-gray-700 hover:text-blue-600"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-span-1">
                            <ul className="space-y-3 mt-16">
                              {menu.additionalLinks.map((item, idx) => (
                                <li key={idx}>
                                  <Link 
                                    to={item.link} 
                                    className="block text-gray-700 hover:text-blue-600"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-span-1">
                            <ul className="space-y-3 mt-16">
                              {menu.resourceLinks.map((item, idx) => (
                                <li key={idx}>
                                  <Link 
                                    to={item.link} 
                                    className="block text-gray-700 hover:text-blue-600"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <div className="flex space-x-2 mt-6">
                              {menu.socialLinks.map((social, idx) => (
                                <a 
                                  key={idx} 
                                  href={social.link}
                                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700"
                                  aria-label={social.platform}
                                >
                                  {social.icon}
                                </a>
                              ))}
                            </div>
                          </div>
                          <div className="col-span-1 flex items-center justify-center">
                            <div className="w-full">
                              <img 
                                src="https://via.placeholder.com/400x200" 
                                alt="Two women looking at computer" 
                                className="rounded-lg w-full object-cover h-48"
                              />
                              <Link 
                                to="/" 
                                className="flex items-center justify-center text-blue-600 hover:text-blue-700 mt-4 border border-blue-600 rounded-md py-2 px-4"
                              >
                                <span>Check brochure</span>
                                <FaFileAlt className="ml-2" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {key === 'service' && (
                        <div className="grid grid-cols-3 gap-8">
                          {menu.columns.map((column, idx) => (
                            <div key={idx}>
                              {idx === 0 && (
                                <div className="mb-6">
                                  <h3 className="text-xl font-bold text-gray-800 mb-2">Service</h3>
                                  <p className="text-gray-600">Comprehensive solutions for your business</p>
                                </div>
                              )}
                              <ul className="space-y-3">
                                {column.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link 
                                      to="/" 
                                      className="flex items-center text-gray-700 hover:text-blue-600"
                                    >
                                      <span className="mr-2">→</span>
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {key === 'technology' && (
                        <div className="grid grid-cols-3 gap-8">
                          {menu.sections.map((section, idx) => (
                            <div key={idx}>
                              <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
                              <ul className="grid grid-cols-2 gap-y-2">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link 
                                      to="/" 
                                      className="text-gray-700 hover:text-blue-600"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center hidden lg:flex">
            Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key}>
                <button 
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                >
                  {menu.title}
                </button>
                {activeMenu === key && (
                  <div className="pl-4">
                    {menu.items.map((item, idx) => (
                      <Link key={idx} to={item.link} className="block text-gray-600 hover:text-blue-600">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;