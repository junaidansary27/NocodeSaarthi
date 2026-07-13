import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-white/8 rounded-xl overflow-hidden bg-secondary-bg/30 backdrop-blur-md transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left font-sans font-medium text-warm-ivory hover:bg-white/4 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg font-semibold pr-4">{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-soft-gray shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-brand-orange' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-6 pt-0 text-soft-gray font-sans leading-relaxed text-sm md:text-base border-t border-white/4">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
