"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "About", icon: "Info" },
    { href: "/contact", label: "Contact", icon: "Mail" },
    { href: "/faq", label: "FAQ", icon: "HelpCircle" },
    { href: "/privacy", label: "Privacy", icon: "Shield" },
    { href: "/posts", label: "Blog", icon: "BookOpen" },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="glass-effect border hover:border-primary transition-colors bg-transparent"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass-effect border-t border-border z-40">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors text-foreground hover:text-primary"
                >
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
