import ProductDescription from "@/components/single-product/product-description";
import ProductSpecification from "@/components/single-product/product-specification";
import DeliveryOptions from "@/components/single-product/delivery-options";
import VendorInfo from "@/components/single-product/vendor-info";
import ProductDetails from "@/components/single-product/product-details";
import { QueryClient } from "@tanstack/react-query";
import { getProductServer } from "@/http/api";
import { QUERY_KEYS } from "@/http/endpoints";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS["product"], slug],
    queryFn: async () => await getProductServer(slug),
  });

  return (
    <div className="container mx-auto px-2 py-8 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Product details */}
        <ProductDetails />

        {/* Delivery Options and Sold By */}
        <div className="grid lg:col-span-3 gap-6">
          <DeliveryOptions />
          <VendorInfo />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Product description */}
        <ProductDescription />

        {/* Product specification */}
        <ProductSpecification />
      </div>
    </div>
  );
}
