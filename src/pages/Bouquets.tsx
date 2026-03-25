import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const bouquets = [
  { id: 1, name: 'Midnight Rose', price: '$85', img: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800', tag: 'Bestseller' },
  { id: 2, name: 'Spring Whisper', price: '$65', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800', tag: 'New' },
  { id: 3, name: 'Golden Sun', price: '$75', img: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=800', tag: 'Popular' },
  { id: 4, name: 'Lavender Dream', price: '$90', img: 'https://images.unsplash.com/photo-1525310238294-7c27091103ee?auto=format&fit=crop&q=80&w=800', tag: '' },
  { id: 5, name: 'White Elegance', price: '$120', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', tag: 'Luxury' },
  { id: 6, name: 'Rustic Charm', price: '$55', img: 'https://images.unsplash.com/photo-1516528387618-afa90b13e000?auto=format&fit=crop&q=80&w=800', tag: '' },
  { id: 7, name: 'Peony Passion', price: '$95', img: 'https://images.unsplash.com/photo-1523694559145-804fbc9fe3a3?auto=format&fit=crop&q=80&w=800', tag: 'Limited' },
  { id: 8, name: 'Orchid Oasis', price: '$110', img: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&q=80&w=800', tag: '' },
  { id: 9, name: 'Wildflower Waltz', price: '$45', img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800', tag: 'Sale' },
  { id: 10, name: 'Tulip Tango', price: '$60', img: 'https://images.unsplash.com/photo-1520323232427-6b6b49899c0c?auto=format&fit=crop&q=80&w=800', tag: '' },
  { id: 11, name: 'Crimson Velvet', price: '$80', img: 'https://images.unsplash.com/photo-1548849170-e8240137ecae?auto=format&fit=crop&q=80&w=800', tag: '' },
  { id: 12, name: 'Morning Dew', price: '$70', img: 'https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=800', tag: 'Fresh' },
];

export const Bouquets = () => {
  return (
    <div className="py-16">
      <Helmet>
        <title>Our Collection | Petals & Blooms Bouquets</title>
        <meta name="description" content="Browse our stunning collection of hand-tied bouquets. From romantic roses to vibrant spring flowers, find the perfect arrangement." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-serif mb-4">Our Collection</h1>
          <p className="text-gray-500 max-w-xl mx-auto italic">
            Explore our carefully curated selection of hand-tied bouquets, designed to bring beauty and joy to any space.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {bouquets.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-brand-olive text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif mb-1">{item.name}</h3>
                <p className="text-brand-olive font-medium">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
