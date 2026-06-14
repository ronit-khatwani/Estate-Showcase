import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, status?: string): string {
  const fmt = (n: number) =>
    n >= 1_00_00_000
      ? `₹${(n / 1_00_00_000).toFixed(2)} Cr`
      : n >= 1_00_00_000 / 10
      ? `₹${(n / 1_00_000).toFixed(0)} L`
      : n >= 1_00_000
      ? `₹${(n / 1_00_000).toFixed(2)} L`
      : `₹${n.toLocaleString("en-IN")}`;

  if (status === "for_rent") {
    return `${fmt(price)}/mo`;
  }
  return fmt(price);
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

