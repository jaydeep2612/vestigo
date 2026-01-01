// app/blogs/[slug]/page.tsx
import { Blog } from "../blog"; // Ensure this path is correct
import Image from "next/image";

// 1. Fetcher for a single blog
async function getSingleBlog(slug: string): Promise<Blog | null> {
  // Use the slug in the API call
  const res = await fetch(`https://happy.techstrota.com/api/blogs/${slug}`, {
    next: { revalidate: 3600 }, 
  });
  
  if (!res.ok) return null;
  return res.json();
}

// 2. Updated Page Component
export default async function BlogDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> // Define params as a Promise
}) {
  // UNWRAP params before accessing slug
  const { slug } = await params; 
  
  const blog = await getSingleBlog(slug);

  if (!blog) {
    return (
      <div className="py-20 text-center font-sans">
        <h2 className="text-2xl font-bold text-slate-800">Blog post not found</h2>
        <p className="text-slate-500 mt-2">The article you are looking for does not exist or has been moved.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Header */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <div className="flex items-center gap-3 mb-6">
             <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded">
               {blog.tags?.[0] || "Insight"}
             </span>
             <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">
               {new Date(blog.created_at).toLocaleDateString()}
             </span>
          </div>
          <h1 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter max-w-5xl leading-[0.9]">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Intro Paragraph with Brand Blue accent */}
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 italic border-l-8 border-[#070B7F] pl-8">
            {blog.paragraph}
          </p>

          {/* Main Body Content rendered from API HTML */}
          <div 
            className="prose prose-slate prose-lg max-w-none 
            prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter
            prose-p:text-slate-700 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
          
          {/* Gallery Section */}
          {blog.gallery && blog.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
              {blog.gallery.map((img, i) => (
                <div key={i} className="group overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src={img.url} 
                    alt={img.desc || "Gallery Image"} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}