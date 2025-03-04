import { 
  FaCode, FaMobile, FaDatabase, FaCloud, FaRobot, 
  FaCogs, FaDesktop, FaChartBar, FaServer, FaTools,
  FaUserCog, FaShieldAlt, FaNetworkWired, FaBrain, FaRocket
} from 'react-icons/fa';

function Services() {
  const services = [
    {
      number: "01",
      icon: <FaCode />,
      title: "AI & ML Development",
      description: "Leverage the power of artificial intelligence and machine learning"
    },
    {
      number: "02",
      icon: <FaCogs />,
      title: "Web Development",
      description: "Custom web applications with modern technologies"
    },
    // Add all 15 services here with their respective numbers and descriptions
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Result Driven Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What We Provide to Our Valued Customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                {service.number}
              </div>
              <div className="text-blue-600 text-3xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services; 