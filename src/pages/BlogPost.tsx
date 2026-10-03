import { useParams, useNavigate, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
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
  Tag,
} from "lucide-react";
import { useState } from "react";

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="pt-36 pb-28 text-center container mx-auto px-4 max-w-lg">
          <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-6">
            <Tag className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-brand-navy mb-4">
            Artículo no encontrado
          </h1>
          <p className="text-text-secondary mb-8">
            La publicación que buscas no existe o ha sido movida de ubicación.
          </p>
          <Button
            onClick={() => navigate("/blog")}
            className="bg-brand-red hover:bg-brand-red-hover text-white rounded-pill px-8 py-3"
          >
            Volver al Blog
          </Button>
        </div>
      </Layout>
    );
  }

  // Artículos relacionados
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error al compartir", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <Layout>
      {/* Article Header */}
      <div className="pt-28 pb-12 bg-surface-light border-b border-border-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-hover font-semibold mb-6 group transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Todas las Publicaciones
          </button>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-card overflow-hidden mb-8 shadow-elevated">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="bg-brand-red text-white font-semibold mb-3 px-3 py-1 rounded-pill">
                {post.category}
              </Badge>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-6 items-center text-text-secondary border-y border-border-subtle py-4 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand-red" />
              <span className="font-medium text-text-primary">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span>
                {new Date(post.date).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-red" />
              <span>{post.readTime} min de lectura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Body */}
          <div className="lg:col-span-2 space-y-6">
            <article className="prose prose-lg max-w-none text-text-primary leading-relaxed">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("#")) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const title = paragraph.replace(/^#+\s/, "");
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-bold text-brand-navy mt-8 mb-4"
                    >
                      {title}
                    </h2>
                  );
                } else if (paragraph.trim() === "") {
                  return null;
                } else if (paragraph.startsWith("-")) {
                  return (
                    <li key={index} className="text-text-secondary ml-6 mb-2">
                      {paragraph.replace(/^-\s/, "")}
                    </li>
                  );
                } else {
                  return (
                    <p key={index} className="text-text-secondary mb-5 leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </article>

            {/* Tags */}
            <div className="pt-8 border-t border-border-subtle">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
                Etiquetas Relacionadas:
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-surface-light text-text-secondary border-border-subtle rounded-pill px-3 py-1 text-xs"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 flex items-center gap-4">
              <Button
                onClick={() => setLiked(!liked)}
                variant={liked ? "default" : "outline"}
                className={`rounded-pill ${
                  liked
                    ? "bg-brand-red text-white"
                    : "border-border-subtle text-text-primary hover:bg-surface-light"
                }`}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                {liked ? "¡Te ha gustado!" : "Me gusta"}
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="rounded-pill border-border-subtle text-text-primary hover:bg-surface-light"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Aside */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-surface-light rounded-card p-6 border border-border-subtle">
              <h3 className="font-bold text-brand-navy mb-4 text-base">
                Ficha del Artículo
              </h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <div>
                  <span className="font-semibold text-text-primary block">Categoría:</span>
                  <span>{post.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-text-primary block">Redacción:</span>
                  <span>{post.author}</span>
                </div>
                <div>
                  <span className="font-semibold text-text-primary block">Fecha:</span>
                  <span>{new Date(post.date).toLocaleDateString("es-MX")}</span>
                </div>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-lg text-brand-navy mb-4">
                  Artículos Relacionados
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="block p-4 rounded-xl border border-border-subtle hover:border-brand-red bg-white transition-all hover:shadow-soft group"
                    >
                      <h4 className="font-semibold text-sm text-brand-navy group-hover:text-brand-red transition-colors line-clamp-2 mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-text-muted">
                        {related.readTime} min de lectura
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* More Articles Section */}
      <SectionContainer background="light">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy">
            Explora Más en Nuestro Blog
          </h2>
          <p className="text-text-secondary text-sm mt-2">
            Historias, guías y consejos de movilidad seleccionados para ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="rounded-pill border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8"
          >
            <Link to="/blog">Ver Todos los Artículos</Link>
          </Button>
        </div>
      </SectionContainer>
    </Layout>
  );
}
