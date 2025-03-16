import React from 'react'
import { FaArrowRight, FaRobot } from 'react-icons/fa'
import "./AiEnable.css";

function AiEnable() {
  return (
    <>
      <section className='bg-gradient-to-r from-[#03228F] via-[#03228F] via-70% to-[#0B61D1] h-[100vh] relative'>
        <div className="container mt-[90px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 text-center md:text-left p-5">
                <h1 className="text-[34px] font-[600] text-white">AI Enabled Application Development</h1>
                <p className='text-white text-[16px] font-[400] text-justify mt-11'>Welcome to Ahex Technologies’s AI-Enabled Application Development Services. In today’s rapidly evolving technological landscape, artificial intelligence (AI) has emerged as a game-changer, transforming the way businesses operate and interact with their customers. Our dedicated team of experts specializes in harnessing the power of AI to create innovative and intelligent applications that drive business growth and enhance user experiences.</p>
                <button className='flex items-center gap-2 bg-[#0E73E4] text-[17px] font-[500] py-2 px-4 mt-[90px] text-white rounded-2xl justify-center hover:bg-white hover:text-[#0E73E4]'>Get Started <FaArrowRight /> </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                src="https://i0.wp.com/ahex.co/wp-content/uploads/2023/09/AI_Enabled_Application_Development_Ahex.png?w=751&ssl=1"
                alt="AI Enabled Application Development"
                className="w-full max-w-[400px] md:max-w-full"
                />
            </div>
        </div>
        </div>
        <div className="absolute top-0 left-[5%] h-full w-[1px] bg-[#27419F]">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-[70px] bg-white animate-travel delay-1000"></div>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#27419F]">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-[70px] bg-white animate-travel delay-0"></div>
        </div>
        <div className="absolute top-0 right-[5%] h-full w-[1px] bg-[#27419F]">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-[70px] bg-white animate-travel delay-1000"></div>
        </div>
      </section>
      <section className='py-5 z-10'>
        <div className="container">
          <div className='flex flex-col items-center gap-4'>
          <h1 className='text-center text-[34px] font-[500] text-black'>Our AI Expertise</h1>
          <div className="line">
            <div className="lineCircle animate-travelLeftRight"></div>
          </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-[180px]">
            <div className="md:w-1/2 flex justify-center">
                <img
                src="https://i0.wp.com/ahex.co/wp-content/uploads/2023/08/AI-Enabled-application-Development.png?resize=768%2C546&ssl=1"
                alt="Our AI Expertise"
                className="w-full max-w-[400px] md:max-w-full"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-5">
                <p className='text-black text-[16px] font-[400] text-justify mt-11'>
                  At Ahex, we pride ourselves on our proficiency in AI technologies and frameworks. Our experienced team has successfully developed a wide array of AI-enabled applications across various domains. We've leveraged AI to develop solutions ranging from chatbots and virtual assistants to complex recommendation systems and predictive analytics models. Our expertise extends to platforms such as Azure AI and OpenAI, enabling us to create applications that understand natural language, analyze images, and make data-driven predictions.
                  <br />
                  <br />
                  We have a proven track record of developing AI-based applications using a range of cutting-edge technologies and platforms. Our team of AI experts is well-versed in leveraging various AI sources and APIs to create innovative solutions that cater to diverse business needs.
                </p>
            </div>
        </div>
        </div>
      </section>
      <section className='py-5'>
        <div className="container">
          <div className='flex flex-col items-center gap-4'>
          <h1 className='text-center text-[34px] font-[500] text-black'>AI Technologies We Excel In</h1>
          <div className="line">
            <div className="lineCircle animate-travelLeftRight"></div>
          </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 flex justify-center">
                <img
                src="https://i0.wp.com/ahex.co/wp-content/uploads/2023/06/The-Next-Frontier-of-Business-Efficiency-Generative-AI-Solutions-like-ChatGPT.png?fit=996%2C560&ssl=1"
                alt="Transformative Impact"
                className="w-full max-w-[400px] md:max-w-full h-auto"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-5">
                <h1 className="text-[22px] font-[500] text-black">Transformative Impact</h1>
                <div className="smallLine"></div>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Azure AI</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>Our team has expertise in harnessing the power of Microsoft's Azure AI services. From building intelligent chatbots with Azure Bot Service to developing predictive analytics models with Azure Machine Learning, we've created customized solutions that empower businesses with AI-driven insights.</p>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">OpenAI</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>We've delved into the capabilities of OpenAI to create applications that showcase natural language understanding and generation. Whether it's crafting personalized content or enabling human-like interactions, our applications powered by OpenAI's GPT-3 offer unprecedented capabilities.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 text-center md:text-left p-5">
                <h1 className="text-[22px] font-[500] text-black">Diverse Application Development</h1>
                <div className="smallLine"></div>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Chatbots and Virtual Assistants</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>We've developed chatbots and virtual assistants that engage users with natural language interactions. From customer support to lead generation, our AI-powered chatbots streamline communication and enhance user experiences.</p>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Image and Video Analysis</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>Leveraging AI frameworks, we've created applications that analyze images and videos. These applications range from facial recognition for security purposes to content moderation for user-generated content platforms.</p>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Recommendation Systems</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>Our AI expertise extends to creating recommendation engines that provide users with personalized suggestions. Whether it's e-commerce product recommendations or content suggestions on media platforms, our applications enhance user engagement.</p>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Anomaly Detection</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>We've developed AI applications that detect anomalies in data streams. These solutions are invaluable for industries such as finance and manufacturing, where early anomaly detection can prevent critical issues.</p>
            </div>
            <div className="md:w-1/2 flex justify-center h-auto">
                <img 
                src="https://i0.wp.com/ahex.co/wp-content/uploads/2023/05/How-Rev-AI-is-Revolutionizing-Development.png?fit=996%2C560&ssl=1"
                alt="Diverse Application Development"
                className="w-full max-w-[400px] md:max-w-full h-full object-cover"
                />
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 flex justify-center">
                <img
                src="https://i0.wp.com/ahex.co/wp-content/uploads/2023/05/Why-Custom-Software-Development-Needs-AI.png?fit=1006%2C560&ssl=1"
                alt="Cross-Platform Integration"
                className="w-full max-w-[400px] md:max-w-full h-auto"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-5">
                <h1 className="text-[22px] font-[500] text-black">Cross-Platform Integration</h1>
                <div className="smallLine"></div>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Our proficiency isn't confined to a single AI platform</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>We seamlessly integrate AI technologies across platforms, ensuring compatibility with your existing systems and processes. Whether it's Azure, OpenAI, or other AI sources, our expertise lies in delivering cohesive, functional applications that amplify your business operations.</p>
                <div className='flex gap-3 items-center mt-[20px]'>
                  <FaRobot style={{ color: '#1796D2', fontSize:'17px' }} />
                  <h3 className="text-[17px] font-[500] text-black">Partner with Ahex to tap into our wide-ranging AI expertise</h3>
                </div>
                <p className='text-black text-[16px] font-[400] text-justify mt-[20px]'>From crafting intelligent chatbots to implementing sophisticated recommendation systems, we bring AI-powered innovation to every project. Our commitment to staying at the forefront of AI technology ensures that your business reaps the benefits of the latest advancements.</p>
            </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default AiEnable
