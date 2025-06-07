import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: "lie",
    title: "When is Someone Lying to You?",
    date: "6 June 2025",
  },
  {
    slug: "20-great",
    title: "Twenty Great Things to Sell by Mail or Email",
    date: "6 June 2025",
  }
];

export default function Blog() {
useEffect(() => {
  document.title = 'Blog - 1qx.com';
}, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 bg-white rounded-xl shadow-md">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-6">Read our latest thoughts, guides, and ideas.</p>

      <ul className="space-y-4">
        {blogPosts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className="text-orange-600 text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
