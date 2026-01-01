// type Blog = {
//   id: number;
//   slug: string;
//   title: string;
//   image: string;
//   paragraph: string;
//   content: string;
//   created_at: string; // ISO date string like "2025-07-08T13:45:00Z"
//   tags?: string[];
//   gallery?: { url: string; desc?: string }[];
// };

const getBlogs=async () => {
    const res = await fetch('https://happy.techstrota.com/api/blogs', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }    return res.json();
};
const BlogsPage = async () => {
    const blogs = await getBlogs();
    return (
        <ul>
            {blogs.map((blog) => (
                <li key={blog.id}>
                    <h2>{blog.title}</h2>
                </li>
            ))}
        </ul>
    )
};
export default BlogsPage;