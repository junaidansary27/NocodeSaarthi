import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Shaik Mohammed Zunaid',
    role: 'CEO',
    company: 'TechVista Solutions',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'Nocode Saarthi transformed our vision into a production-ready AI platform with exceptional speed and professionalism. Their expertise in AI automation and full-stack development exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Geetika',
    role: 'COO',
    company: 'GrowthOps',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'The workflow automation solutions developed by Nocode Saarthi significantly improved our operational efficiency. The delivery process was transparent, fast, and highly professional.',
    rating: 5,
  },
  {
    name: 'Harsha',
    role: 'CTO',
    company: 'NexGen Systems',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    review: 'The team demonstrated outstanding technical expertise and strategic thinking. Our MVP was delivered rapidly while maintaining enterprise-grade quality.',
    rating: 5,
  },
  {
    name: 'Tejadeepti',
    role: 'Head of Operations',
    company: 'ScaleUp Innovations',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    review: 'Nocode Saarthi successfully built scalable AI-powered systems that streamlined our business processes. Their attention to detail and execution quality were remarkable.',
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const current = testimonials[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative min-h-[380px] md:min-h-[280px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full glass-panel rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-orange/40 shrink-0 shadow-lg shadow-brand-orange/10">
              <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-warm-ivory text-base md:text-lg italic font-sans mb-6 leading-relaxed">
                "{current.review}"
              </p>
              <div>
                <h4 className="font-semibold text-warm-ivory text-base md:text-lg">{current.name}</h4>
                <p className="text-soft-gray text-sm font-sans">
                  {current.role}, <span className="text-brand-orange">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prevStep}
          className="p-3 rounded-full border border-white/8 hover:border-brand-orange hover:bg-white/4 text-soft-gray hover:text-warm-ivory transition-all duration-300 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === i ? 'bg-brand-orange w-6' : 'bg-white/20'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextStep}
          className="p-3 rounded-full border border-white/8 hover:border-brand-orange hover:bg-white/4 text-soft-gray hover:text-warm-ivory transition-all duration-300 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
