"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 1. Updated Type Definition to match your requirement
export type Blog = {
  id: number;
  slug: string;
  title: string;
  image: string;
  paragraph: string;
  content: string;
  created_at: string;
  tags?: string[];
  gallery?: { url: string; desc?: string }[];
};

const brandBlue = "#070B7F";

export const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>  
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={blog.image}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          alt={blog.title}
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-slate-900 rounded-lg shadow-sm">
            {blog.tags?.[0] || "Finance"}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: brandBlue }} />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black uppercase tracking-tighter leading-tight text-slate-900 group-hover:text-[#070B7F] transition-colors mb-4 line-clamp-2">
          {blog.title}
        </h3>

        {/* Paragraph Snippet */}
        <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3 font-medium">
          {blog.paragraph}
        </p>

        {/* Footer / Read More Link */}
        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#070B7F] group-hover:translate-x-1 transition-transform duration-300">
            Read Article
            <div className="h-[1px] w-8 bg-[#070B7F]/30 group-hover:w-12 transition-all duration-300" />
          </div>
          
          {/* Subtle Icon Element */}
          <div className="opacity-10 group-hover:opacity-100 transition-opacity">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.article>
    </Link>
  );
};