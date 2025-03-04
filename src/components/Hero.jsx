import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Solutions to Transform your Business
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              We build people and solutions that harness the power of the Web, Mobile, Cloud & AI to create value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Check brochure
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/path-to-your-vr-image.jpg" 
              alt="VR Technology" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-300">Team Size</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Global Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 