import BlogCard from "./BlogComponents/BlogCard";
const BlogHome = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    <div className="max-w-6xl mx-auto px-4 py-32">
    <div className="relative mb-16">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 -z-10"></div>
        <h1 className="text-7xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
        Tech Explorer
        </h1>
        <p className="text-2xl text-center text-gray-400">
            Explore The World Of Modern Neuromorphic Space Imaging
        </p>
    </div>

{/* 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
        <div data-post-category={post.data.category}>
            <BlogCard
            title={post.data.title}
            description={post.data.description}
            category={post.data.category}
            url={`/blog/${post.slug}`}
            />
        </div>
        ))}
    </div> */}

    </div>
</main>
  )
}

export default BlogHome