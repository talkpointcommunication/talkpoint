import { motion } from 'framer-motion';
import heroFamily from '@/assets/hero-family.jpg';
import streamingFamily from '@/assets/streaming-family.jpg';
import workFromHome from '@/assets/work-from-home.jpg';
import gamingImage from '@/assets/gaming-experience.jpg';

const images = [
  { src: heroFamily, alt: 'Connected family enjoying internet', span: 'col-span-2 row-span-2' },
  { src: streamingFamily, alt: 'Family streaming movie night', span: 'col-span-1 row-span-1' },
  { src: workFromHome, alt: 'Professional working from home', span: 'col-span-1 row-span-1' },
  { src: gamingImage, alt: 'Gaming with fast internet', span: 'col-span-2 row-span-1' },
];

export const GallerySection = () => {
  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See What's <span className="gradient-text">Possible</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join many people who've received independent guidance and advisory support for understanding their connectivity options.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
