"use client";
import * as motion from "motion/react-client";

interface Props {
  children: React.ReactNode;
}

export default function EnterAnimation({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
