import Link from 'next/link';
import Image from 'next/image';

// 1. Function to fetch data from Laravel
async function getPosts() {
  // Ensure this URL matches your Laravel server
  const res = await fetch('http://127.0.0.1:8000/api/posts', {
    cache: 'no-store', // Ensures dynamic updates (disables caching)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function BlogPage() {
  // 2. Fetch the data
  const apiResponse = await getPosts();
  const posts = apiResponse.data; // Access the 'data' key from your Laravel JSON response

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            
            {/* Image Handling */}
            {post.thumbnail && (
              <div className="relative h-48 w-full">
                {/* Note: You must prepend the Laravel URL to the image path */}
                <img 
                  src={`http://127.0.0.1:8000/storage/${post.thumbnail}`} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              
              {/* Basic truncation for the description */}
              <div 
                 className="text-gray-600 line-clamp-3 mb-4"
                 // DangerouslySetInnerHTML is needed if your Filament editor saves HTML
                 dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}