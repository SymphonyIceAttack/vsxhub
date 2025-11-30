"use client";

import { Download, Star } from "lucide-react";
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
    <Card className="group hover:shadow-lg hover:scale-[1.01] transition-all duration-300 glass-effect border hover:border-primary flex flex-col h-full mx-2 sm:mx-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 overflow-hidden flex-shrink-0 border border-primary/20">
              <img
                src={extension.icon || "/placeholder.svg"}
                alt={`${extension.name} icon`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.textContent) {
                    parent.classList.add(
                      "text-sm",
                      "sm:text-lg",
                      "font-bold",
                      "text-primary",
                    );
                    parent.textContent = extension.name.charAt(0).toUpperCase();
                  }
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base sm:text-lg text-balance group-hover:text-primary transition-colors leading-tight">
                {extension.name}
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {extension.publisher}
              </p>
              <Badge variant="secondary" className="mt-2 text-xs">
                {extension.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col flex-1 pt-0">
        <CardDescription className="text-sm leading-relaxed text-pretty line-clamp-3">
          {extension.description}
        </CardDescription>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">
              {extension.rating}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Download className="h-4 w-4 text-primary" />
            <span className="font-semibold text-foreground text-xs sm:text-sm">
              {extension.installs}
            </span>
          </div>
        </div>

        <Button
          className="w-full mt-auto bg-primary hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base py-2 sm:py-2.5"
          size="sm"
          onClick={handleInstall}
        >
          Install Extension
        </Button>
      </CardContent>
    </Card>
  );
}
