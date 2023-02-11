import { motion } from "framer-motion";
import { FaHammer } from "react-icons/fa";
import "./carga.css";

interface Props {}

const PantallaCarga = (props: Props) => {
  return (
    <motion.h1
      className="loader"
      animate={{
        rotate: [0, 45, 0, 45],
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <FaHammer />
    </motion.h1>
  );
};
export default PantallaCarga;
