import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, status?: string): string {
  if (status === "for_rent") {
    if (price >= 10000) return `$${(price / 1000).toFixed(0)}k/mo`;
    return `$${price.toLocaleString()}/mo`;
  }
  if (price >= 1_000_000) return `$${(price / 1_000_000).toFixed(2)}M`;
  if (price >= 1_000) return `$${(price / 1_000).toFixed(0)}k`;
  return `$${price.toLocaleString()}`;
}

export function formatArea(area: number): string {
  if (area >= 43560) return `${(area / 43560).toFixed(2)} acres`;
  return `${area.toLocaleString()} sq ft`;
}

export function typeLabel(type: string): string {
  const map: Record<string, string> = {
    residential: "Residential",
    commercial: "Commercial",
    plot: "Plot / Land",
    industrial: "Industrial",
  };
  return map[type] ?? type;
}

export function statusLabel(status: string): string {
  const map: Record<string, string> = {
    for_sale: "For Sale",
    for_rent: "For Rent",
    sold: "Sold",
  };
  return map[status] ?? status;
}

export function typeColor(type: string): string {
  const map: Record<string, string> = {
    residential: "#c9a94b",
    commercial: "#4b8ec9",
    plot: "#4bc97a",
    industrial: "#c94b4b",
  };
  return map[type] ?? "#c9a94b";
}

