import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=2000"
          alt="Beautiful Flowers"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[0.3em] text-sm font-medium mb-4 block">Handcrafted with Love</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Flowers that <br />
            <span className="italic">Speak Your Heart</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/bouquets"
              className="bg-white text-brand-olive px-8 py-4 rounded-full font-medium flex items-center justify-center hover:bg-brand-cream transition-colors group"
            >
              Shop Bouquets
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-center"
            >
              Custom Orders
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedCategories = () => {
  const categories = [
    { name: 'Romantic', img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=800' },
    { name: 'Birthday', img: 'https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Shop by Occasion</h2>
          <div className="w-24 h-px bg-brand-olive mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <h3 className="text-white text-2xl font-serif">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Star size={120} className="text-brand-olive" />
          </div>
          <div className="max-w-2xl">
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-olive text-brand-olive" />)}
            </div>
            <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
              "The bouquet I ordered for my anniversary was absolutely stunning. The flowers were fresh, vibrant, and the arrangement was pure art. Highly recommend!"
            </p>
            <div>
              <p className="font-bold text-brand-olive">Sarah Jenkins</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-brand-olive text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to brighten someone's day?</h2>
        <p className="text-white/70 mb-10 text-lg">
          Whether it's a grand celebration or a simple gesture, we have the perfect bouquet waiting for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/bouquets"
            className="bg-white text-brand-olive px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-brand-cream transition-colors"
          >
            Browse Collection
          </Link>
          <Link
            to="/contact"
            className="border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Petals & Blooms | Premium Hand-Crafted Bouquets</title>
        <meta name="description" content="Discover the finest hand-crafted bouquets for every occasion. Fresh flowers delivered with love from Petals & Blooms." />
      </Helmet>
      <Hero />
      <FeaturedCategories />
      <Testimonials />
      <CTA />
    </div>
  );
};
