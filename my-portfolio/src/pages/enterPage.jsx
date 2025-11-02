import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EnterPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    // Navigate to the main app (home)
    navigate("/home");
  };

  return (
    <main className="flex flex-col items-center justify-center fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-600 overflow-hidden">
      {/* Animated circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: `${200 + i * 60}px`,
              height: `${200 + i * 60}px`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.03, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Center Circle */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="z-10 border border-white/80 rounded-full w-48 h-48 flex items-center justify-center cursor-pointer backdrop-blur-sm bg-white/5"
        onClick={handleEnter}
      >
        <span className="text-sm tracking-widest text-white/80">
          Enter to Escape
        </span>
      </motion.div>
    </main>
  );
}
