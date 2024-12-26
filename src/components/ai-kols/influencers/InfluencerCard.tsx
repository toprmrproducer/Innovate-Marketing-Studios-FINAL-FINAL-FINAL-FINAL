import React from 'react';
import { motion } from 'framer-motion';

interface InfluencerCardProps {
  name: string;
  image: string;
  index: number;
}

export default function InfluencerCard({ name, image, index }: InfluencerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="aspect-[1/1] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-medium text-lg">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
}