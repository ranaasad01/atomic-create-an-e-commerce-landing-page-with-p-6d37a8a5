"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Star, ShoppingCart, Heart, ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones, Sparkles, TrendingUp, Award, ChevronRight, Check } from 'lucide-react';
import {
  APP_NAME,
  APP_TAGLINE,
  APP_CTA,
  categories,
  type Product,
} from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Inline mock data ──────────────────────────────────────────────

const products: Product[] = [
  {
    id: "1",
    name: "Aether Wireless Headphones",
    category: "Electronics",
    price: 189,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 1240,
    image: "https://kiwiears.com/cdn/shop/files/IMG_8002.jpg?v=1750832155&width=1946",
    badge: "Sale",
    badgeColor: "bg-rose-500",
    isBestseller: true,
  },
  {
    id: "2",
    name: "Linen Oversized Blazer",
    category: "Fashion",
    price: 134,
    originalPrice: 180,
    rating: 4.6,
    reviewCount: 832,
    image: "https://magiclinen.com/cdn/shop/products/HEBER-blazer-in-natural-melage-ROME-pants-in-natural-melange-OLINDA-top-in-white-1.jpg?v=1717593916&width=1946",
    badge: "New",
    badgeColor: "bg-emerald-500",
    isNew: true,
  },
  {
    id: "3",
    name: "Ceramic Pour-Over Set",
    category: "Home & Living",
    price: 68,
    rating: 4.9,
    reviewCount: 567,
    image: "https://m.media-amazon.com/images/I/7159+ELcEOL._AC_UF894,1000_QL80_.jpg",
    isBestseller: true,
  },
  {
    id: "4",
    name: "Lumière Glow Serum",
    category: "Beauty",
    price: 54,
    originalPrice: 72,
    rating: 4.7,
    reviewCount: 2103,
    image: "https://lavernecosmetics.com/cdn/shop/files/Lumiere_3_HA_AHA_Glowing_Lifting_Serum.jpg?v=1766081390",
    badge: "Sale",
    badgeColor: "bg-rose-500",
  },
  {
    id: "5",
    name: "Merino Wool Turtleneck",
    category: "Fashion",
    price: 98,
    rating: 4.5,
    reviewCount: 419,
    image: "https://www.slam.com/cdn/shop/files/A102006S00_W09_SEAWOOLTURTLENECK_F_00102_06101.jpg?v=1726740199&width=1946",
    isNew: true,
    badge: "New",
    badgeColor: "bg-emerald-500",
  },
  {
    id: "6",
    name: "Smart Fitness Tracker",
    category: "Sports",
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviewCount: 988,
    image: "https://m.media-amazon.com/images/I/61L0IA+A-LL.jpg",
    badge: "Sale",
    badgeColor: "bg-rose-500",
  },
  {
    id: "7",
    name: "Marble Desk Organiser",
    category: "Home & Living",
    price: 45,
    rating: 4.8,
    reviewCount: 312,
    image: "https://www.cazset.com/cdn/shop/products/IMG_6029_V2.jpg?v=1666696037&width=1946",
  },
  {
    id: "8",
    name: "Vitamin C Brightening Kit",
    category: "Beauty",
    price: 79,
    originalPrice: 99,
    rating: 4.7,
    reviewCount: 1456,
    image: "https://m.media-amazon.com/images/I/71TT7ug0rML._AC_UF1000,1000_QL80_.jpg",
    isBestseller: true,
    badge: "Sale",
    badgeColor: "bg-rose-500",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Sophia Reeves",
    role: "Interior Designer",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGiWy7zVuQKrg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702711854952?e=2147483647&v=beta&t=7PG_IDVERBJhpb-8o70xpemsDq9Rrn6r5F-lc9jYq_M",
    rating: 5,
    text: "Lumière has completely changed how I shop. The curation is impeccable — every product feels intentional and beautifully made. My ceramic pour-over set is a daily joy.",
  },
  {
    id: "t2",
    name: "Marcus Chen",
    role: "Creative Director",
    avatar: "https://podcastle.org/wp-content/uploads/2024/09/photo_2024-06-24_16-15-54-660x989.jpg",
    rating: 5,
    text: "I've been searching for a store that matches my taste without the endless scrolling. Lumière nails it. The headphones arrived in stunning packaging and sound incredible.",
  },
  {
    id: "t3",
    name: "Isla Fontaine",
    role: "Lifestyle Blogger",
    avatar: "https://cdn.shopify.com/s/files/1/2500/1236/files/logo_Venezia_300dpi.png?height=628&pad_color=ffffff&v=1613166103&width=1200",
    rating: 5,
    text: "Fast shipping, gorgeous products, and a returns process that's actually painless. I recommend Lumière to everyone who asks where I find my favourite things.",
  },
];

const valueProps = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on all orders over £60. Express options available at checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description: "Every product is verified and sourced directly from trusted artisans and brands.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Changed your mind? Return anything within 30 days, no questions asked.",
  },
  {
    icon: Headphones,
    title: "Concierge Support",
    description: "Our style advisors are available 7 days a week to help you find the perfect piece.",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "1,200+", label: "Curated Products" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Satisfaction Rate" },
];

// ─── Sub-components ─────────────────────────────────────────────────

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3.5 h-3.5 ${
              star <= Math.round(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-slate-500">({count.toLocaleString()})</span>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  const discount =
    product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <motion.div
      variants={prefersReduced ? {} : scaleIn}
      whileHover={prefersReduced ? {} : { y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80";
          }}
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${product.badgeColor ?? "bg-indigo-600"} text-white text-xs font-bold px-2.5 py-1 rounded-full`}
          >
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-12 bg-slate-900/80 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
        {/* Wishlist */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400"
            }`}
          />
        </motion.button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} />

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-slate-900">
              £{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
              addedToCart
                ? "bg-emerald-500 text-white"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {addedToCart ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" /> Add
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const prefersReduced = useReducedMotion();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const mv = (v: Variants) => (prefersReduced ? {} : v);

  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mv(staggerContainer)}
            className="text-center lg:text-left"
          >
            <motion.div variants={mv(fadeInUp)} className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              New Season Collection
            </motion.div>

            <motion.h1
              variants={mv(fadeInUp)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Discover
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Refined Living
              </span>
            </motion.h1>

            <motion.p
              variants={mv(fadeInUp)}
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {APP_TAGLINE} Explore our hand-picked edit of premium electronics, fashion, beauty, and home essentials — crafted for those who appreciate the extraordinary.
            </motion.p>

            <motion.div
              variants={mv(fadeInUp)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl transition-colors shadow-lg shadow-indigo-900/40"
              >
                {APP_CTA}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 transition-colors backdrop-blur-sm"
              >
                Our Story
              </motion.a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              variants={mv(fadeInUp)}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-white">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — hero product grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mv(staggerContainer)}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {products.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                variants={mv(scaleIn)}
                style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
                className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800 shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-1">{product.name}</p>
                  <p className="text-indigo-300 text-xs font-bold mt-0.5">£{product.price.toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Value Props ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  variants={mv(fadeInUp)}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{vp.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{vp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Categories ──────────────────────────────────────────────────────── */}
      <section id="categories" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="text-center mb-12"
          >
            <motion.p variants={mv(fadeInUp)} className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">
              Browse by Category
            </motion.p>
            <motion.h2 variants={mv(fadeInUp)} className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Find Your Perfect Match
            </motion.h2>
            <motion.p variants={mv(fadeInUp)} className="mt-4 text-slate-500 max-w-xl mx-auto">
              From cutting-edge electronics to timeless fashion — every category is curated with the same obsessive attention to quality.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                variants={mv(scaleIn)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveCategory(cat);
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all border ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                    : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────────────────── */}
      <section id="products" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <motion.p variants={mv(fadeInUp)} className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
                {activeCategory === "All" ? "Featured Products" : activeCategory}
              </motion.p>
              <motion.h2 variants={mv(fadeInUp)} className="text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeCategory === "All" ? "Handpicked for You" : `Shop ${activeCategory}`}
              </motion.h2>
            </div>
            <motion.div variants={mv(fadeIn)} className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {(filteredProducts ?? []).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p className="text-lg font-medium">No products in this category yet.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-indigo-600 font-semibold hover:underline text-sm"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Deals Banner ────────────────────────────────────────────────────── */}
      <section id="deals" className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={mv(slideInLeft)}>
              <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-3.5 h-3.5" />
                Limited Time Offer
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                Up to 30% Off
                <span className="block text-yellow-300">This Weekend Only</span>
              </h2>
              <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                Our biggest sale of the season. Hundreds of premium products reduced — from luxury skincare to designer fashion. Don&apos;t miss out.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveCategory("All");
                  document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-yellow-50 transition-colors shadow-xl"
              >
                Shop the Sale
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              variants={mv(slideInRight)}
              className="grid grid-cols-2 gap-4"
            >
              {products.filter((p) => p.badge === "Sale").slice(0, 4).map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-white/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80";
                      }}
                    />
                  </div>
                  <p className="text-white text-xs font-semibold line-clamp-1">{p.name}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-yellow-300 text-sm font-bold">£{p.price.toFixed(2)}</span>
                    {p.originalPrice && (
                      <span className="text-white/50 text-xs line-through">£{p.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="text-center mb-16"
          >
            <motion.p variants={mv(fadeInUp)} className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">
              Customer Stories
            </motion.p>
            <motion.h2 variants={mv(fadeInUp)} className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Loved by Thousands
            </motion.h2>
            <motion.p variants={mv(fadeInUp)} className="mt-4 text-slate-500 max-w-xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our community has to say.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={mv(fadeInUp)}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-slate-200"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={mv(staggerContainer)}
          >
            <motion.div variants={mv(fadeInUp)} className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Award className="w-3.5 h-3.5" />
              Join the Community
            </motion.div>
            <motion.h2 variants={mv(fadeInUp)} className="text-4xl font-extrabold text-white tracking-tight mb-4">
              Get Early Access &amp; Exclusive Offers
            </motion.h2>
            <motion.p variants={mv(fadeInUp)} className="text-slate-400 mb-8">
              Subscribe to our newsletter and be the first to know about new arrivals, flash sales, and style inspiration.
            </motion.p>
            <motion.form
              variants={mv(fadeInUp)}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
            <motion.p variants={mv(fadeInUp)} className="text-xs text-slate-500 mt-4">
              No spam, ever. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-extrabold text-white tracking-tight">{APP_NAME}</p>
              <p className="text-xs text-slate-500 mt-1">Refined living, delivered.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-slate-500">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((link) => (
                <a key={link} href="#" className="hover:text-slate-300 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved. Crafted with care.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
