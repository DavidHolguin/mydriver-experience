import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  User,
  Calendar,
  Clock,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Artículo no encontrado
          </h1>
          <Button
            onClick={() => navigate("/blog")}
            className="bg-[#ab1818] hover:bg-[#8a1414]"
          >
            Volver al Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Artículos relacionados
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.category === post.category &&
        p.id !== post.id
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header con botón atrás */}
      <div className="pt-24 pb-8 bg-gradient-to-br from-[#ab1818]/5 via-transparent to-[#ab1818]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-[#ab1818] hover:text-[#8a1414] font-semibold mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al Blog
          </button>

          {/* Imagen Hero */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Título y metadatos */}
          <div>
            <Badge className="bg-[#ffd2d2] text-[#ab1818] hover:bg-[#ffb8b8] font-semibold mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Metadatos del artículo */}
            <div className="flex flex-wrap gap-6 items-center text-gray-600 border-t border-b border-gray-200 py-4">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#ab1818]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#ab1818]" />
                <span>
                  {new Date(post.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ab1818]" />
                <span>{post.readTime} min de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido del artículo */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#ab1818] prose-strong:text-gray-900">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("#")) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const title = paragraph.replace(/^#+\s/, "");
                  const HeadingTag = `h${Math.min(
                    level + 1,
                    6
                  )}` as keyof JSX.IntrinsicElements;
                  return (
                    <HeadingTag
                      key={index}
                      className={`${
                        level === 1
                          ? "text-3xl"
                          : level === 2
                          ? "text-2xl"
                          : "text-xl"
                      } font-bold text-gray-900 mt-8 mb-4`}
                    >
                      {title}
                    </HeadingTag>
                  );
                } else if (paragraph.trim() === "") {
                  return null;
                } else if (paragraph.startsWith("-")) {
                  return (
                    <li key={index} className="text-gray-700 ml-6 mb-2">
                      {paragraph.replace(/^-\s/, "")}
                    </li>
                  );
                } else {
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-gray-100 text-gray-700 border-gray-300"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Acciones */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  liked
                    ? "bg-[#ab1818] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                {liked ? "Te gustó" : "Me gusta"}
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
            </div>
          </div>

          {/* Sidebar - Tabla de contenidos y relacionados */}
          <div className="lg:col-span-1">
            {/* Info del autor */}
            <div className="bg-gradient-to-br from-[#ab1818]/10 to-[#ab1818]/5 rounded-xl p-6 mb-8 border border-[#ab1818]/20">
              <h3 className="font-bold text-gray-900 mb-3">Sobre este artículo</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Categoría</p>
                  <p>{post.category}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Autor</p>
                  <p>{post.author}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Actualizado</p>
                  <p>
                    {new Date(post.date).toLocaleDateString("es-MX")}
                  </p>
                </div>
              </div>
            </div>

            {/* Artículos relacionados */}
            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Artículos Relacionados
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-[#ab1818] transition-all hover:shadow-md group"
                    >
                      <h4 className="font-semibold text-gray-900 group-hover:text-[#ab1818] transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {relatedPost.readTime} min lectura
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Más artículos */}
      <div className="py-16 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Más Artículos
            </h2>
            <p className="text-gray-600">
              Descubre otros artículos interesantes en nuestro blog
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/blog">
              <Button className="bg-[#ab1818] hover:bg-[#8a1414]">
                Ver todos los artículos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
