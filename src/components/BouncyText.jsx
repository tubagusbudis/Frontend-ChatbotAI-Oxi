import { motion } from "framer-motion";

export function BouncyText({ text, className }) {
  return (
    <div className={`flex flex-row justify-center ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={{
            y: [0, -12, 0], // Efek mantul ke atas sejauh 12px lalu balik lagi
          }}
          transition={{
            duration: 0.6, // Kecepatan mantul per huruf
            repeat: Infinity, // Ulangi terus
            repeatDelay: 3, // Jeda 3 detik biar nggak pusing liatnya mantul terus
            delay: index * 0.05, // Jeda antar huruf biar ada efek gelombang (wave)
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {/* Ini buat nge-handle spasi biar nggak ilang */}
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
