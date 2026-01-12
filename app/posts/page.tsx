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
    // 
    <></>
  );
}