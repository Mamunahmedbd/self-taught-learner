interface Badge {
  id: number;
  name: string;
  type: number;
  type_label: string;
}

export interface ProductList {
  id: number;
  name: string;
  slug: string;
  regular_price: string;
  discount_price: string;
  is_variant: boolean;
  thumbnail: string;
  rating_avg: number;
  rating_count: number;
  available_stock: number;
  badges: Badge[];
  badgeProductVariationsExclude: unknown[]; // Could be more specific if the structure is known
}

export interface ProductListResponse {
  data: ProductList[];
  total: number;
  last_page: number;
  current_page: number;
  next_page_url: string | null;
}

interface SubChildCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface SubCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  subchilds: SubChildCategory[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  subcategories: SubCategory[];
}

export interface CategoriesResponse {
  data: Category[];
}

interface ImageItem {
  url: string;
}

interface ProductImages {
  [key: string]: ImageItem;
}

interface ProductDetail {
  id: number;
  product_id: number;
  regular_price: string;
  discount_price: string;
}

interface Attribute {
  id: number;
  name: string;
  merchant_id: number | null;
  slug: string;
  status: string;
  added_by: number;
  created_at: string | null;
  updated_at: string | null;
}

interface AttributeOption {
  id: number;
  merchant_id: number | null;
  attribute_id: number;
  attribute_value: string;
  slug: string;
  status: string;
  added_by: number;
  created_at: string;
  updated_at: string;
}

interface VariationAttribute {
  id: number;
  attribute_option_id: number;
  product_variation_id: number;
  product_id: number;
  attribute_id: number;
  created_at: string;
  updated_at: string;
  attribute: Attribute;
  attribute_option: AttributeOption;
}

export interface ProductVariation {
  id: number;
  product_id: number;
  sku: string;
  barcode: string;
  purchase_price: string;
  regular_price: string;
  discount_price: string;
  e_price: string;
  e_discount_price: string;
  wholesale_price: string;
  minimum_qty: number;
  total_stock_qty: number;
  status: number;
  id_delivery_fee: string;
  od_delivery_fee: string;
  ed_delivery_fee: string;
  created_at: string;
  updated_at: string;
  image: string;
  variation_attributes: VariationAttribute[];
}

interface Merchant {
  id: number;
  shop_name: string;
}

interface Media {
  id: number;
  model_type: string;
  model_id: number;
  collection_name: string;
  file_path: string;
  file_type: string;
  tags: string;
  created_at: string;
  updated_at: string;
  full_url: string;
}

interface Brand {
  id: number;
  merchant_id: number | null;
  name: string;
  slug: string;
  status: string;
  created_at: string;
  updated_at: string;
  image: string;
  media: Media[];
}

interface ShopProduct {
  id: number;
  merchant_id: number;
  product_id: number;
  active_status: number;
  status: string;
  product_type: number;
  regular_price: string | null;
  e_price: string;
  e_discount_price: string;
  packly_commission: string;
  id_delivery_fee: string;
  od_delivery_fee: string;
  ed_delivery_fee: string;
  created_at: string;
  updated_at: string;
  status_label: string;
  status_color: string;
}

export interface ProductData {
  id: number;
  name: string;
  category_id: number;
  sku: string;
  barcode: string;
  product_type_id: number;
  sub_category_id: number | null;
  sub_category_child_id: number | null;
  brand_id: number;
  slug: string;
  description: string;
  merchant_id: number;
  total_stock_qty: number;
  image: ProductImages;
  is_variant: boolean;
  thumbnail: string;
  rating_avg: number;
  rating_count: number;
  product_detail: ProductDetail;
  variations: ProductVariation[];
  merchant: Merchant;
  brand: Brand;
  shop_product: ShopProduct;
}

export interface SingleProductResponse {
  message: string;
  data: ProductData;
}
