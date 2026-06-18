"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowRight, Code2 as Github, MessageCircle as Twitter, Camera as Instagram } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, footerLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerLinkEntries = Object.entries(footerLinks);

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter Banner */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Get exclusive deals in your inbox
              </h3>
              <p className="text-slate-400 text-sm">
                Join 50,000+ shoppers. Unsubscribe anytime.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-auto">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-amber-400 font-semibold"
                >
                  <span className="text-xl">🎉</span>
                  <span>You&apos;re subscribed! Check your inbox.</span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex gap-2 w-full lg:w-auto"
                >
                  <div className="relative flex-1 lg:w-72">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{APP_NAME}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {APP_TAGLINE} We bring you the finest products from around the
              world, carefully selected for quality and style.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "Github" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinkEntries.map(([category, links], categoryIndex) => (
            <motion.div key={category} variants={fadeInUp}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={link.label}>
                    {categoryIndex === 3 && linkIndex === 0 ? (
                      <Link
                        href={getHref(link.href)}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                        style={{ color: "#000000", backgroundColor: "#4f46e5" }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        href={getHref(link.href)}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}