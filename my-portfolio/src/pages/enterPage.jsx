import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EnterPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    // Navigate to the main app (home)
    navigate("/home");
  };

  const positions=[
    [0, 0],      
    [0, -120],   
    [104, -60],  
    [104, 60],   
    [0, 120],    
    [-104, 60],  
    [-104, -60], 
    [0, 0],
  ]

  return (
    <main className="flex flex-col items-center justify-center fixed inset-0 bg-gradient-to-br from-blue-900 to-blue-600 overflow-hidden">
      {/* Animated circles */}
      <div className="absolute flex items-center justify-center">
        {positions.map(([x, y], i) => (
          <motion.div
            key={i}
            className="absolute border border-white/25 rounded-full"
            style={{
              width: 240,
              height: 240,
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(${x}px, ${y}px)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + i * 2,
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
