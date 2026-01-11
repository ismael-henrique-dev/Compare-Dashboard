"use client";
import FilterShopSelect from "../ui/filters";
import { Label } from "../ui/label";
import { DatePicker } from "./date-picker";

function ScrapingErrorsFilters() {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-2">
      <div className="grid gap-1">
        <Label>Loja</Label>
        <FilterShopSelect />
      </div>

      <div className="grid gap-1 lg:col-span-1 col-span-2">
        <Label>Data</Label>
        <DatePicker />
      </div>
    </div>
  );
}

export default ScrapingErrorsFilters;
