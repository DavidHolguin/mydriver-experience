import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, SlidersHorizontal } from "lucide-react";

export default function Blog() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"popular" | "reciente">("popular");

  // Obtener categorías únicas
  const categories = useMemo(
    () => [...new Set(blogPosts.map((post) => post.category))],
    []
  );

  // Filtrar posts
  const filteredPosts = useMemo(() => {
    let result = blogPosts.filter((post) => {
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

    // Ordenar según el filtro
    if (sortBy === "reciente") {
      result.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      );
    } else {
      // popular (por defecto, mantiene el orden original o podría ser por visualizaciones)
      result.sort((a, b) => (b.views || 0) - (a.views || 0));
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hero Section Minimalista */}
      <div className="pt-24 pb-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barra de búsqueda y filtros en la misma línea */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-[#ab1818] focus:outline-none transition-colors text-gray-900 shadow-sm"
              />
            </div>

            {/* Dropdown Menu de Filtros */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 rounded-xl border-2 border-gray-200 hover:border-[#ab1818] hover:bg-white shadow-sm px-4 py-3 h-auto"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="hidden sm:inline">Filtros</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => setSortBy("popular")}
                  className={sortBy === "popular" ? "bg-gray-100" : ""}
                >
                  <span>Más popular</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("reciente")}
                  className={sortBy === "reciente" ? "bg-gray-100" : ""}
                >
                  <span>Más reciente</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Tags de Categorías Seleccionables */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-[#ab1818] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todas
            </button>

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#ab1818] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Info de resultados */}
          <div className="mt-6 text-sm text-gray-600">
            Encontrados{" "}
            <span className="font-bold text-[#ab1818]">{filteredPosts.length}</span>{" "}
            artículos
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-300">
            <Search className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No se encontraron artículos
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              Intenta con otros términos de búsqueda o selecciona diferentes
              categorías.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
