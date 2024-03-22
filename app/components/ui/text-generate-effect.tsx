"use client"
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

 const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return wordsArray.map((word, idx) => (
      <motion.span
        key={word + idx}
        className="text-base-content opacity-0"
      >
        {word}{" "}
      </motion.span>
    ));
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-base-content text-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {renderWords()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default TextGenerateEffect;