import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [inView, setInView] = useState(false);
    const [viewportAmount, setViewportAmount] = useState(0.25); // Giá trị mặc định cho máy tính

    useEffect(() => {
      // Hàm kiểm tra kích thước màn hình và cập nhật giá trị viewportAmount
      const updateViewportAmount = () => {
        if (window.innerWidth < 768) {
          setViewportAmount(0.01); // Giá trị cho điện thoại
        } else {
          setViewportAmount(0.25); // Giá trị cho máy tính
        }
      };

      // Gọi hàm để thiết lập giá trị ban đầu
      updateViewportAmount();

      // Lắng nghe sự kiện thay đổi kích thước cửa sổ
      window.addEventListener('resize', updateViewportAmount);

      // Dọn dẹp sự kiện khi component bị hủy
      return () => window.removeEventListener('resize', updateViewportAmount);
    }, []);

    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        animate={inView ? "show" : "hidden"}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
        viewport={{ amount: viewportAmount }}
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
