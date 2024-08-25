import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { images } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5 justify-center items-center `}
      >  
        <div className="flex gap-10 justify-center">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 h-32 sm:h-40 md:h-80 violet-gradient' />
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
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.github_icon} 
                  alt="GitHub"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nguyen-dinh-duong-074242248/"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.linkedin_icon} 
                  alt="LinkedIn"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
              <a
                href="mailto:2901nguyendinhduong@gmail.com"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center hover:bg-red-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.gmail_icon}
                  alt="Gmail"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
              <a
                href="https://www.facebook.com/duongnguyen291"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={images.facebook_icon} 
                  alt="Facebook"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </a>
              <a
                href="src/assets/Nguyen_Dinh_Duong.pdf" // Đường dẫn đến CV của bạn
                download="CV_NguyenDinhDuong.pdf" // Tên file khi tải xuống
                className="w-28 h-10 sm:w-40 sm:h-20 rounded-2xl bg-green-500 flex items-center justify-center hover:bg-green-400 transition duration-300"
              >
                <span className="text-white text-sm sm:text-base font-semibold text-center">
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        <Tilt className="w-[200px] sm:w-[300px] flex justify-center items-center">
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="w-full green-pink-gradient p-[0.5px] rounded-full shadow-card  w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] "
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="bg-tertiary rounded-full p-1 flex justify-evenly items-center flex-col "
            >
              <img 
                src={images.avatar_icon} 
                alt="Your description" 
                className="rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
