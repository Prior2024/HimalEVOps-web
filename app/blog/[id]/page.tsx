import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";

// We must make the function async for Next.js 15+
export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  // Await the params to get the actual ID
  const resolvedParams = await params;
  
  // Find the post based on the URL id
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  // If the post doesn't exist, show a 404 page
  if (!post) {
    notFound(); 
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <Link href="/blog" className="text-[#DC143C] font-mono text-sm hover:underline mb-8 inline-block">
        ← Back to all posts
      </Link>
      
      <h1 className="text-4xl md:text-6xl font-bold text-white font-space mb-4 leading-tight">
        {post.title}
      </h1>
      <p className="text-gray-500 font-mono mb-8">{post.date}</p>

      {/* Image Box */}
      <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 border border-white/10">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
        {post.content.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}