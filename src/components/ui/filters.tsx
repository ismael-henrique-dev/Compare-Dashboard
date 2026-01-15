"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const shops = ["Kabum", "Terabyte", "Pichau", "Aliexpress"];

function FilterShopSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const defaultValue = searchParams.get("class");
  const [selected, setSelected] = useState(defaultValue || "all");

  const getSelectedName = () => {
    if (selected === "all") return "Todos as lojas";
    return shops.find((i) => i === selected) ?? "Escolha uma loja";
  };

  const handleSelectTech = (option: string) => {
    setSelected(option);
    const params = new URLSearchParams(searchParams);

    if (option && option !== "all") {
      params.set("shop", option);
    } else if (option === "all") {
      params.delete("shop");
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <Select value={selected} onValueChange={handleSelectTech}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={getSelectedName()} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todas</SelectItem>
        {shops.map((shop) => (
          <SelectItem key={shop} value={shop}>
            {shop}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default FilterShopSelect;
