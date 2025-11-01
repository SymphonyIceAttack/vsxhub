"use client";

import { Download, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Extension {
  id: string;
  name: string;
  publisher: string;
  description: string;
  category: string;
  rating: string;
  installs: string;
  icon: string;
  extensionName: string;
}

export function ExtensionCard({ extension }: { extension: Extension }) {
  const handleInstall = () => {
    window.open(`vscode:extension/${extension.extensionName}`, "_blank");
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted overflow-hidden flex-shrink-0">
              <Image
                src={extension.icon || "/placeholder.svg"}
                alt={`${extension.name} icon`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.textContent) {
                    parent.classList.add(
                      "text-lg",
                      "font-semibold",
                      "text-muted-foreground",
                    );
                    parent.textContent = extension.name.charAt(0).toUpperCase();
                  }
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg text-balance">
                {extension.name}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {extension.publisher}
              </p>
              <Badge variant="secondary" className="mt-1 text-xs">
                {extension.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed text-pretty line-clamp-3">
          {extension.description}
        </CardDescription>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{extension.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>{extension.installs}</span>
          </div>
        </div>

        <Button className="w-full" size="sm" onClick={handleInstall}>
          Install Extension
        </Button>
      </CardContent>
    </Card>
  );
}
