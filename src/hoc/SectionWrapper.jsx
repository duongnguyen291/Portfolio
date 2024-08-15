import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [inView, setInView] = useState(false);

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
        viewport={{ amount: 0.2}} 
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
