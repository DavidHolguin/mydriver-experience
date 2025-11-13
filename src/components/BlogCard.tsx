import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <div className="group h-full rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-[#ab1818] transition-all duration-300 hover:shadow-xl hover:shadow-[#ab1818]/10">
        {/* Imagen */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Contenido */}
        <div className="p-6 flex flex-col h-full">
          {/* Badge de Categoría */}
          <div className="mb-3">
            <Badge className="bg-[#ffd2d2] text-[#ab1818] hover:bg-[#ffb8b8] font-semibold">
              {post.category}
            </Badge>
          </div>

          {/* Título */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#ab1818] transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          {/* Metadatos */}
          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{new Date(post.date).toLocaleDateString("es-MX")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime} min</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Botón Leer Más */}
          <button className="flex items-center justify-between font-semibold text-[#ab1818] group/btn">
            <span>Leer Artículo</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </Link>
  );
};
