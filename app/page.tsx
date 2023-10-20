"use client";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='relative h-full flex flex-row px-4 items-center'>
      <div className='basis-full md:basis-2/3 space-y-2 flex flex-col'>
        <motion.p
          className='md:text-left text-center text-5xl font-bold'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3.0,
            delay: 0.5,
            ease: [0.2, 0.71, 0.2, 1.01],
          }}
        >
          Name or Logo
        </motion.p>
        <motion.p
          className='text-3xl md:text-left text-center font font-semibold italic'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3.0,
            delay: 1,
            ease: [0.2, 0.71, 0.2, 1.01],
          }}
        >
          Lorem ipsum dolor sit amet
        </motion.p>
        <motion.p
          className='text-justify text-xl font font-semibold'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 3.0,
            delay: 1.5,
            ease: [0.2, 0.71, 0.2, 1.01],
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
