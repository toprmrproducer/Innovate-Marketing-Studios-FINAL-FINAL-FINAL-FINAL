import React from 'react';
import { motion } from 'framer-motion';
import { useImageModal } from '../../../../hooks/useImageModal';
import ImageModal from '../../../ui/modal/ImageModal';

interface PhotoCategoryProps {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  index: number;
}

export default function PhotoCategory({ title, images, index }: PhotoCategoryProps) {
  const { isOpen, selectedImage, openModal, closeModal } = useImageModal();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-display text-white mb-6">{title}</h3>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, imageIndex) => (
            <motion.div
              key={image.src}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openModal(image.src, image.alt)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedImage && (
        <ImageModal
          isOpen={isOpen}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
}