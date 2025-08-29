import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LazySection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // yalnız bir dəfə açmaq üçün
          }
        });
      },
      {
        threshold: 0.1,   // 10% ekranda görünsə kifayət edir
        rootMargin: "0px 0px -50px 0px", // bir az tez yüklənsin
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ minHeight: "100px" }}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default LazySection;
