export type NavLink = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  badgeColor?: string;
  isNew?: boolean;
  isBestseller?: boolean;
};

export const APP_NAME = "Lumière";
export const APP_TAGLINE = "Curated for the discerning eye.";
export const APP_CTA = "Shop Now";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#about" },
];

export const navCTA = { label: "View Cart", href: "#cart" };

export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Sports",
];

export const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "#products" },
    { label: "Best Sellers", href: "#products" },
    { label: "Sale", href: "#deals" },
    { label: "All Products", href: "#products" },
  ],
  Support: [
    { label: "FAQ", href: "#about" },
    { label: "Shipping Info", href: "#about" },
    { label: "Returns", href: "#about" },
    { label: "Track Order", href: "#about" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Press", href: "#about" },
    { label: "Contact", href: "#about" },
  ],
};