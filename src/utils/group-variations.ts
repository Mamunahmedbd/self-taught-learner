import { ProductVariation } from "@/http/types";

export const groupVariations = (variations: ProductVariation[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attributesMap: Record<string, any> = {};

  // First, collect all unique attributes and their options
  variations.forEach(variation => {
    variation.variation_attributes.forEach(attr => {
      const attributeName = attr.attribute.name;
      const option = attr.attribute_option;

      if (!attributesMap[attributeName]) {
        attributesMap[attributeName] = {
          id: attr.attribute.id,
          name: attributeName,
          price: variation.regular_price,
          discount_price: variation.discount_price,
          options: new Map(), // Using Map to avoid duplicates
        };
      }

      // Add option if not already present
      if (!attributesMap[attributeName].options.has(option.id)) {
        attributesMap[attributeName].options.set(option.id, {
          id: option.id,
          value: option.attribute_value,
          slug: option.slug,
        });
      }
    });
  });

  // Convert Maps to arrays for easier rendering
  const groupedAttributes = Object.values(attributesMap).map(attr => {
    return {
      ...attr,
      options: Array.from(attr.options.values()),
    };
  });

  return groupedAttributes;
};
