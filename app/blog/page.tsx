import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../lib/posts";

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="mb-16 border-b border-white/10 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">
          News & <span className="text-[#DC143C]">Updates</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Insights and progress from HimalEVOps.
        </p>
      </div>

      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-[#0A0E1A] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row hover:border-[#DC143C]/30 transition-colors group">
            
            {/* Image Side */}
            <div className="relative w-full md:w-2/5 h-[250px] md:h-auto overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
              <p className="text-[#DC143C] font-mono text-sm mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold text-white mb-4 leading-tight">{post.title}</h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.id}`}
                className="inline-block text-white font-bold border-b border-[#DC143C] hover:text-[#DC143C] transition-colors self-start pb-1"
              >
                Read Full Post →
              </Link>
            </div>

          </article>
        ))}
      </div>
    </div>
  );
}