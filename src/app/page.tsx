import Categories from "@/components/homepage/categories";
import { ProductListCard } from "@/components/homepage/product-list";
import { Button } from "@/components/ui/button";
import { QueryClient } from "@tanstack/react-query";
import { getCategoriesServer, getProductsServer } from "@/http/api";
import { QUERY_KEYS } from "@/http/endpoints";

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS["categories"]],
    queryFn: getCategoriesServer,
  });
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS["products"]],
    queryFn: getProductsServer,
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Winter Collection is Here</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Discover the latest trends and get ready to style up for the cold season. Unbeatable
              prices, unmatched quality.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <Categories />

        {/* Featured Products Section */}
        <ProductListCard />
      </div>
    </div>
  );
}
