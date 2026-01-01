"use client";
import { motion } from "framer-motion";
//  id: number;
//   slug: string;
//   title: string;
//   image: string;
//   paragraph: string;
//   content: string;
//   created_at: string; // ISO date string like "2025-07-08T13:45:00Z"
//   tags?: string[];
//   gallery?: { url: string; desc?: string }[]
// Define the type locally or import it from a types file
export type Blog = {
  id: number;
  title: string;
  image: string;
  created_at: string;
  paragraph: string;
  content: string;
  tags?: string[];
  // ... other fields
};

const brandBlue = "#070B7F";

export const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative h-[400px] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl">
        <img
          src={blog.image}
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          alt={blog.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B7F]/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-8 left-8">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">
            {blog.tags?.[0] || "News"}
          </span>
        </div>
      </div>

      <div className="px-4">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 block">
          {new Date(blog.created_at).toLocaleDateString()}
        </span>
        <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-[#070B7F] transition-colors mb-6">
          {blog.title}
        </h3>
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-900 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          Read Article <div className="h-[1px] w-12" style={{ backgroundColor: brandBlue }} />
        </div>
      </div>
    </motion.article>
  );
};