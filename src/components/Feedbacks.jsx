import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const FeedbackCard = ({
  index,
  certificate,
  image,
  link, // Thêm link
}) => (
<motion.div
  variants={fadeIn("", "spring", index * 0.5, 0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full space-y-4'
>
  {/* Thêm liên kết vào hình ảnh và đặt aspect-ratio 16:9 */}
  <div className="w-full aspect-w-16 aspect-h-9">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} className="w-full h-full object-cover rounded-3xl" />
    </a>
  </div>

  <div className='mt-1'>
    <p className='text-white tracking-wider text-[18px]'>{certificate}</p>
  </div>
</motion.div>

);




const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What about</p>
          <h2 className={styles.sectionHeadText}>My Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((testimonial, index) => (
          <FeedbackCard key={certificates.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
