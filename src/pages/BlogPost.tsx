import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-serif mb-4">Post Not Found</h2>
        <Link to="/blogs" className="text-brand-olive underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="py-16">
      <Helmet>
        <title>{post.title} | Petals & Blooms Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blogs" className="inline-flex items-center text-brand-olive mb-8 hover:translate-x-1 transition-transform">
            <ArrowLeft size={18} className="mr-2" />
            Back to Journal
          </Link>

          <img
            src={post.img}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-[2rem] mb-12 shadow-lg"
            referrerPolicy="no-referrer"
          />

          <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 uppercase tracking-widest font-bold">
            <div className="flex items-center">
              <Calendar size={14} className="mr-2 text-brand-olive" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-2 text-brand-olive" />
              {post.author}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            {post.title}
          </h1>

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </div>
  );
};
