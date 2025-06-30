import { Button } from "../ui/button";
import { groupVariations } from "@/utils/group-variations";
import { ProductData } from "@/http/types";
import { cn } from "@/lib/utils";

type IProps = {
  product: ProductData;
  selectedOptions: Record<string, string>;
  setSelectedOptions: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

export default function VariationOptions({ product, selectedOptions, setSelectedOptions }: IProps) {
  console.log(selectedOptions);

  // Group the variations
  const groupedAttributes = groupVariations(product?.variations || []);

  const handleOptionSelect = (attributeName: string, optionValue: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [attributeName]: optionValue,
    }));
  };
  return (
    <>
      {groupedAttributes?.map(attribute => (
        <div key={attribute.id}>
          <h3 className="text-sm font-medium text-gray-900">
            Select {attribute.name}: {selectedOptions[attribute.name]}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {attribute?.options?.map((option: Record<string, string>) => (
              <Button
                key={option.id}
                variant={"outline"}
                onClick={() => handleOptionSelect(attribute.name, option.value)}
                className={cn(
                  "w-16 cursor-pointer",
                  selectedOptions[attribute.name] === option.value &&
                    "border-[#00A788] text-[#00A788]",
                )}
              >
                {option.value}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
