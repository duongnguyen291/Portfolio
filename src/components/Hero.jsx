import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion"; // Import the fadeIn utility from your utils
import { images } from "../constants";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >  
        <div className="flex gap-10 justify-center">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className="items-start gap-10">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className='text-[#915EFF]'>Duong</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 mb-10`}>
                An individual passionate about and always striving to <br className='sm:block hidden' />
                creatively impact through the allure of Data and AI.
              </p>

              <div className="flex flex-wrap gap-5 mt-5 sm:mt-0">
                <a
                  href="https://github.com/duongnguyen291"
                  className="w-20 h-20 sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.github_icon} 
                    alt="GitHub"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/nguyen-dinh-duong-074242248/"
                  className="w-20 h-20 sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.linkedin_icon} 
                    alt="LinkedIn"
                    className="w-15 h-15 sm:w-19 sm:h-19"
                  />
                </a>
                <a
                  href="mailto:2901nguyendinhduong@gmail.com"
                  className="w-20 h-20 sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-red-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.gmail_icon}
                    alt="Gmail"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </a>
                <a
                  href="https://www.facebook.com/duongnguyen291"
                  className="w-20 h-20 sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.facebook_icon} 
                    alt="Facebook"
                    className="w-15 h-15 sm:w-19 sm:h-19"
                  />
                </a>
                <a
                  href="src/assets/Nguyen_Dinh_Duong.pdf" // Đường dẫn đến CV của bạn
                  download="CV_NguyenDinhDuong.pdf" // Tên file khi tải xuống
                  className="w-40 h-20 sm:w-40 sm:h-20 w-32 h-12 rounded-2xl bg-green-500 flex items-center justify-center hover:bg-green-400 transition duration-300"
                >
                  <span className="text-white text-base sm:text-lg font-semibold text-center">
                    Download Resume
                  </span>
                </a>

              </div>
       
          </div>
          

        </div>

        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)} // Keep the fadeIn effect
            className='w-full green-pink-gradient p-[0.5px] rounded-full shadow-card' // Reduced padding here
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-tertiary rounded-full p-1 flex justify-evenly items-center flex-col' // Adjusted padding here
            >
              <img 
                src = {images.avatar_icon} 
                alt="Your description" 
                className="rounded-full w-full h-full object-cover object-cover"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
