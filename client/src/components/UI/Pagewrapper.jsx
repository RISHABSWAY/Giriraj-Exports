import { motion } from "framer-motion";
import Footer from "../../pages/Footer"; // adjust path if needed

const PageWrapper = ({ children }) => (
  <>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>

    {/* Global footer */}
    <Footer />
  </>
);

export default PageWrapper;
