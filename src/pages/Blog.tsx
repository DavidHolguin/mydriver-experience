import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { SectionContainer } from "@/components/SectionContainer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal, BookOpen } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"popular" | "reciente">("popular");

  // Categorías únicas
  const categories = useMemo(
    () => [...new Set(blogPosts.map((post) => post.category))],
    []
  );

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    const result = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "reciente") {
      result.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      );
    } else {
      result.sort((a, b) => (b.views || 0) - (a.views || 0));
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <Layout>
      {/* Blog Hero Header */}
      <section className="bg-brand-navy text-white pt-36 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-white/10 text-white/90 text-sm font-semibold tracking-wide">
            <BookOpen className="w-4 h-4 text-brand-red" /> Noticias, Consejos y Movilidad
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Blog & Actualidad MyDriver
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Historias, guías para conductores y pasajeros, e innovaciones en el transporte privado en México.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="bg-white border-b border-border-subtle sticky top-20 z-30 shadow-soft">
        <div className="container mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar artículos, temas o palabras clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-pill border-border-subtle bg-surface-light focus:bg-white focus:border-brand-red text-text-primary shadow-none transition-all"
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-pill border-border-subtle hover:border-brand-red text-text-primary px-5 py-2.5 h-auto flex items-center gap-2"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-text-secondary" />
                    <span className="text-sm font-medium">
                      {sortBy === "popular" ? "Más Popular" : "Más Reciente"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44 rounded-xl shadow-elevated">
                  <DropdownMenuItem
                    onClick={() => setSortBy("popular")}
                    className={sortBy === "popular" ? "bg-surface-muted font-bold text-brand-red" : ""}
                  >
                    Más popular
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSortBy("reciente")}
                    className={sortBy === "reciente" ? "bg-surface-muted font-bold text-brand-red" : ""}
                  >
                    Más reciente
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-1.5 rounded-pill text-xs font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-brand-red text-white shadow-sm"
                  : "bg-surface-muted text-text-secondary hover:bg-gray-200"
              }`}
            >
              Todos los Temas
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-pill text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-brand-red text-white shadow-sm"
                    : "bg-surface-muted text-text-secondary hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}

            <span className="ml-auto text-xs text-text-muted hidden md:inline">
              {filteredPosts.length} publicaciones
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <SectionContainer background="light">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-card border border-border-subtle max-w-lg mx-auto text-center p-8">
            <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-text-muted" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              Prueba con otras palabras de búsqueda o selecciona otra categoría.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}
              variant="outline"
              className="rounded-pill border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
            >
              Limpiar Filtros
            </Button>
          </div>
        )}
      </SectionContainer>
    </Layout>
  );
}
