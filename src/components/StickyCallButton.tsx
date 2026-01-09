import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PHONE_NUMBER = '(888) 363-0848';

export const StickyCallButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-full right-0 mb-3 sm:mb-4 bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-border min-w-[260px] sm:min-w-[280px] mr-0 sm:mr-0"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Call Us Now</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  Our experts are ready to help you find the perfect plan!
                </p>
              </div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE_NUMBER}
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-2xl flex items-center justify-center hover:shadow-primary/50 transition-shadow"
      >
        <Phone className="w-7 h-7" />
      </motion.button>
    </motion.div>
  );
};
