import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export const Blogs = () => {
  return (
    <div className="py-16">
      <Helmet>
        <title>Floral Journal | Petals & Blooms Blog</title>
        <meta name="description" content="Read our latest stories, flower care tips, and floral design inspirations in the Petals & Blooms journal." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-serif mb-4">Floral Journal</h1>
          <p className="text-gray-500 max-w-xl mx-auto italic">
            Stories, tips, and inspirations from the world of floristry.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blogs/${post.id}`} className="block">
                <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-brand-olive font-bold mb-2 block">
                  {post.date}
                </span>
                <h2 className="text-2xl font-serif mb-4 group-hover:text-brand-olive transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <span className="text-sm uppercase tracking-widest font-bold border-b border-brand-olive pb-1 group-hover:text-brand-olive transition-colors">
                  Read More
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
