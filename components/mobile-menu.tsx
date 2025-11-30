"use client";

import { BookOpen, HelpCircle, Info, Mail, Shield, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/privacy", label: "Privacy", icon: Shield },
    { href: "/posts", label: "Blog", icon: BookOpen },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="relative h-10 w-10 glass-effect border hover:border-primary transition-all duration-200"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="relative w-5 h-5">
          <span
            className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 top-2.5" : "top-1"
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : "top-2"
            }`}
          />
          <span
            className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 top-2.5" : "top-3"
            }`}
          />
        </div>
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOpen(false);
              }
            }}
            aria-label="Close menu"
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 border-l border-border z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-foreground">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 hover:bg-primary/10 rounded-full"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-6 space-y-3 overflow-y-auto bg-white dark:bg-gray-900">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-200 text-foreground group active:scale-[0.98]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-border/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground text-center font-medium">
                VSCode Extensions Hub
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
